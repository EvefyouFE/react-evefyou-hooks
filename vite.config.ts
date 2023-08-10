import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import typescript from "@rollup/plugin-typescript";
import path from "path";
import dts from 'vite-plugin-dts';

export default defineConfig({
  resolve: {
    alias: [
      {
        find: "~",
        replacement: path.resolve(__dirname, "./src"),
      },
    ],
  },
  plugins: [react(), dts({ insertTypesEntry: true })],
  build: {
    manifest: true,
    minify: true,
    reportCompressedSize: true,
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      fileName: "index",
      formats: ["es", "cjs"],
    },
    sourcemap: true,
    rollupOptions: {
      plugins: [typescript({
        sourceMap: true,
        declaration: true,
        outDir: 'dist'
      })]
    }
  }
})
