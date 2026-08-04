# NAE Guanhães — site do Núcleo de Apoio Estudantil

Site estático do Núcleo de Apoio Estudantil (NAE) da **UEMG — Unidade Guanhães**.
Sem dependências, sem build: são páginas HTML, uma folha de estilo e dois scripts.

**Coordenação:** Jonatan Barbosa Silva
**Contato do NAE:** nae.guanhaes@uemg.br — sala no **Prédio do Administrativo**,
atendimento às terças e quintas das 18h às 19h; quartas mediante agendamento prévio por e-mail.

## Páginas

| Arquivo | Conteúdo |
| --- | --- |
| `index.html` | Tela inicial com carrossel de serviços e atalhos |
| `email.html` | Guia ilustrado do e-mail institucional (10 etapas) |
| `horarios.html` | Grade de horários 2026.2 — Direito e Engenharia Civil |
| `mapa.html` | Planta do campus, com salas clicáveis |
| `sobre.html` | O que é o NAE e o que ele faz |
| `contato.html` | Sala do NAE, atendimento e contatos da unidade |

## Estrutura

```
assets/estilo.css     folha de estilo única (tema claro e escuro)
assets/site.js        carrossel, revelação ao rolar, montador de e-mail
assets/horarios.js    dados das 12 turmas + filtro, busca e link do mapa
assets/logo.svg       logo horizontal do NAE
assets/favicon.svg    ícone do site
```

## Publicar no GitHub Pages

1. Envie os arquivos para o repositório (branch `main`).
2. No GitHub, vá em **Settings → Pages**.
3. Em *Build and deployment*, escolha **Deploy from a branch**.
4. Selecione a branch `main` e a pasta `/ (root)`. Salve.
5. Em um ou dois minutos o site fica disponível em
   `https://<usuário>.github.io/<repositório>/`.

## Como atualizar o conteúdo

- **Horários:** edite a lista `TURMAS` em `assets/horarios.js`. Cada turma tem
  curso, período, turma, sala e as linhas de horário. Uma célula vazia é `_`.
- **Professores:** o objeto `P`, no topo do mesmo arquivo, guarda os nomes completos.
- **Mapa:** as salas estão em `mapa.html`, dentro do `<svg class="planta">`.
  Cada sala é um `<a href="horarios.html?sala=N">`.
- **Cores:** todas as cores saem das variáveis no topo de `assets/estilo.css`.

## Fontes dos dados

- Manual de Redefinição de Senha (Discente) — UEMG
- Horário de Aulas — UEMG Guanhães 2026.2
- Mapa de Salas 2026.2 — UEMG Guanhães

---

Desenvolvido por **Jonatan Barbosa Silva**.
