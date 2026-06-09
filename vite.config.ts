import { reactRouter } from '@react-router/dev/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
  plugins: [
    tailwindcss(),
    ViteImageOptimizer({
      jpg: {
        quality: 80,
        mozjpeg: true,
      },
    }),
    reactRouter(),
  ],
  resolve: {
    tsconfigPaths: true,
  },
});
