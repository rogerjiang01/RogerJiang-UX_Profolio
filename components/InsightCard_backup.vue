<template>
    <article class="insight-card">
        <div class="insight-card__media">
            <!-- 若有 icon 或 svg，可放在這 -->
            <slot name="media"></slot>
        </div>
        <div class="insight-card__content">
            <h3 class="insight-card__title"><slot name="title" /></h3>
            <p class="insight-card__text"><slot name="text" /></p>
        </div>
    </article>
</template>

<script setup>
    /* 無 props（以 slots 為主），若想傳 props 可改寫 */
</script>
