<template>
    <section id="Final-section">
        <div class="container">
            <!-- Main hero title -->
            <div class="final-title-container">
                <h3 class="final-title">成品展示 Final Solution</h3>
            </div>
            <!-- Main hero image -->
            <div class="final-hero">
                <img src="/public/images/reframe/final_mockup.png" alt="Final solution" />
            </div>

            <!-- Feature videos (6 個 MediaCard) -->
            <div class="feature-videos">
                <!-- Card 1: 註冊登入 -->
                <MediaCard title="註冊登入" description="在首次進入 app 時，提供引導式介面協助新手使用者上手，透過輸入身體數據與目標選單提供客製化量化目標。" videoSrc="_videos/reframe/Sign_up.mp4" />

                <!-- Card 2: 快速的飲食記錄 -->
                <MediaCard title="快速的飲食記錄" description="使用拍照功能快速紀錄數據，也提供手動輸入，系統生成今日飲食分析與本週報告，協助精準控制飲食。" videoSrc="_videos/reframe/Food.mp4" />

                <!-- Card 3: 新增訓練菜單 -->
                <MediaCard title="新增訓練菜單" description="提供模板化訓練菜單與自定義選項，讓使用者快速建立訓練計畫並滿足進階需求。" videoSrc="_videos/reframe/Add_training.mp4" />

                <!-- Card 4: 訓練中 -->
                <MediaCard title="訓練中" description="訓練以陪跑形式設計、提供影片教學與即時修改紀錄，使訓練更直覺、流暢。" videoSrc="_videos/reframe/Training.mp4" />

                <!-- Card 5: 個人頁面 -->
                <MediaCard title="個人頁面" description="以數據圖與體態日誌呈現個人長期變化，讓使用者從進展中獲得成就感，激勵持續行動。" videoSrc="_videos/reframe/Profile.mp4" />

                <!-- Card 6: AI 飲食建議 -->
                <MediaCard title="AI 飲食建議" description="提供 AI 對話介面與連動飲食計劃功能，讓使用者即時得到個人化飲食建議。" videoSrc="_videos/reframe/AI_chatbot.mp4" />
            </div>

            <!-- 驗證 (validation) -->
            <div class="validation">
                <h3 class="article-titles">驗證</h3>
                <p>我以 Hi-Fi Prototype 進行最終使用者測試，將最終測試結果與早期訪談比對並量化整理。</p>
                <img src="/public/images/reframe/validate_pic.jpg" alt="validation" @click="openLightbox('/images/reframe/validate_pic.jpg', 'validation')" />
            </div>

            <!-- Final Pitch 圖片 -->
            <div class="final-pitch">
                <h3 class="article-titles">Final Pitch</h3>
                <p>我與團隊上台發表，從研究、測試到迭代，重新定義健身與飲食記錄的體驗，讓堅持更容易。</p>

                <!-- final pitch 圖 1: 554a8ef692a6d0c945d61bfe5367c30d2dcb9caa.png -->
                <img src="/public/images/reframe/final_pitch.png" alt="final pitch 1" />

                <!-- final pitch 圖 2: a8dac477517c8c2da2e1779e1212cb0f822ccb43.png -->
                <img src="/public/images/reframe/final-pic.jpg" alt="final pitch 2" />
            </div>
        </div>
        <div class="back-to-top">
            <a href="#top"><img src="/public/images/reframe/back-to-top.svg" alt="back-to-top" /></a>
        </div>

        <ImageLightbox :show="lightboxOpen" :image="lightboxImage" :alt="lightboxAlt" @update:show="(val) => (lightboxOpen = val)" @close="onLightboxClosed" />
    </section>
</template>

<script setup>
    import MediaCard from "~/components/MediaCard.vue";

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
    #Final-section {
        padding: 100px 0;
    }

    .article-titles {
        font-weight: var(--en-h4-weight);
        margin-bottom: 32px;
    }

    /* 章節標題 */
    .final-title-container {
        margin-bottom: 64px;
    }
    .final-title {
        font-weight: var(--en-h4-weight);
        margin-bottom: 64px;
        text-align: center;
    }

    /* Final hero image */
    .final-hero {
        width: 100%;
    }
    .final-hero img {
        width: 100%;
        height: auto;
        display: block;
        margin-bottom: 80px;
    }

    /* Feature videos */
    .feature-videos {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 96px;
        margin-bottom: 100px;
    }
    @media (max-width: 992px) {
        .feature-videos {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (max-width: 768px) {
        .feature-videos {
            grid-template-columns: 1fr;
        }
    }

    /* Validation */
    .validation {
        margin-top: 100px;
    }
    .validation img {
        width: 80%;
        height: auto;
        margin: 0 auto;
        display: block;
        margin-top: 64px;
        margin-bottom: 80px;
        cursor: pointer;
    }
    /* Final Pitch */
    .final-pitch {
        margin-bottom: 100px;
    }
    .final-pitch img {
        width: 100%;
        height: auto;
        display: block;
        margin-top: 32px;
        margin-bottom: 80px;
    }
    /* Back to top */
    .back-to-top {
        text-align: center;
        margin-top: 40px;
    }

    @media (max-width: 1200px) {
        .validation img {
            width: 100%;
            margin-top: 32px;
        }
    }

    @media (max-width: 768px) {
        #Final-section {
            padding: 64px 0;
        }
        .final-pitch {
            margin-bottom: 64px;
        }
        .final-pitch img {
            margin-bottom: 64px;
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
