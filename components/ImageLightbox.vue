<template>
    <!-- 使用 Teleport 到 body，避免被父容器 overflow 隱藏 -->
    <teleport to="body">
        <!-- only render when show=true -->
        <div v-if="show" role="dialog" aria-modal="true" :aria-label="ariaLabel" class="lightbox-overlay" @click.self="close">
            <!-- 內容容器 -->
            <div class="lightbox-container" ref="container" @click.stop>
                <!-- 圖片（或 slot 讓父元可替換成 video 等） -->
                <img v-if="image" :src="image" :alt="alt" class="lightbox-image" />

                <!-- 可選左/右切換（若你有多張可做延伸） -->
            </div>
            <!-- 關閉按鈕 -->
            <button class="lightbox-close" @click="close" aria-label="Close image">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path d="M19.375 1.5L1.5 19.375M1.5 1.5L19.375 19.375" stroke="#FFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>
        </div>
    </teleport>
</template>

<script setup>
    import { ref, watch, onMounted, onBeforeUnmount } from "vue";

    const props = defineProps({
        show: { type: Boolean, default: false },
        image: { type: String, default: "" }, // e.g. "/images/reframe/example1-2.png"
        alt: { type: String, default: "" },
        ariaLabel: { type: String, default: "Image lightbox" },
    });

    const emit = defineEmits(["update:show", "close"]);

    const container = ref(null);

    const close = () => {
        emit("update:show", false);
        emit("close");
    };

    watch(
        () => props.show,
        (val) => {
            if (val) {
                document.body.style.overflow = "hidden";
            } else {
                document.body.style.overflow = "";
            }
        }
    );

    const onKey = (e) => {
        if (e.key === "Escape" && props.show) {
            close();
        }
    };

    onMounted(() => {
        window.addEventListener("keydown", onKey);
    });

    onBeforeUnmount(() => {
        window.removeEventListener("keydown", onKey);
        document.body.style.overflow = "";
    });
</script>

<style scoped>
    /* overlay */
    .lightbox-overlay {
        position: fixed;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(0, 0, 0, 0.7); /* 半透明黑色遮罩 */
        z-index: 9999;
        padding: 24px;
        overflow: auto;
    }

    /* container */
    .lightbox-container {
        position: relative;
        max-width: 95vw;
        max-height: 95vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    /* image */
    .lightbox-image {
        transform: translateY(var(--lightbox-translate, 6%));
        max-width: 80%;
        max-height: 100%;
        object-fit: contain;
        display: block;
        border-radius: 8px;
        transition: transform 200ms ease;
    }

    /* close button */
    .lightbox-close {
        position: absolute;
        top: 32px;
        right: 32px;
        background-color: transparent;
        border: none;
        width: 40px;
        height: 40px;
        cursor: pointer;
        box-shadow: none;
        outline: none;
        -webkit-appearance: none;
        appearance: none;
        filter: none;
        -webkit-tap-highlight-color: transparent;
        padding: 0;
        margin: 0;
    }

    @media (max-width: 768px) {
        .lightbox-image {
            max-width: 105%;
        }
    }
</style>
