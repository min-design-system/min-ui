import { fileURLToPath } from 'node:url';
import path, { extname, relative } from 'path';

import react from '@vitejs/plugin-react-swc';
import { glob } from 'glob';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

import pkg from './package.json';

const withUseClientChunkNameTokens = [
  'Updater',
  'Client',
  'next/serialize/Inserter',
  'InserterGuard'
];
const inputs = [
  {
    name: 'components',
    pullUp: true
  },
  {
    name: 'core',
    pullUp: true
  },
  {
    name: 'utils',
    pullUp: false
  }
];

export default defineConfig(() => {
  return {
    build: {
      lib: {
        entry: 'components/index.ts',
        name: 'min-ui'
      },
      rollupOptions: {
        external: [...Object.keys(pkg.peerDependencies), 'next/navigation', /jsx-runtime/g],
        input: Object.fromEntries(
          inputs
            .map(({ name, pullUp }) =>
              glob
                .sync(`${name}/**/*.{ts,tsx}`, {
                  ignore: ['**/*.d.ts', '**/*.styles.{ts,tsx}', '**/*.stories.tsx', '**/typing.ts']
                })
                .map((file) => [
                  pullUp ? relative(name, file.slice(0, file.length - extname(file).length)) : file,
                  fileURLToPath(new URL(file, import.meta.url))
                ])
            )
            .flat()
        ),
        output: [
          {
            interop: 'auto',
            format: 'cjs',
            banner: (chunk) => {
              const hasWithUseClientChunkNameToken = withUseClientChunkNameTokens.some(
                (withUseClientChunkNameToken) =>
                  chunk.name.indexOf(withUseClientChunkNameToken) !== -1
              );

              if (hasWithUseClientChunkNameToken) {
                return '"use client"';
              }

              return '';
            },
            entryFileNames: '[name].js'
          },
          {
            interop: 'auto',
            format: 'es',
            banner: (chunk) => {
              const hasWithUseClientChunkNameToken = withUseClientChunkNameTokens.some(
                (withUseClientChunkNameToken) =>
                  chunk.name.indexOf(withUseClientChunkNameToken) !== -1
              );

              if (hasWithUseClientChunkNameToken) {
                return '"use client"';
              }

              return '';
            },
            entryFileNames: '[name].es.js'
          }
        ]
      }
    },
    plugins: [
      react(),
      dts({
        beforeWriteFile: (filePath, content) => {
          let newPath = filePath;
          let newContent = content;

          inputs.forEach(({ name, pullUp }) => {
            if (pullUp) {
              newPath = newPath.replace(`/${name}`, '');
              // eslint-disable-next-line
              newContent = content.replace(/from '\.\.\/\.\.\//g, "from '../");
            }
          });

          return { filePath: newPath, content: newContent };
        }
      })
    ],
    resolve: {
      alias: inputs.map(({ name }) => ({
        find: `@${name}`,
        replacement: path.resolve(__dirname, name)
      }))
    }
  };
});
