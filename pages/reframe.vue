<script setup>
    import data from "~/data/cases/reframe.json";
</script>

<template>
    <CaseHero :title="data.title" :img="data.heroImage" />
    <CaseContent :sections="data.sections" />

    <div class="container py-5">
        <h2>主要 UX 研究案例</h2>
        <p>簡短介紹與關鍵洞察。</p>

        <!-- 如果你要嵌入 Figma prototype -->
        <div class="ratio ratio-16x9 my-4">
            <iframe src="https://www.figma.com/embed?embed_host=share&url=你的-figma-分享連結" allowfullscreen></iframe>
        </div>

        <p>更多內容（流程、方法、結果、後續）...</p>
    </div>
</template>
