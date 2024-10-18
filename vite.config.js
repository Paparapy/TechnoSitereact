import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build', // Spécifie le répertoire de sortie
  },
  base: './', // Assure que les chemins relatifs sont corrects
})
