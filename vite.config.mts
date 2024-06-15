import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

import pkg from './package.json';

export default defineConfig(() => {
  return {
    build: {
      lib: {
        entry: 'index.ts',
        name: 'min-ui',
        formats: ['cjs', 'es'],
        fileName: (fileName) => (fileName === 'cjs' ? 'index.js' : 'index.es.js')
      },
      rollupOptions: {
        external: Object.keys(pkg.peerDependencies),
        output: {
          interop: 'auto'
        }
      }
    },
    plugins: [react(), dts()]
  };
});
