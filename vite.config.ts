import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/wai/',
  plugins: [react(), tsconfigPaths()],
  build: {
    sourcemap: true
  }
});
