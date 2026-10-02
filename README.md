# ⚡ AeroSaaS (EJS Edition) — Server-Rendered Project & Team Collaboration Platform

> **The Official Real-World Showcase & Starter Kit for [AeroJS](https://github.com/atifsoftware/AeroJS) with EJS Templates**  
> Built with zero-dependency native SQLite, layered Full-Stack MVC, Active Record ORM, classic server-rendered EJS templates, and Tailwind CSS.

---

## ✨ Highlights & Architecture

- **Core Engine**: [AeroJS](https://github.com/atifsoftware/AeroJS) (ESM, zero external runtime dependencies)
- **Template Engine**: **EJS (Embedded JavaScript)** with asynchronous node streaming and partials layout architecture
- **100% Server-Side Rendered (MPA)**: Instant First Contentful Paint (FCP), zero client-side JavaScript hydration lag, and 100% SEO score
- **Database**: Native Node.js SQLite (`node:sqlite` in Node.js >= 22.5.0) with zero external compilation binaries
- **Styling**: Tailwind CSS with custom sleek dark theme and glassmorphic aesthetic
- **Active Record ORM**: Built-in AeroJS models (`User`, `Workspace`, `Project`, `Task`, `ActivityLog`, `Invitation`)
- **Security & Authorization**:
  - Scrypt-powered memory-hard password hashing (`Hash.make`, `Hash.verify`)
  - Cryptographic HMAC-signed Invitation URLs (`UrlSigner.sign`)
  - Multi-tenant workspace data scoping
- **Developer Experience**:
  - Interactive OpenAPI 3.0 / Swagger UI documentation at `/docs`
  - In-memory database migrations & seeders (`npm run seed`)

---

## 📸 Features & Views

| View | Description |
| :--- | :--- |
| **Authentication** | Server-rendered glassmorphic login and registration cards with 1-click demo auto-fill. |
| **Executive Dashboard** | Real-time project velocity metrics, priority workload breakdown, and team activity timeline. |
| **Projects Directory** | Multi-project cards with custom color themes, status badges, and dynamic progress bars. |
| **Sprint Kanban Board** | 5-column board (`Backlog`, `To Do`, `In Progress`, `In Review`, `Done`) with direct task status shifting. |
| **Global Tasks View** | Instant client-side search and multi-criteria filtering across all workspace initiatives. |
| **Team & Access Control** | Workspace members list with HMAC-signed expiring invitation link generator. |
| **Account Settings** | Profile management, display name customization, password changes, and 2FA status indicator. |

---

## ⚡ Quick Start

### 1. Requirements
- Node.js >= 22.5.0 (Recommended: Node 22 LTS or Node 24)

### 2. Setup & Database Initialization
```bash
# Clone and enter directory
cd AeroSaaS-EJS

# Copy environment variables
cp .env.example .env

# Install dependencies
npm install

# Build Tailwind CSS
npm run build:css

# Run database migrations and seed realistic demo data
npm run seed
```

### 3. Start Development Server
```bash
# Starts the AeroJS server (Port 3003) with live reload:
npm run dev
```

### 4. Or Run in Production Mode
```bash
npm run build:css
$env:APP_ENV="production"; npm start
```

Open [http://localhost:3003](http://localhost:3003) in your browser.

---

## 🔑 Demo Credentials

| Role | Email | Password |
| :--- | :--- | :--- |
| **Workspace Admin** | `alex@aerosaas.dev` | `secret123` |

---

## 📚 API Documentation

AeroSaaS EJS automatically publishes interactive Swagger OpenAPI documentation:
- **Swagger UI**: [http://localhost:3003/docs](http://localhost:3003/docs)
- **OpenAPI Specification**: [http://localhost:3003/openapi.json](http://localhost:3003/openapi.json)

---

## 📄 License

Open-source licensed under the [MIT License](LICENSE). Built with ❤️ for the **[AeroJS](https://github.com/atifsoftware/AeroJS)** ecosystem.
