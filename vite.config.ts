import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Replace with your actual GitHub username and repo name
export default defineConfig({
  base: '/', 
  plugins: [react()],
});
