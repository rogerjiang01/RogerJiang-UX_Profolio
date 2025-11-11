<template>
    <section id="Design-section">
        <!-- 章節標題 -->
        <div class="container">
            <div class="design-title-container">
                <h3 class="design-title">設計、測試、迭代 Design, Test, Iterate</h3>
                <p class="lead">完成使用者研究後，我以 User Flow 將抽象概念轉化為實際操作流程，並據此製作 Lo-Fi Wireframe。 在設計過程中，我面臨的挑戰是如何讓使用者在「訓練陪跑」功能中能直覺調整數據而不增加操作負擔。 經過多次易用性測試後，我最終選擇在訓練介面中直接提供即時修改功能，使操作更連貫、體驗更流暢，同時避免頻繁中斷。</p>
            </div>
        </div>
        <article class="lofi-wireframes">
            <div class="container">
                <!-- Lofi Wireframe Title -->
                <h4 class="lofi-title article-titles">Lo-Fi Wireframe</h4>

                <!-- Wireframe 1: 摘要介面 -->
                <div class="wireframe wireframe-1">
                    <h5>Wireframe 1: 摘要介面</h5>
                    <div class="wireframe-card">
                        <img class="pointer" src="/public/images/reframe/wireframe_index.png" alt="Wireframe 1 - 摘要介面" @click="openLightbox('images/reframe/wireframe_index.png', 'Wireframe 1 - 摘要介面')" />
                    </div>
                </div>

                <!-- Wireframe 2: 訓練介面 -->
                <div class="wireframe wireframe-2">
                    <h5>Wireframe 2: 訓練介面</h5>
                    <div class="wireframe-card">
                        <img class="pointer" src="/public/images/reframe/wireframe_train.png" alt="Wireframe 2 - 訓練介面" @click="openLightbox('images/reframe/wireframe_train.png', 'Wireframe 2 - 訓練介面')" />
                    </div>
                </div>

                <!-- Wireframe 3: 飲食介面 -->
                <div class="wireframe wireframe-3">
                    <h5>Wireframe 3: 飲食介面</h5>
                    <div class="wireframe-card">
                        <img class="pointer" src="/public/images/reframe/wireframe_food.png" alt="Wireframe 3 - 飲食介面" @click="openLightbox('images/reframe/wireframe_food.png', 'Wireframe 3 - 飲食介面')" />
                    </div>
                </div>

                <!-- Wireframe 4: 個人介面 -->
                <div class="wireframe wireframe-4">
                    <h5>Wireframe 4: 個人介面</h5>
                    <div class="wireframe-card">
                        <img class="pointer" src="/public/images/reframe/wireframe_account.png" alt="Wireframe 4 - 個人介面" @click="openLightbox('images/reframe/wireframe_account.png', 'Wireframe 4 - 個人介面')" />
                    </div>
                </div>
            </div>
        </article>
        <!-- Usability testing section -->
        <article class="usability-testing">
            <div class="container">
                <h4 class="article-titles">易用性測試</h4>
                <p class="usability-intro">我找了5位受試者進行易用性測試，透過情境描述，讓使用者身歷其境的使用Prototype達成目標。整理出使用者共同遇見的挫折點與困惑，以下分別用圖舉例，Before是受試者測試的版本、After為修改後的結果。</p>

                <div class="usability-images">
                    <div class="usability-image example1">
                        <img class="pointer" src="/public/images/reframe/example1-1.png" alt="Usability test - example1 before" @click="openLightbox('images/reframe/example1-1.png', 'Usability test - example1 before')" />
                        <img class="after pointer" src="/public/images/reframe/example1-2.png" alt="Usability test - example1 after" @click="openLightbox('images/reframe/example1-2.png', 'Usability test - example1 after')" />
                    </div>

                    <div class="usability-image example2">
                        <img class="pointer" src="/public/images/reframe/example2-1.png" alt="Usability test - example2 before" @click="openLightbox('images/reframe/example2-1.png', 'Usability test - example2 before')" />
                        <img class="after pointer" src="/public/images/reframe/example2-2.png" alt="Usability test - example2 after" @click="openLightbox('images/reframe/example2-2.png', 'Usability test - example2 after')" />
                    </div>
                </div>
            </div>
        </article>
        <ImageLightbox :show="lightboxOpen" :image="lightboxImage" :alt="lightboxAlt" @update:show="(val) => (lightboxOpen = val)" @close="onLightboxClosed" />
    </section>
