<template>
    <div ref="target" class="reveal-wrapper" :class="{ 'is-visible': isVisible }">
        <img :src="src" :alt="alt" :class="customClass" loading="lazy" />
    </div>
</template>

<script setup>
    import { ref, onMounted, onUnmounted } from "vue";

    // 定義 Props，讓外部可以傳入圖片路徑、alt 文字、以及額外的 class
    const props = defineProps({
        src: {
            type: String,
            required: true,
        },
        alt: {
            type: String,
            default: "",
        },
        customClass: {
            type: String,
            default: "",
        },
    });

    const target = ref(null);
    const isVisible = ref(false);
    let observer = null;

    onMounted(() => {
        // 建立 IntersectionObserver
        observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    // 當元素進入視窗範圍時
                    if (entry.isIntersecting) {
                        isVisible.value = true;
                        // 動畫觸發後，就可以停止觀察了（避免往回滑又重複觸發，看你需求）
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1, // 當 10% 的元素可見時觸發
                rootMargin: "0px 0px -50px 0px", // 稍微偏移，讓元素進入視窗底部一點點才觸發，視覺感較好
            }
        );

        if (target.value) {
            observer.observe(target.value);
        }
    });

    onUnmounted(() => {
        if (observer) observer.disconnect();
    });
</script>

<style scoped>
    /* 初始狀態：透明 + 向下偏移 */
    .reveal-wrapper {
        opacity: 0;
        transform: translateY(50px);
        /* 這裡設定動畫時間與曲線 */
        transition: opacity 1s ease-in-out, transform 1s ease-in-out;
        /* 為了不影響內部 img 的排版，wrapper 通常設為 inline-block 或 block 視需求而定 */
        display: block;
    }

    /* 觸發狀態：不透明 + 回到原位 */
    .reveal-wrapper.is-visible {
        opacity: 1;
        transform: translateY(0);
    }

    /* 確保圖片 RWD */
    .reveal-wrapper img {
        width: 100%;
        height: auto;
        display: block;
    }
</style>
