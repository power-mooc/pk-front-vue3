import { defineConfig, presetIcons } from 'unocss';
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
  ]
});
