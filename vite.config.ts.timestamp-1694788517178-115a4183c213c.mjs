// vite.config.ts
import { defineConfig } from "file:///C:/projects/frontend/evefyou/react-evefyou-hooks/node_modules/.pnpm/vite@4.4.5_@types+node@20.4.9/node_modules/vite/dist/node/index.js";
import path from "path";
import dts from "file:///C:/projects/frontend/evefyou/react-evefyou-hooks/node_modules/.pnpm/vite-plugin-dts@3.5.1_@types+node@20.4.9_typescript@5.1.6_vite@4.4.5/node_modules/vite-plugin-dts/dist/index.mjs";
import tsconfigPaths from "file:///C:/projects/frontend/evefyou/react-evefyou-hooks/node_modules/.pnpm/vite-tsconfig-paths@4.2.0_typescript@5.1.6_vite@4.4.5/node_modules/vite-tsconfig-paths/dist/index.mjs";

// package.json
var package_default = {
  name: "react-evefyou-hooks",
  version: "0.0.1",
  description: "",
  type: "module",
  main: "./cjs/index.js",
  module: "./es/index.js",
  types: "./es/index.d.ts",
  exports: {
    ".": {
      require: "./cjs/index.js",
      import: "./es/index.js"
    },
    "./defineRecoilSelector": {
      require: "./cjs/defineRecoilSelector/index.js",
      import: "./es/defineRecoilSelector/index.js"
    },
    "./defineRecoilState": {
      require: "./cjs/defineRecoilState/index.js",
      import: "./es/defineRecoilState/index.js"
    },
    "./defineRecoilValue": {
      require: "./cjs/defineRecoilValue/index.js",
      import: "./es/defineRecoilValue/index.js"
    },
    "./defineUseState": {
      require: "./cjs/defineUseState/index.js",
      import: "./es/defineUseState/index.js"
    },
    "./useActiveItemsState": {
      require: "./cjs/useActiveItemsState/index.js",
      import: "./es/useActiveItemsState/index.js"
    },
    "./useCompInstance": {
      require: "./cjs/useCompInstance/index.js",
      import: "./es/useCompInstance/index.js"
    },
    "./useDesign": {
      require: "./cjs/useDesign/index.js",
      import: "./es/useDesign/index.js"
    },
    "./useItemsState": {
      require: "./cjs/useItemsState/index.js",
      import: "./es/useItemsState/index.js"
    },
    "./useKeyItemsState": {
      require: "./cjs/useKeyItemsState/index.js",
      import: "./es/useKeyItemsState/index.js"
    },
    "./useKeysState": {
      require: "./cjs/useKeysState/index.js",
      import: "./es/useKeysState/index.js"
    },
    "./useMountEffect": {
      require: "./cjs/useMountEffect/index.js",
      import: "./es/useMountEffect/index.js"
    },
    "./useNativeProps": {
      require: "./cjs/useNativeProps/index.js",
      import: "./es/useNativeProps/index.js"
    },
    "./useProps": {
      require: "./cjs/useProps/index.js",
      import: "./es/useProps/index.js"
    },
    "./usePropsState": {
      require: "./cjs/usePropsState/index.js",
      import: "./es/usePropsState/index.js"
    },
    "./useRelationState": {
      require: "./cjs/useRelationState/index.js",
      import: "./es/useRelationState/index.js"
    },
    "./useSelectItemsState": {
      require: "./cjs/useSelectItemsState/index.js",
      import: "./es/useSelectItemsState/index.js"
    },
    "./useUnmountEffect": {
      require: "./cjs/useUnmountEffect/index.js",
      import: "./es/useUnmountEffect/index.js"
    }
  },
  files: [
    "es",
    "cjs"
  ],
  scripts: {
    dev: "vite",
    build: "tsc && vite build",
    "build:tsc": "tsc",
    clean: "rimraf node_modules",
    "clean:cache": "rimraf node_modules/.cache/ && rimraf node_modules/.vite",
    "clean:build": "rimraf es && rimraf cjs && rimraf css && rimraf dist && rimraf locale",
    lint: "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    preview: "vite preview"
  },
  repository: {
    type: "git",
    url: "git+https://github.com/EvefyouFE/react-evefyou-hooks.git"
  },
  keywords: [
    "react",
    "hook",
    "like pinia",
    "define recoil state",
    "define state",
    "evefyou"
  ],
  author: "EvefyouFE",
  license: "MIT",
  bugs: {
    url: "https://github.com/EvefyouFE/react-evefyou-issues"
  },
  homepage: "https://github.com/EvefyouFE/react-evefyou-hooks#readme",
  peerDependencies: {
    ahooks: ">=3.7.6",
    ramda: ">=0.29.0",
    react: ">=18.2.0",
    "react-dom": ">=18.2.0",
    "react-evefyou-common": ">=0.0.1",
    recoil: ">=0.7.7"
  },
  devDependencies: {
    "@types/node": "^20.4.9",
    "@types/ramda": "^0.29.0",
    "@types/react": "^18.2.15",
    "@types/react-dom": "^18.2.7",
    "@typescript-eslint/eslint-plugin": "^6.0.0",
    "@typescript-eslint/parser": "^6.0.0",
    "@vitejs/plugin-react": "^4.0.3",
    eslint: "^8.45.0",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.3",
    rimraf: "^5.0.1",
    tsup: "^7.2.0",
    typescript: "^5.1.6",
    vite: "^4.4.5",
    "vite-plugin-dts": "^3.5.1",
    "vite-tsconfig-paths": "^4.2.0"
  }
};

