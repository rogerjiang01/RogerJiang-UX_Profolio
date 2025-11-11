<template>
    <article class="media-card">
        <div class="media-card__media">
            <!-- videoSrc 範例: /public/_videos/reframe/c79dd2cc47a4f15d29d9930e1b5aef836d3f4bfa -->
            <video :src="videoSrc" autoplay loop muted playsinline :aria-label="title" class="non-interactive-video" />
        </div>

        <div class="media-card__body">
            <h4 class="media-card__title">{{ title }}</h4>
            <p class="media-card__desc">{{ description }}</p>
        </div>
    </article>
</template>

<script setup>
    /*
  MediaCard.vue
  Props:
    - title: 卡片標題 (string)
    - description: 卡片描述 (string)
    - videoSrc: 影片完整路徑 (string)，例："/public/_videos/reframe/c79dd2cc47a4f15d29d9930e1b5aef836d3f4bfa"
*/
    import { defineProps } from "vue";

    const props = defineProps({
        title: { type: String, required: true },
        description: { type: String, required: true },
        videoSrc: { type: String, required: true },
    });
</script>

<style scoped>
    /* MediaCard video */
    .media-card__media .non-interactive-video {
        pointer-events: none; /* 禁止滑鼠事件（點擊、右鍵、拖曳） */
        user-select: none; /* 禁止選取 */
        width: 100%;
        height: auto;
        display: block;
        margin-bottom: 24px;
    }
    /* MediaCard body */
    .media-card__title {
        text-align: center;
    }
</style>
