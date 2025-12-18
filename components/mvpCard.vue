<template>
    <div class="mvp-card">
        <img v-if="img" :src="img" :alt="imgAlt" class="mvp-card__img" loading="lazy" />

        <p v-if="eyebrow" class="mvp-card__eyebrow">
            {{ eyebrow }}
        </p>

        <h5 class="mvp-card__title">
            {{ title }}
        </h5>

        <p v-for="(text, index) in description" :key="index" class="mvp-card__description">
            {{ text }}
        </p>
    </div>
</template>

<script setup lang="ts">
    interface Props {
        img?: string;
        imgAlt?: string;
        eyebrow?: string;
        title: string;
        description: string[];
    }

    defineProps<Props>();
</script>

<style scoped>
    .mvp-card {
        flex: 0 0 372px; /* 每張卡寬度，可視需要調 */
        max-width: 372px;
        border-radius: 24px;
        background: #ffffff;
        padding: 32px;
        box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        scroll-snap-align: start;
    }

    .mvp-card__img {
        width: auto;
        height: 300px;
        aspect-ratio: 1/1;
        /* border-radius: 16px; */
        margin-bottom: 16px;
        object-fit: cover;
        object-position: center;
    }

    .mvp-card__eyebrow {
        font-size: 12px;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: #6e6e73;
        margin-bottom: 4px;
    }

    .mvp-card__title {
        font-family: "inter";
        color: var(--gray-800);
        font-weight: 600;
        margin-bottom: 16px;
    }

    .mvp-card__description {
        font-family: "inter";
        color: var(--gray-700);
        font-weight: 400;
    }
    .mvp-card__description:nth-of-type(3) {
        margin-bottom: 0;
    }

    @media (max-width: 768px) {
        .mvp-card {
            flex: 0 0 280px;
            max-width: 280px;
            border-radius: 16px;
            padding: 24px;
        }
        .mvp-card__img {
            height: 220px;
        }
    }
</style>
