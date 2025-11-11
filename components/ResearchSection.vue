<template>
    <section id="Research-section" aria-labelledby="research-title">
        <!-- 章節標題 -->
        <div class="container">
            <div class="research-title-container text-center">
                <h3 class="research-title">
                    <span>研究過程</span>
                    &ensp;
                    <span>Research Process</span>
                </h3>
                <p class="lead">為了釐清使用者在健身與飲食管理上的真實需求，我透過行為地圖與訪談了解痛點，歸納洞察後建立使用者旅程地圖，進一步找出設計介入的機會，並以影響成本矩陣確立 MVP 方向。</p>
            </div>
        </div>
        <!-- 行為地圖與六個痛點 -->
        <article class="behavior-map-container" aria-labelledby="bm-title">
            <div class="container">
                <h4 class="bm-title article-titles mb-2">行為地圖</h4>
                <p class="mb-3">為了更貼近使用者的情境，我透過行為地圖拆解使用者在健身與飲食前後所做的所有行為，再思考每個行為背後潛在的痛點，最後整理出 6 個潛在痛點：</p>
                <div class="bm-list">
                    <ol>
                        <li>飲食紀錄不精確、知識不足</li>
                        <li>缺乏長期規劃與明確方向</li>
                        <li>難以堅持訓練、缺乏即時回饋</li>
                        <li>新手起步困難、資訊過載</li>
                        <li>工具與介面操作不直覺</li>
                        <li>生活行程擠壓、缺乏彈性設計</li>
                    </ol>
                </div>
            </div>
        </article>

        <!-- 訪談簡介 -->
        <article class="interviews-intro-container mb-4">
            <div class="container">
                <h4 class="interviews-intro-title article-titles">訪談</h4>
                <p>我訪談了 5 位正在或曾有健身與飲食控制經驗的使用者，了解他們在實際情境中的行為與面臨的挑戰，以及他們如何因應現況。</p>

                <!-- Frame14: 左右圖 -->
                <div class="mb-5">
                    <div class="row align-items-center g-4">
                        <div class="col-12 col-md-6">
                            <!-- Frame14 - image 2 -->
                            <!-- 圖片路徑：/public/images/reframe/imgImage2.png -->
                            <div class="image-2-wrapper">
                                <img src="/images/reframe/interview-discuss.png" alt="discuss picture" class="img-fluid pointer" @click="openLightbox('images/reframe/interview-discuss.png', 'discuss picture')" />
                            </div>
                        </div>

                        <div class="col-12 col-md-6">
                            <!-- Frame14 - image 1 -->
                            <!-- 圖片路徑：/public/images/reframe/imgImage1.png -->
                            <div class="image-1-wrapper">
                                <img src="/public/images/reframe/interview-question.png" alt="question picture" class="img-fluid pointer" @click="openLightbox('images/reframe/interview-question.png', 'question picture')" />
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Persona 卡片（使用可重用的 PersonaCard）-->
                <div class="personas mb-5">
                    <!-- 初學者（Frame20） -->
                    <PersonaCard
                        title="初學者（剛接觸健身的新手）"
                        :description="`許多剛入門的使用者表示，他們雖然明白飲食紀錄的重要性，但當現有 App 操作複雜、資料庫不完整時，就會失去動力。即便有決心開始健身，他們仍感到「資訊太多、起點太高」，不知道該從哪裡著手。`"
                        img-src="images/reframe/interview1.png"
                        img-alt="初學者示意圖"
                        quote="「我知道該怎麼做，但太麻煩我就懶得記。如果能『拍一下就知道』，我一定每天都會記錄。」"
                        quote-author="受訪者"
                        insight="新手需要更低門檻、明確導向的起始路徑，讓「開始」不再令人焦慮。"
                    />

                    <!-- 有運動基礎者（Frame40） - 右圖為 img1，card 反向排列 -->
                    <PersonaCard
                        title="有運動基礎者（持續訓練中）"
                        :description="`這類使用者通常已具備一定訓練經驗，對飲食與訓練的觀念也較完整。然而他們最大的困擾在於「維持」。繁瑣的手動輸入、缺乏即時回饋，讓他們在過程中失去動力。他們希望 App 能自動化記錄，並提供能量消耗與身體變化的多面向回饋，讓努力可視化。`"
                        img-src="images/reframe/interview2.png"
                        img-alt="有運動基礎者示意圖"
                        quote="「我會記錄，但很難堅持。外食資訊不透明、計算麻煩，就會漸漸放棄。」"
                        quote-author="受訪者"
                        :reverse="true"
                        insight="持續性的關鍵在於「便利」與「回饋」，使用者需要系統主動協助，而非被動輸入。"
                    />

                    <!-- 健身老手（Frame43） -->
                    <PersonaCard
                        title="健身老手（進階與熱衷訓練者）"
                        :description="`對於進階使用者而言，訓練與飲食已成日常習慣，但他們追求的是「效率」與「優化」。他們希望系統能根據目標自動調整計畫，靈活因應時間、設備與體能狀況，甚至能客製化建議。太僵化或過於制式的規劃，反而降低使用意願。`"
                        img-src="images/reframe/interview3.png"
                        img-alt="健身老手示意圖"
                        quote="「我想更精準追蹤數據，但每天算營養素太花時間。希望能有一個幫我省時又能掌控細節的工具。」"
                        quote-author="受訪者"
                        insight="彈性與客製化是提升進階使用者體驗的核心，系統需能自動化運算並智慧調整。"
                    />
                </div>
            </div>
        </article>
        <!-- Insight -->
        <article class="insights-container">
            <div class="container">
                <h4 class="insights-title article-titles">洞察</h4>
                <p>經過使用者訪談後，我從受訪者身上得知雖然健身階段的不同有相異的情境， 但仍能夠歸納出一些相似處：</p>

                <!-- Insight cards grid -->
                <div class="insights-grid">
                    <InsightCard v-for="(item, index) in insights" :key="index" :img="item.img" :alt="item.alt" :description="item.description" :insight="item.insight" />
                </div>
            </div>
        </article>
        <!-- 使用者旅程地圖 -->
        <article class="journey-map-container mt-4">
            <div class="container">
                <h4 class="journey-map-titles article-titles">發想流程</h4>
                <p>我將使用者達成目標的整體流程轉化為一張可視化旅程地圖——使用者旅程地圖，以釐清痛點並找出潛在的設計機會。再將這些機會點透過卡片分類法整理成若干集群，並使用影響成本矩陣收斂出最重要且技術門檻最低的核心功能。</p>

                <!-- Frame27 圖片排列：請把實際檔放 /public/images/reframe/ -->
                <div class="row g-2 mt-5 justify-content-center">
                    <div class="col-12 col-md-6 col-lg-3 row justify-content-center mb-4">
                        <img src="/images/reframe/journey-map1.jpg" alt="企劃書1" class="img-fluid pointer" @click="openLightbox('/images/reframe/journey-map1.jpg', '企劃書1')" />
                    </div>
                    <div class="col-12 col-md-6 col-lg-3 row justify-content-center mb-4">
                        <img src="/images/reframe/journey-map2.jpg" alt="企劃書2" class="img-fluid pointer" @click="openLightbox('/images/reframe/journey-map2.jpg', '企劃書2')" />
                    </div>
                    <div class="col-12 col-md-6 col-lg-3 row justify-content-center mb-4">
                        <img src="/images/reframe/journey-map3.jpg" alt="企劃書3" class="img-fluid pointer" @click="openLightbox('/images/reframe/journey-map3.jpg', '企劃書3')" />
                    </div>
                    <div class="col-12 col-md-6 col-lg-3 row justify-content-center mb-4">
                        <img src="/images/reframe/matrix.png" alt="影響成本矩陣" class="img-fluid pointer" @click="openLightbox('/images/reframe/matrix.png', '影響成本矩陣')" />
                    </div>
                </div>
            </div>
        </article>
        <article class="MVP-container">
            <div class="container">
                <h4 class="MVP-titles article-titles">MVP 核心功能</h4>
                <div class="MVP-card-set">
                    <div class="MVP-card">
                        <h5 class="MVP-description">提供「模板化的訓練菜單」，讓使用者能快速建立訓練計畫；並能「即時修改組數與重量」，讓訓練過程更直覺流暢。</h5>
                    </div>
                    <div class="MVP-card">
                        <h5 class="MVP-description">系統以「各式數據圖」與「體態日誌」呈現個人長期變化，幫助使用者從數據與視覺雙重角度感受成就，激勵持續行動。</h5>
                    </div>
                    <div class="MVP-card">
                        <h5 class="MVP-description">在飲食紀錄上，使用者可透過「拍照或條碼掃描」快速紀錄數據。以「今日飲食報告」與「每週營養師分析」提供飲食上的紀錄和建議，同時提供 AI 食材與食譜建議，讓飲食控制更輕鬆可持續。</h5>
                    </div>
                    <div class="MVP-card">
                        <h5 class="MVP-description">針對初學者，提供「引導式介面」，幫助快速理解與建立規律習慣，並搭配「影片輔助教學」，降低進入門檻並提升使用信心。</h5>
                    </div>
                </div>
            </div>
        </article>
        <ImageLightbox :show="lightboxOpen" :image="lightboxImage" :alt="lightboxAlt" @update:show="(val) => (lightboxOpen = val)" @close="onLightboxClosed" />
    </section>
