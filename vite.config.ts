/*
 * @Author: EvefyouFE
 * @Date: 2023-08-10 13:42:48
 * @FilePath: \react-evefyou-hooks\vite.config.ts
 * @Description: 
 * Everyone is coming to the world i live in, as i am going to the world lives for you. 人人皆往我世界，我为世界中人人。
 * Copyright (c) 2023 by EvefyouFE/evef, All Rights Reserved. 
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";
import dts from 'vite-plugin-dts';
import pkg from './package.json';
import tsconfigPaths from 'vite-tsconfig-paths';
import { endsWith, equals, filter, has, head, identity, includes, isNil, isNotNil, last, not, pipe, reject, remove, split, when } from "ramda";
import fs from 'fs';

const pathResolve = (v: string) => path.resolve(__dirname, v)

const externalPackages = [...Object.keys(pkg.peerDependencies)]
const regexOfPackages = externalPackages
  .map(packageName => new RegExp(`^${packageName}(\\/.*)?`));

export default defineConfig({
  plugins: [
    react(),
    dts({
      rollupTypes: true,
      afterBuild: () => {
        const directoryPath = '.';
        const regexToDelete = /\w+\.d\.ts$/;
        fs.readdirSync(directoryPath).forEach((file) => {
          const filePath = path.join(directoryPath, file);
          if (regexToDelete.test(file) && !file.includes('index.d.ts')) {
            try {
              fs.unlinkSync(filePath);
              console.log(`Deleted file: ${filePath}`);
            } catch (err) {
              console.error(`Error deleting file: ${err}`);
            }
          }
        });
      }
    }),
    tsconfigPaths()
  ],
  build: {
    minify: true,
    reportCompressedSize: true,
    outDir: '.',
    lib: {
      entry: {
        "index": pathResolve('src/index.ts'),
      },
      name: "react-evefyou-hooks",
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      output: {
        minifyInternalExports: false,
        manualChunks(id) {
          const debugId = id.split('/').filter(i => !i.includes('@')).join('/')
          console.log('debugId', debugId)

          if (!id.includes('src/types')) {
            const name = pipe(
              split('src/'),
              last,
              split('/'),
              reject(equals('index.ts')),
              last,
              when(isNotNil, pipe(
                split('.ts'),
                head
              )),
            )(id) as string

            console.log('name', name, debugId)
            return name
          }
        },
        chunkFileNames: '[format]/[name]/index.js',
        entryFileNames: (chunkInfo) => chunkInfo.name.includes('index')
          ? '[format]/index.js'
          : '[format]/[name]/index.js'
      },
      external: regexOfPackages
    }
  }
})
