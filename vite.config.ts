import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

import pkg from './package.json';

export default defineConfig(() => {
  return {
    build: {
      lib: {
        entry: 'src/index.ts',
        name: 'min-ui',
        formats: ['cjs', 'es'],
        fileName: (fileName) => (fileName === 'cjs' ? 'index.js' : 'index.es.js')
      },
      rollupOptions: {
        external: [...Object.keys(pkg.peerDependencies), /@emotion/g],
        output: {
          interop: 'auto'
        }
      }
    },
    plugins: [
      react({
        jsxImportSource: '@emotion/react'
      }),
      dts({ insertTypesEntry: true })
    ],
    define: {
      'process.env.NODE_ENV': '"production"'
    }
  };
});
