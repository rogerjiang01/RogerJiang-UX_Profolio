// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";
// import TsconfigPaths from "vite-tsconfig-paths";
export default defineNuxtConfig({
    compatibilityDate: "2025-10-30",
    devtools: { enabled: true },

    // vite: {
    //     plugins: [TsconfigPaths()],
    // },
    // Ensure Bootstrap CSS is loaded before your custom stylesheet so
    // custom rules can override Bootstrap safely. Avoid importing
    // bootstrap again inside `assets/styles.css` to prevent duplication.
    css: ["bootstrap/dist/css/bootstrap.min.css", "~/assets/css/main.css"],

    app: {
        head: {
            title: "Roger Jiang - UX Designer Portfolio",
            meta: [{ charset: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }, { name: "description", content: "Roger Jiang — UX Designer portfolio" }],
            link: [
                { rel: "preconnect", href: "https://fonts.googleapis.com" },
                { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
                { href: "https://fonts.googleapis.com/css2?family=PT+Serif+Caption&family=Open+Sans:wght@400;700&family=Noto+Sans+TC:wght@400;700&family=Inter&display=swap", rel: "stylesheet" },
            ],
        },
    },

    runtimeConfig: {
        public: {
            gaMeasurementId: process.env.NUXT_PUBLIC_GA_MEASUREMENT_ID || "",
        },
    },

    // modules: ["@nuxtjs/tailwindcss"],
});
