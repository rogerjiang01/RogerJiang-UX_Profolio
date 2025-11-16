// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
    compatibilityDate: "2025-10-30",
    devtools: { enabled: true },

    modules: [
        "nuxt-gtag",
        // "@nuxtjs/tailwindcss",
    ],

    // 確保 Bootstrap 先載入，再載入自訂 CSS
    css: ["bootstrap/dist/css/bootstrap.min.css", "~/assets/css/main.css"],

    app: {
        head: {
            title: "Roger Jiang - UX Designer Portfolio",
            meta: [
                { charset: "utf-8" },
                { name: "viewport", content: "width=device-width, initial-scale=1" },
                {
                    name: "description",
                    content: "Roger Jiang — UX Designer portfolio",
                },
            ],
            link: [
                { rel: "preconnect", href: "https://fonts.googleapis.com" },
                {
                    rel: "preconnect",
                    href: "https://fonts.gstatic.com",
                    crossorigin: "",
                },
                {
                    href: "https://fonts.googleapis.com/css2?family=PT+Serif+Caption&family=Open+Sans:wght@400;700&family=Noto+Sans+TC:wght@400;700&family=Inter&display=swap",
                    rel: "stylesheet",
                },
            ],
            // ✅ 這裡原本的 GA script 全部移除，不再手動塞 gtag.js
            // script: []  ← 直接省略即可
        },
    },

    // ✅ Nuxt 3 官方 GA module 設定（nuxt-gtag）
    gtag: {
        // 只在 production 啟用 GA，開發時不送資料
        enabled: process.env.NODE_ENV === "production",

        // 使用你 .env 裡的 GA4 Measurement ID

        // 額外的 GA 設定（選填）
        config: {
            // 這裡可以放 GA4 的 config，例如：
            // page_title: 'Roger Jiang - UX Portfolio',
            // anonymize_ip: true,
            // GA4 建議用 Enhanced Measurement 做 page_view，所以不用在這裡特別關 send_page_view
        },
    },

    // ✅ 原本 runtimeConfig 專門給 GA 用，現在可以完全刪掉
    // 如果之後有其他 runtimeConfig 需求再加就好
    // runtimeConfig: { ... }
});