</template>

<script setup>
    import { ref } from "vue";
    import ImageLightbox from "~/components/ImageLightbox.vue";

    const lightboxOpen = ref(false);
    const lightboxImage = ref("");
    const lightboxAlt = ref("");

    function openLightbox(src, alt = "") {
        lightboxImage.value = src;
        lightboxAlt.value = alt;
        lightboxOpen.value = true;
    }

    function onLightboxClosed() {
        // 如果你要在關閉時做其他事可以放在這
        lightboxImage.value = "";
        lightboxAlt.value = "";
    }
</script>
<style scoped>
    #Design-section {
        padding: 100px 0;
    }

    .article-titles {
        font-weight: var(--en-h4-weight);
        margin-bottom: 32px;
    }

    /* pointer */
    .pointer {
        cursor: pointer;
    }

    /* 章節標題 */
    .design-title-container {
        margin-bottom: 64px;
    }
    .design-title {
        font-weight: var(--en-h4-weight);
        margin-bottom: 64px;
        text-align: center;
    }
    .design-title-container .lead {
        color: var(--gray-700);
        /* letter-spacing: 1px; */
        line-height: 32px;
    }

    /* Lo-Fi Wireframe */
    .lofi-title {
        font-weight: var(--en-h5-weight);
        margin-bottom: 32px;
    }

    .wireframe {
        margin-bottom: 48px;
    }

    .wireframe-card {
        background-color: var(--gray-100);
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 48px;
    }
    .wireframe-card img {
        width: 60%;
        height: auto;
    }

    .wireframe:nth-of-type(2) .wireframe-card img,
    .wireframe:nth-of-type(3) .wireframe-card img {
        width: 80%;
        height: auto;
    }
    /* Usability testing */
    .usability-images {
        display: block;
        gap: 24px;
        margin-top: 48px;
    }

    .usability-image {
        display: flex;
        gap: 128px;
        justify-content: center;
        align-items: flex-start; /* 不強迫同高 */
        padding: 0 24px;
        flex-wrap: wrap; /* 小螢幕換行 */
    }

    .example1 {
        margin-bottom: 128px;
    }

    /* 讓每張圖片根據可用空間縮放且不變形 */
    .usability-image .img-wrap {
        flex: 0 1 calc(50% - 16px); /* 兩張並排，每張佔約一半 */
        max-width: calc(50% - 16px);
        box-sizing: border-box;
    }

    .usability-image img {
        display: block;
        /* width: 100%; */
        height: auto; /* 保持比例，不變形 */
        max-height: 60vh; /* 可選：限制最大高度，避免太高 */
        object-fit: contain;
    }

    @media (max-width: 1200px) {
        .usability-image {
            gap: 32px;
            justify-content: space-between;
        }
        .usability-image img {
            max-height: 40vh;
        }
    }

    @media (max-width: 768px) {
        #Design-section {
            padding: 64px 0;
        }
        .design-title-container .lead {
            font-size: 18px;
            line-height: 28px;
        }

        .wireframe-card {
            padding: 24px;
        }
        .wireframe-card img {
            width: 100%;
            height: auto;
        }

        .wireframe:nth-of-type(2) .wireframe-card img,
        .wireframe:nth-of-type(3) .wireframe-card img {
            width: 100%;
            height: auto;
        }

        .usability-image {
            gap: 32px;
            justify-content: flex-start;
            background-color: var(--gray-100);
            padding: 64px 24px;
            margin-bottom: 32px;
        }
        .usability-image img {
            max-height: 52vh;
        }
    }
</style>
