<template>
    <section class="case-hero" role="banner" aria-label="Hero: Reframe">
        <!-- 背景圖層（遮罩 / 背景圖） -->
        <div class="case-hero__background" aria-hidden="true">
            <img class="case-hero__bg-img" src="/public/images/reframe/reframe_hero.png" alt="" />
            <div class="overlay"></div>
        </div>

        <!-- 文字與 mockup -->
        <div class="caseHero-container">
            <div class="case-hero__content">
                <div class="case-hero__text">
                    <div class="case-hero__title">
                        <img class="shadow" src="/public/images/reframe/Reframe_logo_w.svg" alt="" />
                        <h1 class="shadow">Reframe</h1>
                    </div>
                    <p class="case-hero__subtitle shadow">一站式健身飲食控制整合App</p>
                </div>

                <div class="case-hero__mockup">
                    <img class="case-hero__mockup-img" src="/public/images/reframe/Reframe_mockup2.png" alt="Reframe mockup" />
                    <img class="case-hero__mockup-img-mobile" src="/public/images/reframe/Reframe_mockup2_mobile.png" alt="Reframe mockup" />
                </div>
            </div>
        </div>
        <!-- 向下箭頭（可綁 scroll 事件） -->
        <button class="case-hero__arrow" type="button" aria-label="Scroll to next section" @click="scrollToProblem">
            <img src="/public/images/reframe/arrow-down.svg" alt="" />
        </button>
    </section>
</template>

<script setup>
    const scrollToProblem = () => {
        const el = document.getElementById("Problem-section");
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };
</script>

<style scoped>
    /* HeroBG */
    .case-hero__background {
        width: 100%;
        height: calc(100vh - 107.5px);
        position: absolute; /* 讓 overlay 能絕對定位 */
        z-index: -1;
        overflow: hidden;
    }

    .case-hero__bg-img {
        width: 100%;
        height: auto;
        display: block;
        animation: heroZoom 40s ease-in-out infinite alternate;
    }

    @keyframes heroZoom {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.5);
        }
        100% {
            transform: scale(1);
        }
    }

    .case-hero__background .overlay {
        position: absolute;
        inset: 0; /* 等同於 top:0; right:0; bottom:0; left:0 */
        background: rgba(0, 0, 0, 0.6); /* 黑色半透明 */
        pointer-events: none; /* 避免擋住點擊事件 */
    }

    /* Hero Content Container */
    .caseHero-container {
        position: relative;
        height: calc(100vh - 107.5px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    /* Hero Content  */
    .shadow {
        text-shadow: 3px 3px 8px rgba(0, 0, 0, 0.3);
    }

    .case-hero__content {
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        gap: 200px;
    }

    .case-hero__title {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 16px;
        justify-content: center;
    }

    .case-hero__content .case-hero__text .case-hero__title h1,
    .case-hero__content .case-hero__text .case-hero__subtitle {
        color: var(--white, #fff);
        font-family: var(--ff-sans);
    }

    .case-hero__title img {
        height: 5rem;
    }

    .case-hero__content .case-hero__text .case-hero__title h1 {
        font-size: var(--en-h1-size);
        font-weight: 600;
        margin: 0;
    }
    .case-hero__content .case-hero__text .case-hero__subtitle {
        font-size: var(--en-h4-size);
        letter-spacing: 1.5px;
        margin: 8px 0 0 8px;
    }

    .case-hero__mockup .case-hero__mockup-img {
        width: 300px;
        height: auto;
        display: block;
    }

    .case-hero__mockup .case-hero__mockup-img-mobile {
        display: none;
    }

    /* 向下箭頭 */
    .case-hero__arrow {
        position: relative;
        margin: auto;
        width: 48px;
        height: 48px;
        display: block;
        bottom: 100px;
        background: none;
        border: none;
        cursor: pointer;
        pointer-events: auto;
    }

    @media (max-width: 1200px) {
        .case-hero__background {
            height: calc(100vh - 95px);
        }

        .case-hero__bg-img {
            height: 100%;
            object-fit: cover;
            object-position: center;
        }

        .case-hero__mockup .case-hero__mockup-img {
            width: 280px;
        }

        .caseHero-container {
            padding-bottom: 64px;
        }

        .case-hero__content {
            gap: 100px;
        }
    }

    @media (max-width: 768px) {
        .case-hero__background {
            height: calc(100vh - 80px);
        }
        .caseHero-container {
            height: calc(100vh - 80px);
            padding-bottom: 0px;
        }
        .case-hero__content {
            flex-direction: column;
            gap: 16px;
        }
        .case-hero__mockup .case-hero__mockup-img {
            display: none;
        }
        .case-hero__mockup .case-hero__mockup-img-mobile {
            display: block;
            width: 100%;
            height: auto;
        }
    }
</style>
