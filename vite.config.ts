import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // BASE_PATH is injected by GitHub Actions for GitHub Pages deployments
  // e.g., "/<repo-name>/". Locally it's "/".
  base: process.env.BASE_PATH || '/',
  plugins: [react()],
  assetsInclude: ['**/*.md'], // 마크다운 파일을 에셋으로 처리
  define: {
    global: 'globalThis',
  },
  resolve: {
    alias: {
      buffer: 'buffer',
    },
  },
})
