import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    // Reduce file watching overhead
    watch: {
      usePolling: false, // Disable polling if not needed
      ignored: ['**/node_modules/**', '**/.git/**']
    },
    // Faster HMR
    hmr: {
      overlay: true
    }
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom']
  }
})