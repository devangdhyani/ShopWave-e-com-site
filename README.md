# ShopWave-e-com-site
# ShopWave

ShopWave is a cutting-edge, modern e-commerce platform built with an engaging 3D user interface, smooth animations, and a robust backend.



## 🚀 Features

- **Immersive 3D UI Context:** Powered by React Three Fiber and `three.js` for dynamic, visually striking components.
- **Modern UI/UX:** Built with React, Vite, Framer Motion, and Tailwind CSS. Employs Radix UI primitives for an accessible, beautiful component system.
- **Robust Backend & API:** Features an Express.js API server, built with efficiency and scalability in mind using Drizzle ORM for type-safe database queries.
- **Monorepo Architecture:** Seamlessly managed via `pnpm workspaces`, housing both the `@workspace/ecommerce` frontend and the `@workspace/api-server` backend in a cohesive environment.

![ecom4](https://github.com/user-attachments/assets/c6584aa4-d29a-4d17-8a6c-8a6714569a96)













![ecom5](https://github.com/user-attachments/assets/03704961-6084-46c6-8916-a6d240eee7da)














![ecom8](https://github.com/user-attachments/assets/ade9a241-2a68-4253-8c2f-f4e6173d5451)




















![ecom6](https://github.com/user-attachments/assets/32ababe9-eef8-4767-9641-3a2956624e77)
















![ecom7](https://github.com/user-attachments/assets/b8a549ca-338a-43a1-9eb7-eb24bd21b44c)























## ⚡ Genesis and Development

> **Powered by Replit:**
> The foundational base and prototype of ShopWave were originally created and bootstrapped using [Replit](https://replit.com/). Replit's instant setup and collaborative cloud development environment allowed us to rapidly architect the full-stack monorepo before expanding to this fully customized local setup.

## 📦 Getting Started

### Prerequisites

- **Node.js**: v18 or newer
- **pnpm**: Fast, disk space efficient package manager

### Installation

1. Clone the repository to your local machine.
2. From the root directory, install all dependencies across the workspace:
   ```bash
   pnpm install
   ```

### Running Locally

You can launch both the Frontend and the Backend concurrently with a single command from the root directory:

```bash
pnpm start
```

This command runs both services:
- **Frontend (Vite):** Typically runs on `http://localhost:8081`
- **Backend API (Express):** Typically runs on `http://localhost:8080`

## 🏗️ Workspace Structure

- `artifacts/ecommerce/`: The React-Vite frontend application incorporating rich user experiences and 3D scenes.
- `artifacts/api-server/`: The Express-based backend API handling data flow and processing.
- `package.json` (Root): Manages concurrent scripts and global workspace configurations.
