# pk-front-vue3

此项目作为一个模板使用，使用技术：vue3、vue-router、cypress、typescript、vite5.2.8.

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
pnpm test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
pnpm test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
pnpm build
pnpm test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```

# 项目笔记

## 一、项目方案

### 1、依赖升级策略

npm-check:https://github.com/dylang/npm-check

### 2、css重置方案

- reset-css （选用此方案）
- nomalization

### 3、自动化路由

- vite-plugin-pages
- unplugin-vue-router(下一代自动路由) （选用此方案）

### 4、原子化css

tailwindcss
unocss (采用preset为taiwind的unocss方案)

### 5、自动导入：导入api

unplugin-auto-import

### 6、自动导入：导入componens

unplugin-vue-components

### 8、工具类

vueuse
