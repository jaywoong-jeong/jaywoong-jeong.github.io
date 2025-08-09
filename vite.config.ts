import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // user site at root domain → base must be '/'
  base: '/',
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
