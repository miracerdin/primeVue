// packages/common/vite.config.ts
import { defineConfig } from "file:///C:/Users/Mirac1/Documents/PusulaMirac/primeVue/packages/common/node_modules/vite/dist/node/index.js";
import dts from "file:///C:/Users/Mirac1/Documents/PusulaMirac/primeVue/packages/common/node_modules/vite-plugin-dts/dist/index.mjs";
import { resolve } from "path";
import peerDepsExternal from "file:///C:/Users/Mirac1/Documents/PusulaMirac/primeVue/packages/common/node_modules/rollup-plugin-peer-deps-external/dist/rollup-plugin-peer-deps-external.js";
var __vite_injected_original_dirname =
    "C:\\Users\\Mirac1\\Documents\\PusulaMirac\\primeVue\\packages\\common";
var resolvePath = (str) => resolve(__vite_injected_original_dirname, str);
var vite_config_default = defineConfig({
    build: {
        sourcemap: true,
        lib: {
            entry: resolvePath("src/index.ts"),
            name: "index",
            fileName: "index",
        },
    },
    plugins: [
        dts({
            insertTypesEntry: true,
            exclude: ["src/**/__tests__/*.ts", "src/**/*.spec.ts"],
        }),
        peerDepsExternal(),
    ],
});
export { vite_config_default as default };
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsicGFja2FnZXMvY29tbW9uL3ZpdGUuY29uZmlnLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcTWlyYWMxXFxcXERvY3VtZW50c1xcXFxQdXN1bGFNaXJhY1xcXFxwcmltZVZ1ZVxcXFxwYWNrYWdlc1xcXFxjb21tb25cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXE1pcmFjMVxcXFxEb2N1bWVudHNcXFxcUHVzdWxhTWlyYWNcXFxccHJpbWVWdWVcXFxccGFja2FnZXNcXFxcY29tbW9uXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9NaXJhYzEvRG9jdW1lbnRzL1B1c3VsYU1pcmFjL3ByaW1lVnVlL3BhY2thZ2VzL2NvbW1vbi92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgZHRzIGZyb20gXCJ2aXRlLXBsdWdpbi1kdHNcIjtcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IHBlZXJEZXBzRXh0ZXJuYWwgZnJvbSBcInJvbGx1cC1wbHVnaW4tcGVlci1kZXBzLWV4dGVybmFsXCI7XG5cbmNvbnN0IHJlc29sdmVQYXRoID0gKHN0cjogc3RyaW5nKSA9PiByZXNvbHZlKF9fZGlybmFtZSwgc3RyKTtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgICBidWlsZDoge1xuICAgICAgICBzb3VyY2VtYXA6IHRydWUsXG4gICAgICAgIGxpYjoge1xuICAgICAgICAgICAgZW50cnk6IHJlc29sdmVQYXRoKFwic3JjL2luZGV4LnRzXCIpLFxuICAgICAgICAgICAgbmFtZTogXCJpbmRleFwiLFxuICAgICAgICAgICAgZmlsZU5hbWU6IFwiaW5kZXhcIixcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHBsdWdpbnM6IFtcbiAgICAgICAgZHRzKHtcbiAgICAgICAgICAgIGluc2VydFR5cGVzRW50cnk6IHRydWUsXG4gICAgICAgICAgICBleGNsdWRlOiBbXCJzcmMvKiovX190ZXN0c19fLyoudHNcIiwgXCJzcmMvKiovKi5zcGVjLnRzXCJdLFxuICAgICAgICB9KSxcbiAgICAgICAgcGVlckRlcHNFeHRlcm5hbCgpLFxuICAgIF0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBNFgsU0FBUyxvQkFBb0I7QUFDelosT0FBTyxTQUFTO0FBQ2hCLFNBQVMsZUFBZTtBQUN4QixPQUFPLHNCQUFzQjtBQUg3QixJQUFNLG1DQUFtQztBQUt6QyxJQUFNLGNBQWMsQ0FBQyxRQUFnQixRQUFRLGtDQUFXLEdBQUc7QUFFM0QsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDeEIsT0FBTztBQUFBLElBQ0gsV0FBVztBQUFBLElBQ1gsS0FBSztBQUFBLE1BQ0QsT0FBTyxZQUFZLGNBQWM7QUFBQSxNQUNqQyxNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsSUFDZDtBQUFBLEVBQ0o7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNMLElBQUk7QUFBQSxNQUNBLGtCQUFrQjtBQUFBLE1BQ2xCLFNBQVMsQ0FBQyx5QkFBeUIsa0JBQWtCO0FBQUEsSUFDekQsQ0FBQztBQUFBLElBQ0QsaUJBQWlCO0FBQUEsRUFDckI7QUFDSixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
