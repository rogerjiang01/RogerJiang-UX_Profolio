<!-- components/ProjectCard.vue -->
<template>
    <div :class="['project-card', variantClass]">
        <div class="project-image" v-if="image">
            <img :src="image" :alt="title" />
        </div>
        <div class="project-info">
            <h3 class="project-title">{{ title }}</h3>
            <p class="project-description">{{ description }}</p>
            <NuxtLink :to="link" class="learn-more-btn">Learn More</NuxtLink>
        </div>
    </div>
</template>

<script setup>
    import { computed } from "vue";

    // 只呼叫一次 defineProps，並取得 props 物件
    const props = defineProps({
        title: { type: String, default: "" },
        description: { type: String, default: "" },
        image: { type: String, default: "" },
        link: { type: String, default: "#" },
        variant: { type: String, default: "" },
    });

    const variantClass = computed(() => (props.variant === "reverse" ? "project-card-reverse" : ""));
</script>

<style scoped>
    /* Project */
    /* Project card - fixed height (deterministic layout) */

    .project-card {
        display: flex;
        align-items: stretch;
        gap: 0;
        overflow: hidden;
        border-radius: 16px; /* adjust or use var(--radius) */
        background: var(--white, #fff);
        height: 400px; /* choose a height that fits your design */
    }

    /* Left/Right image area: fills remaining space */
    .project-image {
        flex: 1 1 auto; /* grow to take remaining space */
        min-width: 0; /* allow proper flex shrinking */
        position: relative;
        overflow: hidden;
        display: block;
    }

    /* Ensure the <img> covers the whole image area */
    .project-image img {
        width: 100%;
        height: 100%;
        object-fit: cover; /* your requested behaviour */
        display: block;
    }

    /* Square info panel: fixed 1:1 aspect ratio, does not grow */
    .project-info {
        flex: 0 0 auto; /* don't stretch horizontally */
        aspect-ratio: 1 / 1; /* keep it square */
        width: auto; /* width computed from aspect-ratio + height */
        box-sizing: border-box;
        padding: 24px;
        background: var(--gray-100, #f2f2f7);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 16px;
        padding: 0 32px;
    }

    /* Optional reverse layout support (from your variant prop) */
    .project-card-reverse {
        flex-direction: row-reverse;
    }

    /* Typographic helpers inside */
    .project-title {
        margin: 0;
        color: var(--gray-900);
        font-family: var(--ff-sans);
        font-weight: 700;
        font-size: var(--tw-h4-size);
        text-align: center;
    }

    .project-description {
        margin: 0;
        /* color: var(--gray-700);
        font-family: var(--ff-sans);
        font-size: var(--tw-h6-size);
        line-height: var(--tw-p-lineheight, 28px); */
        text-align: center;
        max-width: 100%;
    }

    .learn-more-btn {
        display: flex;
        padding: 12px 28px;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
        border: 1px solid var(--gray-700);
        text-decoration: none;
        color: var(--gray-700);
        font-family: var(--ff-sans);
        font-size: 14px;
        transition: all 0.2s ease;
        margin-top: 12px;
    }

    .learn-more-btn:hover {
        background-color: var(--gray-700);
        color: var(--white);
    }

    @media (max-width: 1200px) {
        .project-card {
            height: 320px;
        }
    }
    @media (max-width: 768px) {
        .project-card {
            /* 垂直堆疊：圖片在上、info 在下，並自適應高度 */
            flex-direction: column;
            height: auto; /* 不固定高度 */
            border-radius: 12px;
        }

        /* 如果你想在 mobile 上讓 reverse 仍然是 image 在上，
           保持 column；若想要 info 在上，改成 column-reverse */
        .project-card-reverse {
            flex-direction: column; /* 或 column-reverse */
        }

        .project-image {
            /* 固定高度以避免高度過高（可依需求調整 200~260） */
            height: 220px;
            width: 100%;
            flex: 0 0 auto;
        }

        .project-image img {
            /* 確保在固定高度下維持裁切 */
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .project-info {
            aspect-ratio: auto; /* 取消正方形限制 */
            width: 100%;
            aspect-ratio: 1;
            padding: 24px;
            gap: 12px;
            text-align: center;
            align-items: center;
        }

        .project-title {
            /* font-size: clamp(1.125rem, 1rem + 1vw, 1.5rem); 18px - 24px 之間彈性 */
            text-align: center;
        }

        .project-description {
            /* font-size: 0.95rem; */
            line-height: 1.4;
            text-align: left;
        }

        .learn-more-btn {
            width: 100%;
            padding: 12px 16px;
            margin-top: 16px;
            justify-content: center;
        }
    }
</style>
