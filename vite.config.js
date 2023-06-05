import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({

  base: "/Rahul1905-sk.github.io",
  plugins: [react()],
  build: {
         // generate manifest.json in outDir
         manifest: true,
         base: '/public_html/build/',        
       }
})


 
