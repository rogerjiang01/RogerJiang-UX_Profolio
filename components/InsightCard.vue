<template>
    <div class="insight-card">
        <div class="insight-card__media">
            <!-- 圖片 + 標題 -->
            <div class="insight-card__title">
                <img :src="img" :alt="alt" class="insight-card__image" />
            </div>

            <!-- 內文 -->
            <div class="insight-card__body">
                <p class="insight-card__description">{{ description }}</p>

                <!-- Insight 標註 -->
                <h5 class="insight-card__insight">
                    <strong>Insight：</strong>
                    {{ insight }}
                </h5>
            </div>
        </div>
    </div>
</template>

<script setup>
    defineProps({
        img: String,
        alt: String,
        title: String,
        description: String,
        insight: String,
    });
</script>

<style scoped>
    .insight-card__media {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 16px;
        gap: 24px;
    }

    .insight-card__title {
        border-radius: 8px;
        overflow: hidden;
        width: 100%;
    }

    .insight-card__title img {
        width: 100%;
        height: auto;
        display: block;
    }

    .insight-card__body {
        width: 100%;
    }

    .insight-card__insight {
        color: var(--main-500);
    }
</style>
