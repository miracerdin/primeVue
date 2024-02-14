import { UserConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

const config: UserConfig = {
    plugins: [vue()],
    resolve: {
        alias: {
            "@assets": resolve(__dirname, "src/assets/"),
            "@components": resolve(__dirname, "src/components/"),
            "@presets": resolve(__dirname, "src/presets/"),
            "@router": resolve(__dirname, "src/router/"),
            "@types": resolve(__dirname, "src/types/"),
        },
    },
};

export default config;
