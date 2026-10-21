import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// O plugin do React permite usar JSX e recarrega a página ao salvar
export default defineConfig({
  plugins: [react()],
})
