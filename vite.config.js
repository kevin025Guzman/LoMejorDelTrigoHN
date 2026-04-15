import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, 'partials'),
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        ministerio: resolve(__dirname, 'pages/ministerio.html'),
        recursos: resolve(__dirname, 'pages/recursos.html'),
        articulos: resolve(__dirname, 'pages/articulos.html'),
        frases: resolve(__dirname, 'pages/frases.html'),
        solaEscritura: resolve(__dirname, 'pages/solaEscritura.html'),
        solaFe: resolve(__dirname, 'pages/solaFe.html'),
        solaGracia: resolve(__dirname, 'pages/solaGracia.html'),
        soloADiosLaGloria: resolve(__dirname, 'pages/soloADiosLaGloria.html'),
        soloCristo: resolve(__dirname, 'pages/soloCristo.html'),
      },
    },
  },
});
