<template>
    <div class="page-reframe">
        <!-- Header 已在 default layout 中提供 -->
        <case-hero />

        <problem-section />

        <research-section />

        <design-section />

        <final-section />
        <!-- Footer 已在 default layout 中提供 -->
    </div>
</template>

<script setup>
    import CaseHero from "~/components/caseHero.vue";
    import ProblemSection from "~/components/ProblemSection.vue";
    import ResearchSection from "~/components/ResearchSection.vue";
    import DesignSection from "~/components/DesignSection.vue";
    import FinalSection from "~/components/FinalSection.vue";

    definePageMeta({
        // 你可以在這加入 meta 等
    });
</script>
