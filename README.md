This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

# Getting Started

Welcome to this Next.js project!  
To ensure a clean and updated environment before starting development, follow the steps below.

## 🧼 Clean Start - Initial Project Cleanup

Before proceeding, it's important to remove any leftover dependencies, outdated builds, or corrupted installations.  
Run the following commands in the project root:

```bash
# Remove node_modules folder
rm -rf node_modules

# Remove lock files (depending on the package manager)
rm -f package-lock.json yarn.lock

# Remove the build directory (if present)
rm -rf .next
```

## 📦 Reinstall Updated Dependencies

Once the project is cleaned up, reinstall all dependencies using the updated versions.
Depending on your package manager:

```bash
npm install
# or
yarn install
```

## ▶️ Starting the Project

After installing the dependencies, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Scripts

| Script      | Description                  |
| ----------- | ---------------------------- |
| dev         | Run development server       |
| build       | Build for production         |
| start       | Run locally production build |
| lint        | Run linter with eslint       |
| format      | Format code with prettier    |
| check-types | Run typescript compiler      |
| prepare     | Initialize git hooks         |
