import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import macrosPlugin from 'babel-plugin-macros'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    macrosPlugin({
      'fontawesome-svg-core': {
        license: 'free'
      }
    })
  ]
})
