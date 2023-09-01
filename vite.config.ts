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
import { always, head, includes, isNotNil, last, not, pipe, split, when } from "ramda";
import fs from 'fs';

const pathResolve = (v: string) => path.resolve(__dirname, v)

const externalPackages = [...Object.keys(pkg.peerDependencies)]
const regexOfPackages = externalPackages
  .map(packageName => new RegExp(`^${packageName}(\\/.*)?`));

const dtsFiles = [
  pathResolve('es/index.d.ts'),
  pathResolve('cjs/index.d.ts'),
]
const tsupFiles = [
  pathResolve('dist/index.d.ts'),
  pathResolve('dist/index.d.cts'),
]
function moveFile(oldPath, newPath) {
  fs.rename(oldPath, newPath, (err) => {
    if (err) {
      console.error('移动文件失败:', err);
    } else {
      console.log('文件已成功移动到新位置');
    }
  });
}

export default defineConfig({
  plugins: [
    react(),
    dts({
      outDir: ["es", "cjs"],
      rollupTypes: true,
      afterBuild() {
        tsupFiles.forEach((f, idx) => {
          fs.unlinkSync(dtsFiles[idx])
          moveFile(f, dtsFiles[idx])
        })
        const dir = pathResolve('dist')
        console.log('rm dir', dir)
        fs.rm(dir, { recursive: true }, (err) => {
          if (err) throw err;
          console.log('目录已删除');
        })
      },
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
        manualChunks: (id) => {
          const name = pipe(
            split('src/'),
            last,
            when(includes('types'), always(undefined)),
            when(isNotNil, pipe(
              split('.ts'),
              head,
              when(pipe(
                includes('index'),
                not
              ), s => s.concat('/index'))
            ))
          )(id) as string
          return name
        },
        chunkFileNames: '[format]/[name].js',
        entryFileNames: '[format]/[name].js'
      },
      external: regexOfPackages
    }
  }
})
