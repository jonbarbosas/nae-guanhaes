/* ═══════════════════════════════════════════════════════
   NAE Guanhães — grades de horários 2026.2
   Fonte: quadro oficial da Unidade Guanhães
   ═══════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var lista = document.getElementById('lista-turmas');
  if (!lista) return;

  var P = {
    IS: 'Prof. Me. Isaac Maynart Carvalho Moyses Souza',
    FR: 'Prof. Esp. Franklin Leonardo Ferreira Flauzino',
    VI: 'Prof. Dr. Vinícius de Souza Faggion',
    AL: 'Prof. Dr. Alan Ricardo Pereira',
    JU: 'Prof. Me. Júlio César da Costa Silva',
    ER: 'Profa. Me. Érika Campos Barreira',
    TH: 'Profa. Esp. Thays Ferreira Ventura',
    GA: 'Profa. Dra. Gabriella de Morais',
    JO: 'Prof. Esp. Jonatan Barbosa Silva',
    LI: 'Profa. Me. Liliane da Silva Santos',
    PA: 'Profa. Me. Paula Ribeiro',
    JM: 'Prof. Me. Júlio César Marques Júnior',
    GI: 'Profa. Me. Gisele Horta Barroso Miranda',
    BR: 'Prof. Dr. Bruno de Sousa Ferreira',
    FE: 'Prof. Dr. Fernando Eustáquio Dantas dos Santos',
    MI: 'Prof. Esp. Michel Santos Perpétuo',
    SA: 'Profa. Dra. Sâmara França',
    LU: 'Prof. Me. Luiz Otávio Menezes Teles',
    CE: 'Profa. Me. Celina de Pinho Barroso',
    AP: 'Profa. Esp. Ana Paula de Figueiredo'
  };
  var _ = 0;
  function c(d, p) { return [d, P[p]]; }

  var TURMAS = [
    { curso: 'Direito', periodo: '2º período', turma: 'Turma V', sala: 'Sala nº 10', salaId: '10', linhas: [
      { h: '19h–20h40', cel: [ c('Teoria da Constituição (Híbrida)','IS'), c('Teoria Geral do Direito Privado 1','FR'), c('Introdução à Ciência do Direito 2','VI'), c('Filosofia do Direito','AL'), c('Sociologia Jurídica','AL'), c('Teoria da Constituição (Híbrida)','IS') ] },
      { h: '20h50–22h30', cel: [ c('História do Direito (Híbrida)','JU'), c('Teoria Geral do Direito Privado 1','FR'), c('Teoria Geral do Estado','ER'), c('Filosofia do Direito','AL'), c('Sociologia Jurídica','AL'), c('História do Direito (Híbrida)','JU') ] }
    ]},
    { curso: 'Direito', periodo: '4º período', turma: 'Turma IV', sala: 'Sala nº 7', salaId: '7', linhas: [
      { h: '19h–20h40', cel: [ c('Direito Civil 1 – Obrigações (Híbrida)','TH'), c('Direito Constitucional 2','IS'), c('Direitos Humanos','AL'), c('Teoria Geral do Processo','GA'), c('Direito Penal 2','JU'), c('Direito Civil 1 – Obrigações (Híbrida)','TH') ] },
      { h: '20h50–22h30', cel: [ c('Direito Administrativo 1 (Híbrida)','IS'), c('Direito Constitucional 2','IS'), c('Direitos Humanos','AL'), c('Teoria Geral do Processo','GA'), c('Direito Penal 2','JU'), c('Direito Administrativo 1 (Híbrida)','IS') ] }
    ]},
    { curso: 'Direito', periodo: '6º período', turma: 'Turma III', sala: 'Sala nº 6', salaId: '6', linhas: [
      { h: '19h–20h40', cel: [ c('Direito Penal 4 (Híbrida)','JU'), c('Direito Processual Civil 2','GA'), c('Direito Administrativo 3','IS'), c('Formas Consensuais de Resolução de Conflitos (Híbrida)','JO'), _, c('Formas Consensuais de Resolução de Conflitos (Híbrida)','JO') ] },
      { h: '20h50–22h30', cel: [ c('Direito Civil 3 – Contratos em Espécie (Híbrida)','TH'), c('Direito Processual Civil 2','GA'), c('Direito Administrativo 3','IS'), c('Ética e Estatuto da OAB','ER'), c('Direito Empresarial 2 (Híbrida)','ER'), c('Direito Civil 3 – Contratos em Espécie (Híbrida)','TH') ] },
      { h: 'EaD', cel: [ _, _, _, _, _, c('Direito Empresarial 2 (Híbrida)','ER') ] },
      { h: 'EaD', cel: [ _, _, _, _, _, c('Direito Penal 4 (Híbrida)','JU') ] }
    ]},
    { curso: 'Direito', periodo: '7º período', turma: 'Turma II', sala: 'Sala nº 5', salaId: '5', linhas: [
      { h: '17h20–19h', cel: [ c('Prática Real 1 (Estágio)','FR'), c('Prática Real 1 (Estágio)','FR'), c('Prática Simulada 1 (Estágio)','FR'), _, _, c('Direito do Trabalho 1 (Híbrida)','LI') ] },
      { h: '19h–20h40', cel: [ c('Direito Processual Civil 3','GA'), c('Direito Civil 4 – Direitos Reais','JO'), c('Direito do Trabalho 1 (Híbrida)','LI'), c('Direito Processual Penal 1','JU'), c('Direito Empresarial 3 (Híbrida)','ER'), c('Direito Empresarial 3 (Híbrida)','ER') ] },
      { h: '20h50–22h30', cel: [ c('Direito Processual Civil 3','GA'), c('Direito Civil 4 – Direitos Reais','JO'), c('Direito Financeiro (Híbrida)','LI'), c('Direito Processual Penal 1','JU'), _, c('Direito Financeiro (Híbrida)','LI') ] }
    ]},
    { curso: 'Direito', periodo: '10º período', turma: 'Turma I', sala: 'Sala nº 4', salaId: '4', linhas: [
      { h: '17h20–19h', cel: [ c('Prática Simulada 4 (Estágio)','TH'), c('Prática Real 4 (Estágio)','LI'), c('Prática Real 4 (Estágio)','LI'), _, c('Direitos da Criança e do Adolescente – ECA (Optativa)','TH'), c('Direito Eleitoral (Híbrida)','ER') ] },
      { h: '19h–20h40', cel: [ c('Direitos Culturais e Antropologia','LI'), c('Direito da Seguridade Social','LI'), c('Direito Eleitoral (Híbrida)','ER'), c('Direito Digital','ER'), c('Direito Processual do Trabalho 2','TH'), _ ] },
      { h: '20h50–22h30', cel: [ _, c('Direito da Seguridade Social','LI'), _, c('Direito Internacional Privado','JO'), c('Direito Processual do Trabalho 2','TH'), _ ] }
    ]},
    { curso: 'Direito', periodo: 'Turmas extras', turma: 'Trabalho de Conclusão de Curso', sala: 'A distância', salaId: '', linhas: [
      { h: 'EaD', cel: [ _, _, _, _, _, c('Elaboração de Projeto de Trabalho de Conclusão de Curso (EaD)','FR') ] },
      { h: 'EaD', cel: [ _, _, _, _, _, c('Elaboração de Trabalho de Conclusão de Curso (EaD)','AL') ] }
    ]},

    { curso: 'Engenharia Civil', periodo: '2º período', turma: 'Turma V', sala: 'Sala nº 8', salaId: '8', linhas: [
      { h: '18h10–19h', cel: [ c('Desenho Técnico','PA'), c('Geometria Analítica e Álgebra Linear','JM'), c('Humanidades e Ciências Sociais (Híbrida)','AL'), c('Ciência dos Materiais','GI'), c('Ciência dos Materiais','GI'), c('Fundamentos de Computação (Híbrida)','JM') ] },
      { h: '19h–19h50', cel: [ c('Desenho Técnico','PA'), c('Geometria Analítica e Álgebra Linear','JM'), c('Cálculo Diferencial e Integral I','BR'), c('Ciência dos Materiais','GI'), c('Ciência dos Materiais','GI'), c('Humanidades e Ciências Sociais (Híbrida)','AL') ] },
      { h: '19h50–20h40', cel: [ c('Desenho Técnico','PA'), c('Desenho Técnico','PA'), c('Cálculo Diferencial e Integral I','BR'), _, _, _ ] },
      { h: '20h50–21h40', cel: [ c('Cálculo Diferencial e Integral I','BR'), c('Fundamentos de Computação (Híbrida)','JM'), c('Metodologia Científica','GI'), c('Geometria Analítica e Álgebra Linear','JM'), _, _ ] },
      { h: '21h40–22h30', cel: [ c('Cálculo Diferencial e Integral I','BR'), c('Fundamentos de Computação (Híbrida)','JM'), c('Metodologia Científica','GI'), c('Geometria Analítica e Álgebra Linear','JM'), _, _ ] }
    ]},
    { curso: 'Engenharia Civil', periodo: '3º período', turma: 'Turma IV', sala: 'Sala nº 11', salaId: '11', linhas: [
      { h: '18h10–19h', cel: [ c('Física I','FE'), c('Física I','FE'), c('Topografia Aplicada à Engenharia Civil I','GI'), c('Estatística e Probabilidade','JM'), c('Estatística e Probabilidade','JM'), c('Ciências do Ambiente (EaD)','GI') ] },
      { h: '19h–19h50', cel: [ c('Física I','FE'), c('Física I','FE'), c('Topografia Aplicada à Engenharia Civil I','GI'), c('Estatística e Probabilidade','JM'), c('Estatística e Probabilidade','JM'), _ ] },
      { h: '19h50–20h40', cel: [ c('Laboratório de Física I (Turma A)','FE'), c('Laboratório de Física I (Turma B)','FE'), c('Topografia Aplicada à Engenharia Civil I','GI'), _, _, _ ] },
      { h: '20h50–21h40', cel: [ c('Arquitetura e Urbanismo','PA'), c('Arquitetura e Urbanismo','PA'), c('Laboratório de Física I (Turma A)','FE'), c('Cálculo Diferencial e Integral II','BR'), c('Cálculo Diferencial e Integral II','BR'), _ ] },
      { h: '21h40–22h30', cel: [ c('Arquitetura e Urbanismo','PA'), c('Arquitetura e Urbanismo','PA'), c('Laboratório de Física I (Turma B)','FE'), c('Cálculo Diferencial e Integral II','BR'), c('Cálculo Diferencial e Integral II','BR'), _ ] }
    ]},
    { curso: 'Engenharia Civil', periodo: '5º período', turma: 'Turma III', sala: 'Sala nº 9', salaId: '9', linhas: [
      { h: '18h10–19h', cel: [ c('Mecânica dos Solos II','MI'), c('Materiais de Construção I (Híbrida)','SA'), c('Física III (Híbrida)','FE'), c('Cálculo Diferencial e Integral IV','BR'), c('Cálculo Diferencial e Integral IV','BR'), c('Materiais de Construção I (Híbrida)','SA') ] },
      { h: '19h–19h50', cel: [ c('Mecânica dos Solos II','MI'), c('Materiais de Construção I (Híbrida)','SA'), c('Física III (Híbrida)','FE'), c('Cálculo Diferencial e Integral IV','BR'), c('Cálculo Diferencial e Integral IV','BR'), c('Física III (Híbrida)','FE') ] },
      { h: '19h50–20h40', cel: [ c('Mecânica dos Solos II','MI'), c('Mecânica dos Solos II','MI'), c('Física III (Híbrida)','FE'), c('Mecânica dos Fluidos','JM'), c('Mecânica dos Fluidos','JM'), _ ] },
      { h: '20h50–21h40', cel: [ c('Teoria das Estruturas I','LU'), c('Teoria das Estruturas I','LU'), c('Resistência dos Materiais I','LU'), c('Resistência dos Materiais I','LU'), c('Mecânica dos Fluidos','JM'), _ ] },
      { h: '21h40–22h30', cel: [ c('Teoria das Estruturas I','LU'), c('Teoria das Estruturas I','LU'), c('Resistência dos Materiais I','LU'), c('Resistência dos Materiais I','LU'), c('Mecânica dos Fluidos','JM'), _ ] }
    ]},
    { curso: 'Engenharia Civil', periodo: '7º período', turma: 'Turma II', sala: 'Sala nº 2', salaId: '2', linhas: [
      { h: '18h10–19h', cel: [ c('Concreto Armado I','LU'), c('Tecnologia das Construções I','MI'), c('Tecnologia das Construções I','MI'), c('Teoria das Estruturas III','LU'), _, c('Higiene Industrial e Segurança do Trabalho (Híbrida)','GI') ] },
      { h: '19h–19h50', cel: [ c('Concreto Armado I','LU'), c('Tecnologia das Construções I','MI'), c('Tecnologia das Construções I','MI'), c('Teoria das Estruturas III','LU'), _, _ ] },
      { h: '19h50–20h40', cel: [ c('Concreto Armado I','LU'), c('Concreto Armado I','LU'), c('Teoria das Estruturas III','LU'), c('Teoria das Estruturas III','LU'), c('Desenho Assistido por Computador (Optativa)','AP'), _ ] },
      { h: '20h50–21h40', cel: [ c('Estradas','MI'), c('Estradas','MI'), _, c('Higiene Industrial e Segurança do Trabalho (Híbrida)','GI'), c('Desenho Assistido por Computador (Optativa)','AP'), _ ] },
      { h: '21h40–22h30', cel: [ c('Estradas','MI'), c('Estradas','MI'), _, c('Higiene Industrial e Segurança do Trabalho (Híbrida)','GI'), c('Desenho Assistido por Computador (Optativa)','AP'), _ ] }
    ]},
    { curso: 'Engenharia Civil', periodo: '10º/9º período', turma: 'Turma I', sala: 'Sala nº 3', salaId: '3', linhas: [
      { h: '18h10–19h', cel: [ c('Planejamento e Orçamento','SA'), c('Pontes','LU'), c('Pontes','LU'), c('Fundações','CE'), c('Fundações','CE'), c('Trabalho de Conclusão de Curso I (EaD)','PA') ] },
      { h: '19h–19h50', cel: [ c('Planejamento e Orçamento','SA'), c('Pontes','LU'), c('Pontes','LU'), c('Fundações','CE'), c('Fundações','CE'), _ ] },
      { h: '19h50–20h40', cel: [ c('Planejamento e Orçamento','SA'), c('Planejamento e Orçamento','SA'), _, c('Pesquisa Operacional Aplicada à Engenharia Civil','GI'), c('Pesquisa Operacional Aplicada à Engenharia Civil','GI'), _ ] },
      { h: '20h50–21h40', cel: [ c('Hidrologia Aplicada','SA'), c('Hidrologia Aplicada','SA'), c('Patologia das Construções','CE'), c('Patologia das Construções','CE'), c('Pesquisa Operacional Aplicada à Engenharia Civil','GI'), _ ] },
      { h: '21h40–22h30', cel: [ c('Hidrologia Aplicada','SA'), c('Hidrologia Aplicada','SA'), c('Patologia das Construções','CE'), c('Patologia das Construções','CE'), c('Pesquisa Operacional Aplicada à Engenharia Civil','GI'), _ ] }
    ]},
    { curso: 'Engenharia Civil', periodo: 'Turmas extras', turma: 'Dependências e TCC', sala: 'Sala nº 1', salaId: '1', linhas: [
      { h: '18h10–19h', cel: [ c('Cálculo Diferencial e Integral I','BR'), _, _, _, _, c('Trabalho de Conclusão de Curso II (EaD)','LU') ] },
      { h: '19h–19h50', cel: [ c('Cálculo Diferencial e Integral I','BR'), _, _, _, _, _ ] },
      { h: '19h50–20h40', cel: [ _, _, _, c('Estruturas Metálicas','CE'), c('Estruturas Metálicas','CE'), _ ] },
      { h: '20h50–21h40', cel: [ c('Mecânica Geral','FE'), c('Mecânica Geral','FE'), c('Cálculo Diferencial e Integral I','BR'), _, c('Estruturas Metálicas','CE'), _ ] },
      { h: '21h40–22h30', cel: [ c('Mecânica Geral','FE'), c('Mecânica Geral','FE'), c('Cálculo Diferencial e Integral I','BR'), _, c('Estruturas Metálicas','CE'), _ ] }
    ]}
  ];

  var DIAS = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'EaD'];

  function escapar(s) {
    return String(s).replace(/[&<>"]/g, function (ch) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[ch];
    });
  }

  function celula(cel, ehEad) {
    if (!cel) return '<td class="vaga' + (ehEad ? ' ead' : '') + '">—</td>';
    var nome = cel[0], tag = '';
    var marca = nome.match(/\s*\((Híbrida|EaD|Estágio|Optativa)\)\s*$/);
    if (marca) {
      nome = nome.replace(marca[0], '');
      var mapa = { 'Híbrida': 'hib', 'EaD': 'ead', 'Estágio': 'est', 'Optativa': 'opt' };
      tag = '<span class="tag ' + mapa[marca[1]] + '">' + marca[1] + '</span>';
    }
    return '<td' + (ehEad ? ' class="ead"' : '') + '><span class="disc">' + escapar(nome) + tag +
           '</span><span class="doc">' + escapar(cel[1]) + '</span></td>';
  }

  function montarTurma(t) {
    var cor = t.curso === 'Direito' ? 'var(--blue)' : 'var(--green)';
    var thead = '<tr><th>Horário</th>' + DIAS.map(function (d) { return '<th>' + d + '</th>'; }).join('') + '</tr>';
    var tbody = t.linhas.map(function (l) {
      return '<tr><th scope="row">' + escapar(l.h) + '</th>' +
        l.cel.map(function (cel, i) { return celula(cel, i === 5); }).join('') + '</tr>';
    }).join('');

    return '<article class="turma" id="sala-' + escapar(t.salaId) + '" data-curso="' + escapar(t.curso) +
      '" data-sala="' + escapar(t.salaId) + '" style="--c: ' + cor + '">' +
      '<div class="turma-head">' +
        '<span class="curso">' + escapar(t.curso) + '</span>' +
        '<h3>' + escapar(t.periodo) + ' · ' + escapar(t.turma) + '</h3>' +
        '<span class="sala">' + escapar(t.sala) + '</span>' +
      '</div>' +
      '<div class="rolagem"><table class="grade"><thead>' + thead + '</thead><tbody>' + tbody + '</tbody></table></div>' +
    '</article>';
  }

  lista.innerHTML = TURMAS.map(montarTurma).join('') +
    '<p class="vazio-busca" id="sem-resultado" hidden>Nenhuma turma encontrada para esta busca.</p>';

  /* ── Filtro e busca ───────────────────────────────── */
  var cursoAtivo = 'todos', termo = '';
  var artigos = Array.prototype.slice.call(lista.querySelectorAll('.turma'));
  var semResultado = document.getElementById('sem-resultado');
  var contagem = document.getElementById('contagem');

  function normaliza(s) {
    return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  }

  function aplicar() {
    var visiveis = 0;
    artigos.forEach(function (a) {
      var okCurso = cursoAtivo === 'todos' || a.getAttribute('data-curso') === cursoAtivo;
      var okTermo = !termo || normaliza(a.textContent).indexOf(termo) !== -1;
      var mostra = okCurso && okTermo;
      a.hidden = !mostra;
      if (mostra) visiveis++;
    });
    if (semResultado) semResultado.hidden = visiveis > 0;
    if (contagem) contagem.textContent = visiveis + (visiveis === 1 ? ' turma' : ' turmas');
  }

  document.querySelectorAll('.chip[data-curso]').forEach(function (b) {
    b.addEventListener('click', function () {
      cursoAtivo = b.getAttribute('data-curso');
      document.querySelectorAll('.chip[data-curso]').forEach(function (o) {
        o.setAttribute('aria-pressed', o === b ? 'true' : 'false');
      });
      aplicar();
    });
  });

  var campoBusca = document.getElementById('in-busca');
  if (campoBusca) {
    campoBusca.addEventListener('input', function (e) {
      termo = normaliza(e.target.value.trim());
      aplicar();
    });
  }

  aplicar();

  /* ── Chegada pelo mapa: horarios.html?sala=6#sala-6 ─ */
  var pedido = new URLSearchParams(window.location.search).get('sala');
  if (!pedido && /^#sala-\d+$/.test(window.location.hash)) {
    pedido = window.location.hash.replace('#sala-', '');
  }
  if (pedido) {
    var alvo = lista.querySelector('.turma[data-sala="' + pedido.replace(/[^0-9]/g, '') + '"]');
    if (alvo) {
      alvo.classList.add('destaque');
      setTimeout(function () {
        alvo.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 120);
      setTimeout(function () { alvo.classList.remove('destaque'); }, 4200);
    }
  }
})();
