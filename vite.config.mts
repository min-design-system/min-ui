import path from 'path';

import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

import pkg from './package.json';

const WITH_USE_CLIENT_NAMES = ['Updater', 'Client', 'Inserter'];

export default defineConfig(() => {
  return {
    build: {
      lib: {
        entry: [
          'index.ts',
          'core/setup/ThemeContext.ts',
          'core/setup/ThemeProvider.tsx',
          'core/setup/useTheme.ts',
          'core/styled/registry/nextjs/index.tsx',
          'core/styled/cache.ts',
          'core/styled/index.tsx',
          'core/theme/light.ts',
          'core/theme/dark.ts'
        ],
        name: 'min-ui',
        fileName: (fileName) => (fileName === 'cjs' ? 'index.js' : 'index.es.js')
      },
      rollupOptions: {
        external: [...Object.keys(pkg.peerDependencies), /next\/navigation/g, /jsx-runtime/g],
        output: [
          {
            interop: 'auto',
            format: 'cjs',
            banner: (chunk) => {
              if (WITH_USE_CLIENT_NAMES.includes(chunk.name)) {
                return '"use client"';
              }
              return '';
            },
            entryFileNames: (entry) => {
              const { name, facadeModuleId } = entry;
              const fileName = `${name}.js`;
              if (!facadeModuleId) {
                return fileName;
              }
              const relativeDir = path.relative(
                path.resolve(__dirname),
                path.dirname(facadeModuleId)
              );
              return path.join(relativeDir, fileName);
            }
          },
          {
            interop: 'auto',
            format: 'es',
            banner: (chunk) => {
              if (WITH_USE_CLIENT_NAMES.includes(chunk.name)) {
                return '"use client"';
              }
              return '';
            },
            entryFileNames: (entry) => {
              const { name, facadeModuleId } = entry;
              const fileName = `${name}.es.js`;
              if (!facadeModuleId) {
                return fileName;
              }
              const relativeDir = path.relative(
                path.resolve(__dirname),
                path.dirname(facadeModuleId)
              );
              return path.join(relativeDir, fileName);
            }
          }
        ]
      }
    },
    plugins: [react(), dts()],
    resolve: {
      alias: [
        {
          find: '@components',
          replacement: path.resolve(__dirname, 'components')
        },
        {
          find: '@core',
          replacement: path.resolve(__dirname, 'core')
        },
        {
          find: '@utils',
          replacement: path.resolve(__dirname, 'utils')
        }
      ]
    }
  };
});