</template>

<script setup>
    import PersonaCard from "~/components/PersonaCard.vue";

    import InsightCard from "~/components/InsightCard.vue";

    const insights = [
        {
            img: "images/reframe/schedule.png",
            alt: "使用者希望訓練能根據生活調整",
            description: "使用者不喜歡制式的、每天都一樣的訓練。他們希望訓練能根據自己的生活習慣和身體狀況進行調整，例如在沒時間時能有簡短的替代方案。",
            insight: "訓練計畫的設計必須有高度彈性，以適應使用者的不同需求和情境。",
        },
        {
            img: "images/reframe/feedback.png",
            alt: "使用者需要即時、多維度的回饋",
            description: "使用者感到沒有回饋，就會懷疑自己是否在正確的道路上。他們不只關注體重，更希望看到身體圍度、訓練紀錄等數據的變化。",
            insight: "產品不應該只提供單一的數據，而應建立一個全面的回饋系統，讓使用者看到更完整的進展。",
        },
        {
            img: "images/reframe/auto.png",
            alt: "使用者渴望自動化與懶人化的方案",
            description: "使用者不喜歡手動輸入或記錄，尤其是在飲食方面，他們希望能夠透過拍照等簡單方式，讓 App 自動幫他們精準計算熱量和營養素；在訓練上，也希望能自動規劃、不需自己動腦。",
            insight: "便利性是維持使用者持續性的關鍵。",
        },
        {
            img: "images/reframe/beginner.png",
            alt: "新手使用者需要更多引導",
            description: "許多使用者不知道如何開始，資訊過多且分散，擔心走錯方向、白白浪費時間與金錢。",
            insight: "需要一個簡單明確的開始路徑，降低進入門檻。",
        },
    ];

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
    #Research-section {
        margin: 100px 0;
    }
    /* 章節標題 */
    .research-title-container {
        margin-bottom: 96px;
    }
    .research-title {
        font-weight: var(--en-h4-weight);
        margin-bottom: 32px;
    }
    /* 每個container */
    article {
        margin: 128px 0;
    }
    /* 每個--章節標題 */
    .article-titles {
        font-weight: var(--en-h5-weight);
        margin-bottom: 32px;
    }

    /* pointer */
    .pointer {
        cursor: pointer;
    }
    /* 行為地圖 */
    .behavior-map-container {
        margin: 64px 0;
    }
    /* 訪談 */
    .interviews-intro-container {
        padding: 64px 0;
        background-color: var(--gray-100);
    }
    /* 洞察 */
    /* ----- Grid: 手機 1 列，桌機 2 列 ----- */
    /* 使用 CSS Grid 實作（容易控制 gap 與斷點） */
    .insights-grid {
        width: 880px;
        margin: auto;
        display: grid;
        grid-template-columns: repeat(2, 1fr); /* 桌機 2 欄 */
        gap: 24px;
        align-items: stretch;
    }

    /* 斷點：當寬度 >= 768px 時兩欄排列（你想要更寬可改成 992px） */
    @media (max-width: 1200px) {
        .insights-grid {
            width: 100%;
        }
    }

    @media (max-width: 768px) {
        .insights-grid {
            width: 100%;
            grid-template-columns: 1fr; /* 手機單欄 */
            gap: 32px;
        }
    }
    /* MVP */
    .MVP-card-set {
        display: grid;
        grid-template-columns: repeat(2, 1fr); /* 桌機 2 欄 */
        gap: 24px;
        align-items: stretch;
    }
    .MVP-card {
        height: 320px;
        background: var(--main-500);
        border-radius: 8px;
        padding: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .MVP-description {
        font-family: "inter";
        color: var(--white);
        font-weight: 600;
        letter-spacing: 2px;
    }
    @media (max-width: 768px) {
        .MVP-card-set {
            grid-template-columns: 1fr; /* 手機單欄 */
            gap: 32px;
        }
    }

    @media (max-width: 768px) {
        .research-title {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
        }
        .research-title span {
            display: block;
        }
    }
</style>
