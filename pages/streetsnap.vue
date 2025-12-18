<template>
    <div class="page-streetsnap">
        <!-- Header 已在 default layout 中提供 -->
        <case-hero />

        <problem-section />

        <research-section />

        <design-section />
        <!--  
        <final-section /> -->
        <!-- Footer 已在 default layout 中提供 -->
    </div>
</template>

<script setup>
    import CaseHero from "~/components/caseHero-streetsnap.vue";
    import ProblemSection from "~/components/ProblemSection-streetsnap.vue";
    import ResearchSection from "~/components/ResearchSection-streetsnap.vue";
    import DesignSection from "~/components/DesignSection-streetsnap.vue";
    // import FinalSection from "~/components/FinalSection.vue";

    definePageMeta({
        // 你可以在這加入 meta 等
    });
</script>
