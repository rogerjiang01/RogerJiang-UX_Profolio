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
