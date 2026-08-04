/* ═══════════════════════════════════════════════════════
   NAE Guanhães — comportamentos compartilhados
   ═══════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var reduzir = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── Revelação suave ao rolar ─────────────────────── */
  var alvos = document.querySelectorAll('.reveal');
  if (!alvos.length) { /* nada a fazer */ }
  else if (reduzir || !('IntersectionObserver' in window)) {
    alvos.forEach(function (el) { el.classList.add('visivel'); });
  } else {
    var obs = new IntersectionObserver(function (ents) {
      ents.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('visivel'); obs.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: .05 });
    alvos.forEach(function (el) { obs.observe(el); });
  }

  /* ── Carrossel ────────────────────────────────────── */
  document.querySelectorAll('[data-carrossel]').forEach(function (car) {
    var trilho = car.querySelector('.trilho');
    var slides = Array.prototype.slice.call(trilho.children);
    var caixaPontos = car.querySelector('.pontos');
    var btnPrev = car.querySelector('[data-seta="prev"]');
    var btnNext = car.querySelector('[data-seta="next"]');
    if (slides.length < 2) return;

    var atual = 0, timer = null, pausado = false;

    function visiveis() {
      var largura = slides[0].getBoundingClientRect().width;
      return Math.max(1, Math.round(trilho.clientWidth / (largura || 1)));
    }
    function maximo() { return Math.max(0, slides.length - visiveis()); }

    function irPara(i, suave) {
      atual = Math.min(Math.max(i, 0), maximo());
      trilho.scrollTo({
        left: slides[atual].offsetLeft - slides[0].offsetLeft,
        behavior: suave === false || reduzir ? 'auto' : 'smooth'
      });
      sincronizar();
    }

    function detectar() {
      var pos = trilho.scrollLeft + slides[0].offsetLeft;
      var melhor = 0, dist = Infinity;
      slides.forEach(function (s, i) {
        var d = Math.abs(s.offsetLeft - pos);
        if (d < dist) { dist = d; melhor = i; }
      });
      atual = melhor;
      sincronizar();
    }

    function sincronizar() {
      if (caixaPontos) {
        Array.prototype.forEach.call(caixaPontos.children, function (p, i) {
          p.setAttribute('aria-current', i === atual ? 'true' : 'false');
        });
      }
      if (btnPrev) btnPrev.disabled = atual <= 0;
      if (btnNext) btnNext.disabled = atual >= maximo();
    }

    if (caixaPontos) {
      slides.forEach(function (s, i) {
        var p = document.createElement('button');
        p.type = 'button';
        p.className = 'ponto';
        p.setAttribute('aria-label', 'Ir para o item ' + (i + 1) + ' de ' + slides.length);
        p.addEventListener('click', function () { irPara(i); reiniciar(); });
        caixaPontos.appendChild(p);
      });
    }

    if (btnPrev) btnPrev.addEventListener('click', function () { irPara(atual - 1); reiniciar(); });
    if (btnNext) btnNext.addEventListener('click', function () { irPara(atual + 1); reiniciar(); });

    var pendente = null;
    trilho.addEventListener('scroll', function () {
      if (pendente) return;
      pendente = setTimeout(function () { pendente = null; detectar(); }, 120);
    }, { passive: true });

    window.addEventListener('resize', function () { sincronizar(); });

    /* rotação automática */
    function avancar() {
      if (pausado || document.hidden) return;
      irPara(atual >= maximo() ? 0 : atual + 1);
    }
    function iniciar() { if (!reduzir && !timer) timer = setInterval(avancar, 6000); }
    function parar() { if (timer) { clearInterval(timer); timer = null; } }
    function reiniciar() { parar(); iniciar(); }

    ['mouseenter', 'focusin', 'touchstart', 'pointerdown'].forEach(function (ev) {
      car.addEventListener(ev, function () { pausado = true; }, { passive: true });
    });
    ['mouseleave', 'focusout'].forEach(function (ev) {
      car.addEventListener(ev, function () { pausado = false; }, { passive: true });
    });
    document.addEventListener('visibilitychange', function () { if (document.hidden) parar(); else iniciar(); });

    sincronizar();
    iniciar();
  });

  /* ── Montador do endereço institucional ───────────── */
  var nome = document.getElementById('in-nome');
  var mat  = document.getElementById('in-mat');
  var out  = document.getElementById('out-email');

  if (nome && mat && out) {
    var aviso = document.getElementById('copiado');

    var limpar = function (v, soNumero) {
      v = (v || '').trim().toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
      return soNumero ? v.replace(/\D/g, '') : v.replace(/[^a-z]/g, '');
    };
    var montar = function () {
      out.textContent = (limpar(nome.value, false) || 'cicrano') + '.' +
                        (limpar(mat.value, true) || '0000000') + '@discente.uemg.br';
      if (aviso) aviso.hidden = true;
    };

    nome.addEventListener('input', montar);
    mat.addEventListener('input', montar);

    var btnCopiar = document.getElementById('btn-copiar');
    if (btnCopiar) {
      btnCopiar.addEventListener('click', function () {
        var texto = out.textContent;
        var ok = function () {
          if (!aviso) return;
          aviso.hidden = false;
          setTimeout(function () { aviso.hidden = true; }, 2200);
        };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(texto).then(ok, function () {});
        } else {
          var ta = document.createElement('textarea');
          ta.value = texto; document.body.appendChild(ta); ta.select();
          try { document.execCommand('copy'); ok(); } catch (e) {}
          document.body.removeChild(ta);
        }
      });
    }
  }
})();
