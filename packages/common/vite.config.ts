import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { resolve } from "path";

const resolvePath = (str: string) => resolve(__dirname, str);

export default defineConfig({
    build: {
        sourcemap: true,
        lib: {
            entry: resolvePath("src/index.ts"),
            name: "index",
            fileName: "index",
        },
        rollupOptions: {
            external: ["@primevue/common"], // Mark primevue/common as external
        },
    },
    plugins: [
        dts({
            insertTypesEntry: true,
            exclude: ["src/**/__tests__/*.ts", "src/**/*.spec.ts"],
        }),
    ],
});
