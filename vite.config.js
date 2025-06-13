import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base:'https://gitapbrobert.github.io/prototype-react',
  server: {
    host: true,
    port: 5173,
    strictPort: true,
    
  }

})
