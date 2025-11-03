<template>
    <div>
        <NuxtLayout />
    </div>
</template>

<script setup lang="ts">
    import { onMounted } from "vue";
    const router = useRouter();
    const config = useRuntimeConfig();

    function sendPageView(url: string) {
        if (!config.public.gaMeasurementId) return;
        // @ts-ignore
        if (typeof window.gtag === "function") {
            // @ts-ignore
            window.gtag("event", "page_view", { page_path: url });
        }
    }

    onMounted(() => {
        const id = config.public.gaMeasurementId;
        if (!id) return;

        // gtag 外部 script
        const s = document.createElement("script");
        s.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
        s.async = true;
        document.head.appendChild(s);

        // inline 初始化 script
        const inline = document.createElement("script");
        inline.type = "text/javascript";
        inline.text = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${id}', { send_page_view: false });
  `;
        document.head.appendChild(inline);
        sendPageView(window.location.pathname + window.location.search);
    });

    router.afterEach((to) => {
        sendPageView(to.fullPath);
    });
</script>
