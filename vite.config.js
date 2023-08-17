import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://brunoalderisi.github.io/rickandmortyAPI-vite-react/",
  plugins: [react()],
})
