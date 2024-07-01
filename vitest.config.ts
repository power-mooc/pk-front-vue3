import { fileURLToPath } from 'node:url';
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config';
import viteConfig from './vite.config';
export default mergeConfig(
  // fix ts
  viteConfig({ mode: process.env.NODE_ENV || '', command: 'serve' }),
  defineConfig({
    test: {
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'cypress/**', 'core/**'],
      root: fileURLToPath(new URL('./', import.meta.url))
    }
  })
);
