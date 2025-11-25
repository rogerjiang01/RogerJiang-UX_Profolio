<template>
    <div class="page-cafe-menu">
        <!-- Header 已在 default layout 中提供 -->
        <case-hero />

        <situation-section />

        <action-section />

        <result-section />

        <!-- Footer 已在 default layout 中提供 -->
    </div>
</template>

<script setup>
    import CaseHero from "~/components/caseHero-cafeMenu.vue";
    import SituationSection from "~/components/SituationSection-cafeMenu.vue";
    import ActionSection from "~/components/ActionSection-cafeMenu.vue";
    import ResultSection from "~/components/ResultSection-cafeMenu.vue";

    definePageMeta({
        // 你可以在這加入 meta 等
    });
</script>
