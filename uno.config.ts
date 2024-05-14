import { defineConfig, presetIcons, transformerDirectives } from 'unocss';
import presetWind from '@unocss/preset-wind';
export default defineConfig({
  presets: [
    presetWind(),
    presetIcons({
      extraProperties: {
        prefix: 'i',
        display: 'inline-block'
      }
    })
  ],
  transformers: [transformerDirectives()] //使用@apply语法
});
