# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Contains a full-stack e-commerce web application.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Frontend**: React + Vite + Tailwind CSS v4
- **Database**: In-memory JavaScript arrays (no external database)
- **Routing**: React Router DOM
- **State Management**: React Context (CartContext)
- **Validation**: Zod (`zod/v4`)
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle for API), Vite (frontend)

## Architecture

### Frontend (`artifacts/ecommerce/`)
- **Pages**: Home, Shop, Cart, Checkout
- **Components**: Navbar, ProductCard
- **Context**: CartContext for cart state management
- **API calls**: `GET /api/products` (Shop page), `POST /api/checkout` (Checkout page)

### Backend (`artifacts/api-server/`)
- **In-memory data**: `products` array (6 items), `orders` array
- **Endpoints**: 
  - `GET /api/products` - returns all products
  - `POST /api/checkout` - places an order
  - `GET /api/healthz` - health check

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/api-server run dev` — run API server locally
- `pnpm --filter @workspace/ecommerce run dev` — run frontend dev server

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
