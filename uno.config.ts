import { defineConfig } from "unocss";
import extractorPug from "@unocss/extractor-pug";
import presetWind4 from "@unocss/preset-wind4";
import { presetAttributify } from "unocss";
export default defineConfig({
  presets: [presetAttributify(), presetWind4()],
  extractors: [extractorPug()],
});
