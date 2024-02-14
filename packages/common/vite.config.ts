import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { resolve } from "path";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

const resolvePath = (str: string) => resolve(__dirname, str);

export default defineConfig({
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
