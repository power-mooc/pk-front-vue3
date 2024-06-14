import { defineConfig, presetIcons, transformerDirectives, transformerVariantGroup } from 'unocss';
import presetWind from '@unocss/preset-wind';
export default defineConfig({
  shortcuts: {
    'bg-image': 'w-full h-full bg-cover bg-no-repeat bg-center-top',
    btn: 'px-4 py-2 bg-sky-400 text-white hover:bg-sky-500 cursor-pointer',
    'btn-plain': 'px-4 py-2 border border-sky-400 text-sky-400 hover:(bg-sky-400 text-white) cursor-pointer'
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
