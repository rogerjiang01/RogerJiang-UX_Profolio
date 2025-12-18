<template>
    <section id="Design-section">
        <!-- 章節標題 -->
        <div class="container">
            <div class="design-title-container">
                <h3 class="design-title">設計、測試、迭代 Design, Test, Iterate</h3>
                <p class="lead">Streetsnap 易用性測試正在進行中，作品最新情況將持續更新 —— Stay Tuned</p>
                <div class="temp">
                    <a href="https://rogerjiang01.github.io/streetsnap/">Streetsnap 一頁式宣傳網站</a>
                    <a href="https://streetsnap-app.vercel.app/">Streetsnap 互動應用程式原型 (High-Fidelity Prototype)，歡迎進入點擊玩玩</a>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
    import { ref } from "vue";
    import ImageLightbox from "~/components/ImageLightbox.vue";

    const lightboxOpen = ref(false);
    const lightboxImage = ref("");
    const lightboxAlt = ref("");

    function openLightbox(src, alt = "") {
        lightboxImage.value = src;
        lightboxAlt.value = alt;
        lightboxOpen.value = true;
    }

    function onLightboxClosed() {
        // 如果你要在關閉時做其他事可以放在這
        lightboxImage.value = "";
        lightboxAlt.value = "";
    }
</script>
<style scoped>
    #Design-section {
        padding: 100px 0;
    }

    /* 章節標題 */
    .design-title-container {
        margin-bottom: 200px; /*暫時200 原本64*/
    }
    .design-title {
        font-weight: var(--en-h4-weight);
        margin-bottom: 64px;
        text-align: center;
    }
    .design-title-container .lead {
        color: var(--gray-700);
        /* letter-spacing: 1px; */
        line-height: 32px;
        text-align: center;
    }
    .temp {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 24px;
        font-size: 18px;
        margin-top: 64px;
    }
    .temp a {
        color: var(--main-700);
        text-decoration: underline;
    }
</style>
