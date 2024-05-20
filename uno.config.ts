import { defineConfig, presetIcons, transformerDirectives, transformerVariantGroup } from 'unocss';
import presetWind from '@unocss/preset-wind';
export default defineConfig({
  shortcuts: {
    'bg-image': 'w-full h-full bg-cover bg-no-repeat bg-center-top'
  },
  presets: [
    presetWind(),
    presetIcons({
      extraProperties: {
        prefix: 'i',
        display: 'inline-block'
      }
    })
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()], //使用@apply语法 & Variant group transformer
  theme: {
    colors: {
      main: '#4E98F4'
    }
  }
});
