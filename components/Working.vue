<template>
    <section class="working" role="status" aria-live="polite">
        <!-- 圖片位置：/public/images/working.svg -->
        <img :src="imgSrc" :alt="imgAlt" class="working__img" />

        <h4 class="working__title">{{ title }}</h4>
        <p class="working__desc">{{ description }}</p>
        <!-- optional slot（如果想放其他東西） -->
        <slot />
    </section>
</template>

<script setup>
    const props = defineProps({
        imgSrc: { type: String, default: "/images/working.svg" }, // 建議寫 /images/...
        imgAlt: { type: String, default: "working picture" },
        title: { type: String, default: "網站建置中..." },
        description: { type: String, default: "I'm currently building my portfolio website — Stay tuned." },
    });
</script>

<style scoped>
    .working {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 16px;
        padding-top: 64px;
    }

    .working__img {
        width: 200px;
        height: auto;
    }
</style>
