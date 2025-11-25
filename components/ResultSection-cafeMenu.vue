<template>
    <section id="Result-section">
        <div class="container">
            <!-- Main hero title -->
            <div class="result-title-container">
                <h3 class="result-title">The Result</h3>
            </div>
            <!-- Main hero image -->
            <div class="result-hero">
                <ScrollRevealImage src="/images/cafe-menu/result_hero.jpg" alt="result solution" custom-class="result-hero-img" />
            </div>
        </div>
        <article class="final-mockup">
            <div class="process-container container">
                <p>最終成品成功延續了咖啡廳的溫度與品牌感，同時保有清晰的資訊呈現、易讀性與日常使用者的便利性。成品在木製底板的襯托下更具質感，讓菜單不只是工具，也是空間氛圍的一部分。</p>
                <div class="final-images menu-shadow">
                    <ScrollRevealImage src="/images/cafe-menu/hero-cafe.jpg" alt="成品照片1" custom-class="final-img" />
                    <ScrollRevealImage src="/images/cafe-menu/final-mockup1.jpg" alt="成品照片2" custom-class="final-img" />
                    <ScrollRevealImage src="/images/cafe-menu/final-mockup2.jpg" alt="成品照片3" custom-class="final-img" />
                </div>
            </div>
        </article>
        <div class="back-to-top">
            <a href="#top"><img src="/public/images/reframe/back-to-top.svg" alt="back-to-top" /></a>
        </div>
    </section>
</template>

<script setup></script>

<style scoped>
    #Result-section {
        padding: 100px 0;
    }

    article {
        margin: 128px 0;
    }

    /* 章節標題 */
    .result-title-container {
        margin-bottom: 64px;
    }
    .result-title {
        font-weight: var(--en-h4-weight);
        margin-bottom: 64px;
        text-align: center;
    }

    /* result hero image */
    .result-hero {
        width: 100%;
    }
    :deep(.result-hero-img) {
        width: 100%;
        height: auto;
        display: block;
        margin-bottom: 80px;
    }

    .final-images {
        margin: 32px 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 24px;
    }
    :deep(.final-img) {
        width: 100%;
        height: auto;
        display: block;
    }

    .menu-shadow img {
        box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.1);
    }

    /* Back to top */
    .back-to-top {
        text-align: center;
        margin-top: 40px;
    }

    @media (max-width: 768px) {
        article {
            margin: 64px 0;
        }
        :deep(.result-hero-img) {
            margin-bottom: 40px;
        }
        .back-to-top {
            width: 48px;
            margin: auto;
        }
        .back-to-top img {
            width: 100%;
            height: auto;
        }
    }
</style>