// vite.config.ts
import { anyPass, equals, filter, last, not, pipe, split } from "file:///C:/projects/frontend/evefyou/react-evefyou-hooks/node_modules/.pnpm/ramda@0.29.0/node_modules/ramda/es/index.js";
import fs from "fs";
var __vite_injected_original_dirname = "C:\\projects\\frontend\\evefyou\\react-evefyou-hooks";
var libName = "hooks";
var libFullName = `react-evefyou-${libName}`;
var pathResolve = (v) => path.resolve(__vite_injected_original_dirname, v);
var externalPackages = [...Object.keys(package_default.peerDependencies)];
var regexOfPackages = externalPackages.map((packageName) => new RegExp(`^${packageName}(\\/.*)?`));
var entries = Object.keys(package_default.exports).reduce((acc, cur) => {
  const isIndex = cur === ".";
  cur = cur.split("./")[1];
  const key = isIndex ? "index" : cur;
  const val = isIndex ? pathResolve(`${libName}/index.ts`) : pathResolve(`${libName}/${cur}/index.ts`);
  acc[key] = val;
  return acc;
}, {});
function moveFile(oldPath, newPath) {
  fs.rename(oldPath, newPath, (err) => {
    if (err) {
      console.error("\u79FB\u52A8\u6587\u4EF6\u5931\u8D25:", err);
    } else {
      console.log("\u6587\u4EF6\u5DF2\u6210\u529F\u79FB\u52A8\u5230\u65B0\u4F4D\u7F6E");
    }
  });
}
var components = filter(
  pipe(
    anyPass(
      [
        equals(".")
      ]
    ),
    not
  )
)(Object.keys(package_default.exports));
var formats = ["es", "cjs"];
function moveCjsFiles() {
  const f = "cjs";
  components.forEach((comp) => {
    fs.rm(pathResolve(`./${f}/${comp}.d.ts`), (err) => {
      console.error("\u5220\u9664\u6587\u4EF6\u5931\u8D25:", err);
    });
    fs.rm(pathResolve(`./cjs/${comp}/index.d.ts`), (err) => {
      console.error("\u5220\u9664\u6587\u4EF6\u5931\u8D25:", err);
    });
    fs.copyFile(pathResolve(`./es/${comp}/index.d.ts`), pathResolve(`./cjs/${comp}/index.d.ts`), (err) => {
      console.error("\u62F7\u8D1D\u6587\u4EF6\u5931\u8D25:", err, pathResolve(`./es/${comp}/index.d.ts`), pathResolve(`./cjs/${comp}/index.d.ts`));
    });
  });
}
function moveEsFiles() {
  const f = "es";
  components.forEach((comp) => {
    const oldComp = pipe(split("/"), last)(comp);
    const oldPath = pathResolve(`./${f}/${oldComp}.d.ts`);
    const newPath = pathResolve(`./${f}/${comp}/index.d.ts`);
    moveFile(oldPath, newPath);
    fs.rm(pathResolve(`./${f}/${comp}.d.ts`), (err) => {
      console.error("\u5220\u9664\u6587\u4EF6\u5931\u8D25:", err);
    });
  });
}
var vite_config_default = defineConfig({
  plugins: [
    tsconfigPaths(),
    dts({
      outDir: formats,
      rollupTypes: true,
      afterBuild() {
        console.log("start...", (/* @__PURE__ */ new Date()).getTime());
        setTimeout(() => {
          moveEsFiles();
          moveCjsFiles();
        }, 5e3);
      }
    })
  ],
  build: {
    minify: true,
    reportCompressedSize: true,
    cssCodeSplit: true,
    outDir: ".",
    lib: {
      entry: entries,
      name: libFullName,
      formats
    },
    rollupOptions: {
      output: {
        minifyInternalExports: false,
        chunkFileNames: "[format]/define/index.js",
        entryFileNames: (chunkInfo) => chunkInfo.name === "index" ? "[format]/[name].js" : "[format]/[name]/index.js"
      },
      external: regexOfPackages
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAicGFja2FnZS5qc29uIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxccHJvamVjdHNcXFxcZnJvbnRlbmRcXFxcZXZlZnlvdVxcXFxyZWFjdC1ldmVmeW91LWhvb2tzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxwcm9qZWN0c1xcXFxmcm9udGVuZFxcXFxldmVmeW91XFxcXHJlYWN0LWV2ZWZ5b3UtaG9va3NcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L3Byb2plY3RzL2Zyb250ZW5kL2V2ZWZ5b3UvcmVhY3QtZXZlZnlvdS1ob29rcy92aXRlLmNvbmZpZy50c1wiOy8qXHJcbiAqIEBBdXRob3I6IEV2ZWZ5b3VGRVxyXG4gKiBARGF0ZTogMjAyMy0wOC0xMCAxMzo0Mjo0OFxyXG4gKiBARmlsZVBhdGg6IFxcanMtZXZlZnlvdS11dGlsc1xcdml0ZS5jb25maWcudHNcclxuICogQERlc2NyaXB0aW9uOiBcclxuICogRXZlcnlvbmUgaXMgY29taW5nIHRvIHRoZSB3b3JsZCBpIGxpdmUgaW4sIGFzIGkgYW0gZ29pbmcgdG8gdGhlIHdvcmxkIGxpdmVzIGZvciB5b3UuIFx1NEVCQVx1NEVCQVx1NzY4Nlx1NUY4MFx1NjIxMVx1NEUxNlx1NzU0Q1x1RkYwQ1x1NjIxMVx1NEUzQVx1NEUxNlx1NzU0Q1x1NEUyRFx1NEVCQVx1NEVCQVx1MzAwMlxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjMgYnkgRXZlZnlvdUZFL2V2ZWYsIEFsbCBSaWdodHMgUmVzZXJ2ZWQuIFxyXG4gKi9cclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcclxuaW1wb3J0IGR0cyBmcm9tICd2aXRlLXBsdWdpbi1kdHMnO1xyXG5pbXBvcnQgdHNjb25maWdQYXRocyBmcm9tICd2aXRlLXRzY29uZmlnLXBhdGhzJztcclxuaW1wb3J0IHBrZyBmcm9tICcuL3BhY2thZ2UuanNvbic7XHJcbmltcG9ydCB7IGFueVBhc3MsIGVxdWFscywgZmlsdGVyLCBsYXN0LCBub3QsIHBpcGUsIHNwbGl0IH0gZnJvbSBcInJhbWRhXCI7XHJcbmltcG9ydCBmcyBmcm9tICdmcyc7XHJcblxyXG5jb25zdCBsaWJOYW1lID0gJ2hvb2tzJ1xyXG5jb25zdCBsaWJGdWxsTmFtZSA9IGByZWFjdC1ldmVmeW91LSR7bGliTmFtZX1gXHJcblxyXG5jb25zdCBwYXRoUmVzb2x2ZSA9ICh2OiBzdHJpbmcpID0+IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIHYpXHJcblxyXG5cclxuLy8gY29uc3QgZGVwUGFja2FnZXMgPSBbLi4uT2JqZWN0LmtleXMocGtnLmRlcGVuZGVuY2llcyldXHJcbmNvbnN0IGV4dGVybmFsUGFja2FnZXMgPSBbLi4uT2JqZWN0LmtleXMocGtnLnBlZXJEZXBlbmRlbmNpZXMpXVxyXG5jb25zdCByZWdleE9mUGFja2FnZXMgPSBleHRlcm5hbFBhY2thZ2VzXHJcbiAgLm1hcChwYWNrYWdlTmFtZSA9PiBuZXcgUmVnRXhwKGBeJHtwYWNrYWdlTmFtZX0oXFxcXC8uKik/YCkpO1xyXG5cclxuXHJcbmNvbnN0IGVudHJpZXMgPSBPYmplY3Qua2V5cyhwa2cuZXhwb3J0cylcclxuICAucmVkdWNlKChhY2MsIGN1cikgPT4ge1xyXG4gICAgY29uc3QgaXNJbmRleCA9IGN1ciA9PT0gJy4nXHJcbiAgICBjdXIgPSBjdXIuc3BsaXQoJy4vJylbMV1cclxuICAgIGNvbnN0IGtleSA9IGlzSW5kZXggPyAnaW5kZXgnIDogY3VyXHJcbiAgICBjb25zdCB2YWwgPSBpc0luZGV4ID8gcGF0aFJlc29sdmUoYCR7bGliTmFtZX0vaW5kZXgudHNgKSA6IHBhdGhSZXNvbHZlKGAke2xpYk5hbWV9LyR7Y3VyfS9pbmRleC50c2ApXHJcbiAgICBhY2Nba2V5XSA9IHZhbFxyXG4gICAgcmV0dXJuIGFjY1xyXG4gIH0sIHt9KVxyXG5cclxuZnVuY3Rpb24gbW92ZUZpbGUob2xkUGF0aCwgbmV3UGF0aCkge1xyXG4gIGZzLnJlbmFtZShvbGRQYXRoLCBuZXdQYXRoLCAoZXJyKSA9PiB7XHJcbiAgICBpZiAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1x1NzlGQlx1NTJBOFx1NjU4N1x1NEVGNlx1NTkzMVx1OEQyNTonLCBlcnIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coJ1x1NjU4N1x1NEVGNlx1NURGMlx1NjIxMFx1NTI5Rlx1NzlGQlx1NTJBOFx1NTIzMFx1NjVCMFx1NEY0RFx1N0Y2RScpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbmNvbnN0IGNvbXBvbmVudHMgPSBmaWx0ZXIoXHJcbiAgcGlwZShcclxuICAgIGFueVBhc3MoXHJcbiAgICAgIFtcclxuICAgICAgICBlcXVhbHMoJy4nKSxcclxuICAgICAgXVxyXG4gICAgKSxcclxuICAgIG5vdFxyXG4gIClcclxuKShPYmplY3Qua2V5cyhwa2cuZXhwb3J0cykpXHJcblxyXG5jb25zdCBmb3JtYXRzID0gWydlcycsICdjanMnXVxyXG5mdW5jdGlvbiBtb3ZlQ2pzRmlsZXMoKSB7XHJcbiAgY29uc3QgZiA9ICdjanMnXHJcbiAgY29tcG9uZW50cy5mb3JFYWNoKGNvbXAgPT4ge1xyXG4gICAgZnMucm0ocGF0aFJlc29sdmUoYC4vJHtmfS8ke2NvbXB9LmQudHNgKSwgZXJyID0+IHtcclxuICAgICAgY29uc29sZS5lcnJvcignXHU1MjIwXHU5NjY0XHU2NTg3XHU0RUY2XHU1OTMxXHU4RDI1OicsIGVycik7XHJcbiAgICB9KVxyXG4gICAgZnMucm0ocGF0aFJlc29sdmUoYC4vY2pzLyR7Y29tcH0vaW5kZXguZC50c2ApLCBlcnIgPT4ge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdcdTUyMjBcdTk2NjRcdTY1ODdcdTRFRjZcdTU5MzFcdThEMjU6JywgZXJyKTtcclxuICAgIH0pXHJcbiAgICBmcy5jb3B5RmlsZShwYXRoUmVzb2x2ZShgLi9lcy8ke2NvbXB9L2luZGV4LmQudHNgKSwgcGF0aFJlc29sdmUoYC4vY2pzLyR7Y29tcH0vaW5kZXguZC50c2ApLCBlcnIgPT4ge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdcdTYyRjdcdThEMURcdTY1ODdcdTRFRjZcdTU5MzFcdThEMjU6JywgZXJyLCBwYXRoUmVzb2x2ZShgLi9lcy8ke2NvbXB9L2luZGV4LmQudHNgKSwgcGF0aFJlc29sdmUoYC4vY2pzLyR7Y29tcH0vaW5kZXguZC50c2ApKTtcclxuICAgIH0pXHJcbiAgfSlcclxufVxyXG5mdW5jdGlvbiBtb3ZlRXNGaWxlcygpIHtcclxuICBjb25zdCBmID0gJ2VzJ1xyXG4gIGNvbXBvbmVudHMuZm9yRWFjaChjb21wID0+IHtcclxuICAgIGNvbnN0IG9sZENvbXAgPSBwaXBlKHNwbGl0KCcvJyksIGxhc3QpKGNvbXApXHJcbiAgICBjb25zdCBvbGRQYXRoID0gcGF0aFJlc29sdmUoYC4vJHtmfS8ke29sZENvbXB9LmQudHNgKVxyXG4gICAgY29uc3QgbmV3UGF0aCA9IHBhdGhSZXNvbHZlKGAuLyR7Zn0vJHtjb21wfS9pbmRleC5kLnRzYClcclxuICAgIC8vIGNvbnNvbGUubG9nKCdtb3ZlJywgb2xkUGF0aCwgbmV3UGF0aClcclxuICAgIG1vdmVGaWxlKG9sZFBhdGgsIG5ld1BhdGgpXHJcblxyXG4gICAgZnMucm0ocGF0aFJlc29sdmUoYC4vJHtmfS8ke2NvbXB9LmQudHNgKSwgZXJyID0+IHtcclxuICAgICAgY29uc29sZS5lcnJvcignXHU1MjIwXHU5NjY0XHU2NTg3XHU0RUY2XHU1OTMxXHU4RDI1OicsIGVycik7XHJcbiAgICB9KVxyXG4gIH0pXHJcbn1cclxuZnVuY3Rpb24gZGVsZXRlRmlsZXMoZmlsZXM6IHN0cmluZ1tdKSB7XHJcbiAgZmlsZXMuZm9yRWFjaChmID0+IHtcclxuICAgIGZzLnJtKGYsIHsgcmVjdXJzaXZlOiB0cnVlIH0sIChlcnIpID0+IHtcclxuICAgICAgaWYgKGVycikgdGhyb3cgZXJyO1xyXG4gICAgICBjb25zb2xlLmxvZyhgJHtmfVx1NURGMlx1NTIyMFx1OTY2NGApO1xyXG4gICAgfSlcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IFtcclxuICAgIHRzY29uZmlnUGF0aHMoKSxcclxuICAgIGR0cyh7XHJcbiAgICAgIG91dERpcjogZm9ybWF0cyxcclxuICAgICAgcm9sbHVwVHlwZXM6IHRydWUsXHJcbiAgICAgIGFmdGVyQnVpbGQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3N0YXJ0Li4uJywgbmV3IERhdGUoKS5nZXRUaW1lKCkpXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBtb3ZlRXNGaWxlcygpXHJcbiAgICAgICAgICBtb3ZlQ2pzRmlsZXMoKVxyXG4gICAgICAgICAgLy8gY29uc3QgaWR4RmlsZXMgPSBmb3JtYXRzLm1hcChmID0+IHBhdGhSZXNvbHZlKGAke2Z9L2luZGV4LmQudHNgKSlcclxuICAgICAgICAgIC8vIGRlbGV0ZUZpbGVzKGlkeEZpbGVzKVxyXG4gICAgICAgICAgLy8gbW92ZUZpbGUocGF0aFJlc29sdmUoYGRpc3QvaW5kZXguZC50c2ApLCBpZHhGaWxlc1swXSlcclxuICAgICAgICAgIC8vIG1vdmVGaWxlKHBhdGhSZXNvbHZlKGBkaXN0L2luZGV4LmQuY3RzYCksIGlkeEZpbGVzWzFdKVxyXG4gICAgICAgICAgLy8gZGVsZXRlRmlsZXMoW3BhdGhSZXNvbHZlKCdkaXN0JyldKVxyXG4gICAgICAgIH0sIDUwMDApO1xyXG4gICAgICB9LFxyXG4gICAgfSlcclxuICBdLFxyXG4gIGJ1aWxkOiB7XHJcbiAgICBtaW5pZnk6IHRydWUsXHJcbiAgICByZXBvcnRDb21wcmVzc2VkU2l6ZTogdHJ1ZSxcclxuICAgIGNzc0NvZGVTcGxpdDogdHJ1ZSxcclxuICAgIG91dERpcjogJy4nLFxyXG4gICAgbGliOiB7XHJcbiAgICAgIGVudHJ5OiBlbnRyaWVzLFxyXG4gICAgICBuYW1lOiBsaWJGdWxsTmFtZSxcclxuICAgICAgZm9ybWF0czogZm9ybWF0cyBhcyBhbnksXHJcbiAgICB9LFxyXG4gICAgcm9sbHVwT3B0aW9uczoge1xyXG4gICAgICBvdXRwdXQ6IHtcclxuICAgICAgICBtaW5pZnlJbnRlcm5hbEV4cG9ydHM6IGZhbHNlLFxyXG4gICAgICAgIGNodW5rRmlsZU5hbWVzOiAnW2Zvcm1hdF0vZGVmaW5lL2luZGV4LmpzJyxcclxuICAgICAgICBlbnRyeUZpbGVOYW1lczogKGNodW5rSW5mbykgPT4gY2h1bmtJbmZvLm5hbWUgPT09ICdpbmRleCdcclxuICAgICAgICAgID8gJ1tmb3JtYXRdL1tuYW1lXS5qcycgOiAnW2Zvcm1hdF0vW25hbWVdL2luZGV4LmpzJ1xyXG4gICAgICB9LFxyXG4gICAgICBleHRlcm5hbDogcmVnZXhPZlBhY2thZ2VzXHJcbiAgICB9XHJcbiAgfVxyXG59KVxyXG4iLCAie1xuICBcIm5hbWVcIjogXCJyZWFjdC1ldmVmeW91LWhvb2tzXCIsXG4gIFwidmVyc2lvblwiOiBcIjAuMC4xXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJcIixcbiAgXCJ0eXBlXCI6IFwibW9kdWxlXCIsXG4gIFwibWFpblwiOiBcIi4vY2pzL2luZGV4LmpzXCIsXG4gIFwibW9kdWxlXCI6IFwiLi9lcy9pbmRleC5qc1wiLFxuICBcInR5cGVzXCI6IFwiLi9lcy9pbmRleC5kLnRzXCIsXG4gIFwiZXhwb3J0c1wiOiB7XG4gICAgXCIuXCI6IHtcbiAgICAgIFwicmVxdWlyZVwiOiBcIi4vY2pzL2luZGV4LmpzXCIsXG4gICAgICBcImltcG9ydFwiOiBcIi4vZXMvaW5kZXguanNcIlxuICAgIH0sXG4gICAgXCIuL2RlZmluZVJlY29pbFNlbGVjdG9yXCI6IHtcbiAgICAgIFwicmVxdWlyZVwiOiBcIi4vY2pzL2RlZmluZVJlY29pbFNlbGVjdG9yL2luZGV4LmpzXCIsXG4gICAgICBcImltcG9ydFwiOiBcIi4vZXMvZGVmaW5lUmVjb2lsU2VsZWN0b3IvaW5kZXguanNcIlxuICAgIH0sXG4gICAgXCIuL2RlZmluZVJlY29pbFN0YXRlXCI6IHtcbiAgICAgIFwicmVxdWlyZVwiOiBcIi4vY2pzL2RlZmluZVJlY29pbFN0YXRlL2luZGV4LmpzXCIsXG4gICAgICBcImltcG9ydFwiOiBcIi4vZXMvZGVmaW5lUmVjb2lsU3RhdGUvaW5kZXguanNcIlxuICAgIH0sXG4gICAgXCIuL2RlZmluZVJlY29pbFZhbHVlXCI6IHtcbiAgICAgIFwicmVxdWlyZVwiOiBcIi4vY2pzL2RlZmluZVJlY29pbFZhbHVlL2luZGV4LmpzXCIsXG4gICAgICBcImltcG9ydFwiOiBcIi4vZXMvZGVmaW5lUmVjb2lsVmFsdWUvaW5kZXguanNcIlxuICAgIH0sXG4gICAgXCIuL2RlZmluZVVzZVN0YXRlXCI6IHtcbiAgICAgIFwicmVxdWlyZVwiOiBcIi4vY2pzL2RlZmluZVVzZVN0YXRlL2luZGV4LmpzXCIsXG4gICAgICBcImltcG9ydFwiOiBcIi4vZXMvZGVmaW5lVXNlU3RhdGUvaW5kZXguanNcIlxuICAgIH0sXG4gICAgXCIuL3VzZUFjdGl2ZUl0ZW1zU3RhdGVcIjoge1xuICAgICAgXCJyZXF1aXJlXCI6IFwiLi9janMvdXNlQWN0aXZlSXRlbXNTdGF0ZS9pbmRleC5qc1wiLFxuICAgICAgXCJpbXBvcnRcIjogXCIuL2VzL3VzZUFjdGl2ZUl0ZW1zU3RhdGUvaW5kZXguanNcIlxuICAgIH0sXG4gICAgXCIuL3VzZUNvbXBJbnN0YW5jZVwiOiB7XG4gICAgICBcInJlcXVpcmVcIjogXCIuL2Nqcy91c2VDb21wSW5zdGFuY2UvaW5kZXguanNcIixcbiAgICAgIFwiaW1wb3J0XCI6IFwiLi9lcy91c2VDb21wSW5zdGFuY2UvaW5kZXguanNcIlxuICAgIH0sXG4gICAgXCIuL3VzZURlc2lnblwiOiB7XG4gICAgICBcInJlcXVpcmVcIjogXCIuL2Nqcy91c2VEZXNpZ24vaW5kZXguanNcIixcbiAgICAgIFwiaW1wb3J0XCI6IFwiLi9lcy91c2VEZXNpZ24vaW5kZXguanNcIlxuICAgIH0sXG4gICAgXCIuL3VzZUl0ZW1zU3RhdGVcIjoge1xuICAgICAgXCJyZXF1aXJlXCI6IFwiLi9janMvdXNlSXRlbXNTdGF0ZS9pbmRleC5qc1wiLFxuICAgICAgXCJpbXBvcnRcIjogXCIuL2VzL3VzZUl0ZW1zU3RhdGUvaW5kZXguanNcIlxuICAgIH0sXG4gICAgXCIuL3VzZUtleUl0ZW1zU3RhdGVcIjoge1xuICAgICAgXCJyZXF1aXJlXCI6IFwiLi9janMvdXNlS2V5SXRlbXNTdGF0ZS9pbmRleC5qc1wiLFxuICAgICAgXCJpbXBvcnRcIjogXCIuL2VzL3VzZUtleUl0ZW1zU3RhdGUvaW5kZXguanNcIlxuICAgIH0sXG4gICAgXCIuL3VzZUtleXNTdGF0ZVwiOiB7XG4gICAgICBcInJlcXVpcmVcIjogXCIuL2Nqcy91c2VLZXlzU3RhdGUvaW5kZXguanNcIixcbiAgICAgIFwiaW1wb3J0XCI6IFwiLi9lcy91c2VLZXlzU3RhdGUvaW5kZXguanNcIlxuICAgIH0sXG4gICAgXCIuL3VzZU1vdW50RWZmZWN0XCI6IHtcbiAgICAgIFwicmVxdWlyZVwiOiBcIi4vY2pzL3VzZU1vdW50RWZmZWN0L2luZGV4LmpzXCIsXG4gICAgICBcImltcG9ydFwiOiBcIi4vZXMvdXNlTW91bnRFZmZlY3QvaW5kZXguanNcIlxuICAgIH0sXG4gICAgXCIuL3VzZU5hdGl2ZVByb3BzXCI6IHtcbiAgICAgIFwicmVxdWlyZVwiOiBcIi4vY2pzL3VzZU5hdGl2ZVByb3BzL2luZGV4LmpzXCIsXG4gICAgICBcImltcG9ydFwiOiBcIi4vZXMvdXNlTmF0aXZlUHJvcHMvaW5kZXguanNcIlxuICAgIH0sXG4gICAgXCIuL3VzZVByb3BzXCI6IHtcbiAgICAgIFwicmVxdWlyZVwiOiBcIi4vY2pzL3VzZVByb3BzL2luZGV4LmpzXCIsXG4gICAgICBcImltcG9ydFwiOiBcIi4vZXMvdXNlUHJvcHMvaW5kZXguanNcIlxuICAgIH0sXG4gICAgXCIuL3VzZVByb3BzU3RhdGVcIjoge1xuICAgICAgXCJyZXF1aXJlXCI6IFwiLi9janMvdXNlUHJvcHNTdGF0ZS9pbmRleC5qc1wiLFxuICAgICAgXCJpbXBvcnRcIjogXCIuL2VzL3VzZVByb3BzU3RhdGUvaW5kZXguanNcIlxuICAgIH0sXG4gICAgXCIuL3VzZVJlbGF0aW9uU3RhdGVcIjoge1xuICAgICAgXCJyZXF1aXJlXCI6IFwiLi9janMvdXNlUmVsYXRpb25TdGF0ZS9pbmRleC5qc1wiLFxuICAgICAgXCJpbXBvcnRcIjogXCIuL2VzL3VzZVJlbGF0aW9uU3RhdGUvaW5kZXguanNcIlxuICAgIH0sXG4gICAgXCIuL3VzZVNlbGVjdEl0ZW1zU3RhdGVcIjoge1xuICAgICAgXCJyZXF1aXJlXCI6IFwiLi9janMvdXNlU2VsZWN0SXRlbXNTdGF0ZS9pbmRleC5qc1wiLFxuICAgICAgXCJpbXBvcnRcIjogXCIuL2VzL3VzZVNlbGVjdEl0ZW1zU3RhdGUvaW5kZXguanNcIlxuICAgIH0sXG4gICAgXCIuL3VzZVVubW91bnRFZmZlY3RcIjoge1xuICAgICAgXCJyZXF1aXJlXCI6IFwiLi9janMvdXNlVW5tb3VudEVmZmVjdC9pbmRleC5qc1wiLFxuICAgICAgXCJpbXBvcnRcIjogXCIuL2VzL3VzZVVubW91bnRFZmZlY3QvaW5kZXguanNcIlxuICAgIH1cbiAgfSxcbiAgXCJmaWxlc1wiOiBbXG4gICAgXCJlc1wiLFxuICAgIFwiY2pzXCJcbiAgXSxcbiAgXCJzY3JpcHRzXCI6IHtcbiAgICBcImRldlwiOiBcInZpdGVcIixcbiAgICBcImJ1aWxkXCI6IFwidHNjICYmIHZpdGUgYnVpbGRcIixcbiAgICBcImJ1aWxkOnRzY1wiOiBcInRzY1wiLFxuICAgIFwiY2xlYW5cIjogXCJyaW1yYWYgbm9kZV9tb2R1bGVzXCIsXG4gICAgXCJjbGVhbjpjYWNoZVwiOiBcInJpbXJhZiBub2RlX21vZHVsZXMvLmNhY2hlLyAmJiByaW1yYWYgbm9kZV9tb2R1bGVzLy52aXRlXCIsXG4gICAgXCJjbGVhbjpidWlsZFwiOiBcInJpbXJhZiBlcyAmJiByaW1yYWYgY2pzICYmIHJpbXJhZiBjc3MgJiYgcmltcmFmIGRpc3QgJiYgcmltcmFmIGxvY2FsZVwiLFxuICAgIFwibGludFwiOiBcImVzbGludCAuIC0tZXh0IHRzLHRzeCAtLXJlcG9ydC11bnVzZWQtZGlzYWJsZS1kaXJlY3RpdmVzIC0tbWF4LXdhcm5pbmdzIDBcIixcbiAgICBcInByZXZpZXdcIjogXCJ2aXRlIHByZXZpZXdcIlxuICB9LFxuICBcInJlcG9zaXRvcnlcIjoge1xuICAgIFwidHlwZVwiOiBcImdpdFwiLFxuICAgIFwidXJsXCI6IFwiZ2l0K2h0dHBzOi8vZ2l0aHViLmNvbS9FdmVmeW91RkUvcmVhY3QtZXZlZnlvdS1ob29rcy5naXRcIlxuICB9LFxuICBcImtleXdvcmRzXCI6IFtcbiAgICBcInJlYWN0XCIsXG4gICAgXCJob29rXCIsXG4gICAgXCJsaWtlIHBpbmlhXCIsXG4gICAgXCJkZWZpbmUgcmVjb2lsIHN0YXRlXCIsXG4gICAgXCJkZWZpbmUgc3RhdGVcIixcbiAgICBcImV2ZWZ5b3VcIlxuICBdLFxuICBcImF1dGhvclwiOiBcIkV2ZWZ5b3VGRVwiLFxuICBcImxpY2Vuc2VcIjogXCJNSVRcIixcbiAgXCJidWdzXCI6IHtcbiAgICBcInVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9FdmVmeW91RkUvcmVhY3QtZXZlZnlvdS1pc3N1ZXNcIlxuICB9LFxuICBcImhvbWVwYWdlXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL0V2ZWZ5b3VGRS9yZWFjdC1ldmVmeW91LWhvb2tzI3JlYWRtZVwiLFxuICBcInBlZXJEZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiYWhvb2tzXCI6IFwiPj0zLjcuNlwiLFxuICAgIFwicmFtZGFcIjogXCI+PTAuMjkuMFwiLFxuICAgIFwicmVhY3RcIjogXCI+PTE4LjIuMFwiLFxuICAgIFwicmVhY3QtZG9tXCI6IFwiPj0xOC4yLjBcIixcbiAgICBcInJlYWN0LWV2ZWZ5b3UtY29tbW9uXCI6IFwiPj0wLjAuMVwiLFxuICAgIFwicmVjb2lsXCI6IFwiPj0wLjcuN1wiXG4gIH0sXG4gIFwiZGV2RGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcIkB0eXBlcy9ub2RlXCI6IFwiXjIwLjQuOVwiLFxuICAgIFwiQHR5cGVzL3JhbWRhXCI6IFwiXjAuMjkuMFwiLFxuICAgIFwiQHR5cGVzL3JlYWN0XCI6IFwiXjE4LjIuMTVcIixcbiAgICBcIkB0eXBlcy9yZWFjdC1kb21cIjogXCJeMTguMi43XCIsXG4gICAgXCJAdHlwZXNjcmlwdC1lc2xpbnQvZXNsaW50LXBsdWdpblwiOiBcIl42LjAuMFwiLFxuICAgIFwiQHR5cGVzY3JpcHQtZXNsaW50L3BhcnNlclwiOiBcIl42LjAuMFwiLFxuICAgIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3RcIjogXCJeNC4wLjNcIixcbiAgICBcImVzbGludFwiOiBcIl44LjQ1LjBcIixcbiAgICBcImVzbGludC1wbHVnaW4tcmVhY3QtaG9va3NcIjogXCJeNC42LjBcIixcbiAgICBcImVzbGludC1wbHVnaW4tcmVhY3QtcmVmcmVzaFwiOiBcIl4wLjQuM1wiLFxuICAgIFwicmltcmFmXCI6IFwiXjUuMC4xXCIsXG4gICAgXCJ0c3VwXCI6IFwiXjcuMi4wXCIsXG4gICAgXCJ0eXBlc2NyaXB0XCI6IFwiXjUuMS42XCIsXG4gICAgXCJ2aXRlXCI6IFwiXjQuNC41XCIsXG4gICAgXCJ2aXRlLXBsdWdpbi1kdHNcIjogXCJeMy41LjFcIixcbiAgICBcInZpdGUtdHNjb25maWctcGF0aHNcIjogXCJeNC4yLjBcIlxuICB9XG59XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBUUEsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxVQUFVO0FBQ2pCLE9BQU8sU0FBUztBQUNoQixPQUFPLG1CQUFtQjs7O0FDWDFCO0FBQUEsRUFDRSxNQUFRO0FBQUEsRUFDUixTQUFXO0FBQUEsRUFDWCxhQUFlO0FBQUEsRUFDZixNQUFRO0FBQUEsRUFDUixNQUFRO0FB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
