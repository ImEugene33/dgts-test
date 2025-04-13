import { defineConfig } from 'vite';
import path from 'path';
import { globSync } from 'glob';

function getStyleInputFiles() {
  const styleFiles = globSync('./src/*.{scss,sass}');
  const input = {};

  styleFiles.forEach((file) => {
    const key = path.relative('./src', file).replace(/\.(scss|sass)$/, '');
    input[key] = path.resolve(__dirname, file);
  });

  return input;
}

export default defineConfig({
  root: './src',
  build: {
    outDir: '../assets',
    assetsDir: './',
    rollupOptions: {
      input: getStyleInputFiles(),
      output: {
        assetFileNames: '[name].[ext]',
      },
    },
  },
});
