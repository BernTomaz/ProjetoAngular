# 📘 Projeto Angular

> Aplicação Angular gerada com **Angular CLI 19.2.5**. Inclui suporte a **proxy** para backend e **API fake** via `json-server` para desenvolvimento local.

---

## 🚀 Requisitos

- Node.js 18+ (recomendado LTS)
- npm 9+ ou pnpm/yarn
- Angular CLI (global):

```bash
npm i -g @angular/cli
```

---

## 🧩 Scripts úteis

```bash
# Instalar dependências
npm install

# Servir a aplicação (com proxy se configurado)
npm start         # alias para: ng serve --proxy-config proxy.config.json

# Servir somente o Angular (sem proxy)
ng serve

# Subir mock API em http://localhost:3000
npm run mock      # alias para: json-server --watch db.json --port 3000

# Build de produção (saída em dist/)
npm run build     # alias para: ng build --configuration production

# Lint (corrige o que der automaticamente)
npm run lint      # ng lint --fix

# Testes unitários (Karma)
npm test          # ng test
```

---

## 🔌 Proxy & Mock API (desenvolvimento)

- **Proxy**  
  Redirecione chamadas (ex.: `/api`) para um servidor local/externo sem problemas de CORS.  
  O arquivo `proxy.config.json` já está no repositório. Para usar:

  ```bash
  ng serve --proxy-config proxy.config.json
  ```

- **Mock API**  
  Durante o desenvolvimento, simule o backend com `json-server` lendo `db.json`:

  ```bash
  npx json-server --watch db.json --port 3000
  ```

  Depois, aponte o proxy para `http://localhost:3000` — assim sua app consome `GET /api/...` e o proxy encaminha para o mock.

---

## 🛠️ Desenvolvimento

1. Instalar dependências:

   ```bash
   npm install
   ```

2. Subir mock API (opcional, se não houver backend real):

   ```bash
   npm run mock
   ```

3. Servir a aplicação com proxy:

   ```bash
   npm start
   ```

4. Acessar: [http://localhost:4200/](http://localhost:4200/)

A aplicação recarrega automaticamente a cada alteração nos arquivos de `src/`.

---

## 🗂️ Estrutura de pastas (resumo)

```
ProjetoAngular/
├─ src/
│  ├─ app/
│  │  ├─ core/            # serviços 'singleton', guards, interceptors
│  │  ├─ shared/          # componentes e pipes reutilizáveis
│  │  ├─ features/        # módulos de features (lazy-loaded quando possível)
│  │  ├─ app.config.ts    # providers, rota raiz, etc.
│  │  └─ app.component.*  # shell principal
│  ├─ assets/             # imagens, ícones, arquivos estáticos
│  ├─ environments/       # environment.ts / environment.prod.ts
│  └─ main.ts
├─ db.json                # base de dados para json-server (mock)
├─ proxy.config.json      # config de proxy do Angular dev-server
├─ angular.json           # configuração do workspace Angular
├─ package.json           # scripts e dependências
└─ README.md
```

---

## 🧱 Padrões e convenções

### Arquitetura
- Agrupar por **feature** (`src/app/features/<feature-name>`).
- Módulos/rotas **lazy-loaded** para telas pesadas.
- `core` para serviços globais (ex.: `AuthInterceptor`, `AuthGuard`).
- `shared` para UI/Pipes reutilizáveis.

### Estilo de código
- Seguir o ESLint do projeto (`npm run lint`).
- Nomear componentes como `FeatureThingComponent` e serviços como `ThingService`.
- Usar `OnPush` quando possível e `trackBy` em `*ngFor` para performance.

### Commits
- Sugestão: **Conventional Commits**  
  `feat: ...`, `fix: ...`, `docs: ...`, `refactor: ...`, `test: ...`, `chore: ...`

---

## 🔐 Variáveis de ambiente

Use:

- `src/environments/environment.ts`  
- `src/environments/environment.prod.ts`

para chaves e URLs (sem segredos sensíveis).

Em produção, forneça variáveis via pipeline (CI/CD) e substituições do `angular.json` (`fileReplacements`).

---

## 🧪 Testes

- **Unitários** com Karma/Jasmine:

  ```bash
  npm test
  ```

- Cubra serviços, pipes e componentes com dependências críticas (HTTP, formulários, etc.).
- Prefira testes de componentes **shallow** quando o objetivo for rapidez.

---

## 📦 Build & Deploy

- **Build prod**:

  ```bash
  npm run build
  ```

  Saída em `dist/`.

- **Servir estático** (exemplos):
  - Nginx/Apache (copie o conteúdo de `dist/` para a raiz do host).
  - GitHub Pages / Firebase Hosting / Vercel (ajuste rewrites para SPA: redirecionar 404 → `index.html`).

---

## 🧰 Troubleshooting

- **CORS em dev**: rode com proxy (`npm start`) para evitar CORS.
- **404 em refresh (SPA)**: configure rewrite de todas as rotas para `index.html`.
- **Portas ocupadas**: mude a porta com `ng serve --port 4300` ou a do mock `--port 3001`.

---

## 📜 Licença
Este projeto está sob a licença **MIT**. Sinta-se livre para utilizá-lo e contribuir!




---


