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
                <p class="lead">為了了解街拍攝影者真正卡住的點，我透過行為地圖與訪談找出痛點，並整理洞察後建立使用者旅程地圖，進一步找出 Streetsnap 的設計機會與價值主張。</p>
            </div>
        </div>
        <!-- 行為地圖與六個痛點 -->
        <article class="behavior-map-container" aria-labelledby="bm-title">
            <div class="container">
                <h4 class="bm-title article-titles mb-2">行為地圖</h4>
                <p class="mb-3">透過行為地圖，我把「街拍」拆成五個階段：「靈感探索 → 拍攝前準備 → 現場拍攝 → 回家整理 → 回顧作品」，並發現每個階段都卡在不一樣卻彼此相關的問題點：</p>
                <ol>
                    <li>
                        <strong>不知道該去哪裡街拍</strong>
                        ：地圖上都是觀光景點，但他們想拍的是有特色的城市鄉村、節慶活動或是特定氛圍的場景，卻找不到相關資訊。
                    </li>
                    <li>
                        <strong>拍攝當下毫無靈感</strong>
                        ：在拍攝現場時，經常沒有拍攝主題或構圖靈感，沒有方向的進行拍攝導致拍了很多照片卻沒有滿意的作品。
                    </li>
                    <li>
                        <strong>不知道如何應付天氣</strong>
                        ：街拍與當下的光影息息相關，然而陰天會讓攝影師卻步，不願意在天氣不佳時出門拍照。
                    </li>
                    <li>
                        <strong>不知道當地對攝影的接納程度</strong>
                        ：當攝影師來到一個新地點時，經常不確定當地居民是否接受街拍行為，導致拍攝時感到不自在。
                    </li>
                </ol>
                <p class="mt-4">
                    「基於初步的行為地圖觀察，我的原始假設是：
                    <strong>只要解決了『地點、天氣、人際界線』這些外部摩擦力，攝影師就能順利產出好作品</strong>
                    。」
                </p>
                <!-- <p class="caption">＊內容引用研究文件行為地圖整理結果。:contentReference[oaicite:1]{index=1}</p> -->
            </div>
        </article>

        <!-- 訪談簡介 -->
        <article class="interviews-intro-container gray-bg-container mb-4">
            <div class="container">
                <h4 class="interviews-intro-title article-titles">訪談與人物誌</h4>
                <p>透過行為地圖拆解街拍攝影師的日常後，我帶著訪談大綱深入與不同攝影背景的攝影師對話，並且利用親和圖進行歸納，原本零散的抱怨收斂為三個核心痛點：</p>
                <ul class="interviews-context">
                    <li>
                        <strong>拍攝規劃的阻礙：</strong>
                        問題不在於沒有靈感，而在於無法將抽象的概念轉化為具體的執行計畫。他們缺乏的是將靈感「落地」的引導，導致拍攝地點與手法千篇一律。
                    </li>
                    <li>
                        <strong>沒有整理的散落靈感：</strong>
                        靈感與參考圖散落在不同的社群平台，缺乏系統化的整理邏輯。這導致使用者擁有的只是一堆「好看的碎片」，而非可供調用的「風格資料庫」，創作養分無法累積。
                    </li>
                    <li>
                        <strong>缺乏成就感的累積：</strong>
                        由於整理照片的過程繁瑣（分類、挑選、修圖），加上缺乏有效的展示與回饋機制，導致「拍攝」這個行為沒有形成正向的回饋循環。未經整理的作品躺在硬碟裡，沒有成為成就感來源。
                    </li>
                </ul>
                <div class="row align-items-center g-4 mb-5">
                    <div class="col-12 col-md-6"><img src="/images/streetsnap/affinity-mapping1.png" alt="affinity map" class="img-fluid pointer" @click="openLightbox('/images/streetsnap/affinity-mapping1.png', 'affinity map')" /></div>
                    <div class="col-12 col-md-6"><img src="/images/streetsnap/affinity-mapping2.png" alt="affinity map 2" class="img-fluid pointer" @click="openLightbox('/images/streetsnap/affinity-mapping2.png', 'affinity map 2')" /></div>
                </div>

                <!-- Persona 卡片（使用可重用的 PersonaCard）-->
                <div class="personas mb-5">
                    <PersonaCard title="失去目標的初階街拍者" :description="`剛接觸到街拍，身邊沒有拍照的朋友，想找新的街拍地點但網路資訊零碎且重複。希望能拍到不同風格作品。`" img-src="/images/streetsnap/persona.png" img-alt="林雯" quote="「我不知道接下來還可以去哪裡拍照，網路上的資料好少又好不準確。」" userStory="身為初階接拍攝影師，我需要更容易的找到合適的街拍地點，這樣我就能讓攝影作品更加豐富" />

                    <PersonaCard title="創作低潮的專業攝影師" :description="`攝影是熱情的出口，但近期感到停滯，回顧這陣子的照片覺得自己正在走下坡，找不到攝影靈感與方向。`" img-src="/images/streetsnap/persona2.png" img-alt="林雯" quote="「有很多時候我完全不想碰相機。…動機不是永續資源，會枯竭。」" userStory="身為一名渴望突破的街拍攝影師，我希望嘗試回顧過去的照片，從中找到屬於自己的新風格，這樣我就能持續創作並享受攝影的樂趣。" :reverse="true" />
                </div>
            </div>
        </article>
        <!-- Insight -->
        <article class="insights-container">
            <div class="container">
                <h4 class="insights-title article-titles">洞察</h4>
                <p>
                    當我帶著「解決地點與天氣問題」的假設進入訪談後，我卻發現一個有趣的現象：即使在天氣完美、地點明確的情況下，許多受訪者依然拍不出滿意的作品，甚至根本不想出門。外部阻力（如天氣、地圖）只是表層的藉口；
                    <strong>真正的阻力來自內部的『創作低潮』與『回饋斷層』。</strong>
                </p>
                <div class="side-line-box">
                    <p class="insights-context">
                        「我原本想做一個『街頭攝影攻略指南』，但使用者真正需要的是一個
                        <strong>『策展人與引導者』</strong>
                        。街拍的痛點不是『路徑』的指引，而是『正向回饋』的提升。這驅使我重新定義了設計目標：
                        <strong>如何透過系統化的整理與回饋，修復這個斷裂的創作迴路？</strong>
                        」
                    </p>
                </div>
            </div>
        </article>
        <!-- 使用者旅程地圖 -->
        <article class="gray-bg-container mt-4">
            <div class="journey-map-container">
                <div class="container">
                    <h4 class="journey-map-titles article-titles">發想流程</h4>
                    <p>將洞察帶入使用者旅程地圖 (User Journey Map) 後，我標記出了使用者情緒最低落的三個階段：『拍攝前的迷惘』、『拍攝後的整理惰性』以及『長期缺乏回饋的孤獨感』。基於這些機會點，我發想並收斂出 5 個 MVP 核心功能，旨在打造一個完整的創作回饋循環。</p>

                    <div class="row g-2 mt-5 justify-content-center">
                        <div class="col-12 col-md-6 row justify-content-center mb-4">
                            <img src="/images/streetsnap/journey-map1.png" alt="企劃書1" class="img-fluid pointer" @click="openLightbox('/images/streetsnap/journey-map1.png', '企劃書1')" />
                        </div>
                        <div class="col-12 col-md-6 row justify-content-center mb-4">
                            <img src="/images/streetsnap/journey-map2.png" alt="企劃書2" class="img-fluid pointer" @click="openLightbox('/images/streetsnap/journey-map2.png', '企劃書2')" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="MVP-container">
                <!-- <div class="container"> -->
                <div class="MVP-header container">
                    <h4 class="MVP-titles article-titles" ref="mvpTitle">MVP 核心功能</h4>
                </div>

                <!-- 可橫向滑動的卡片列 -->
                <div ref="track" class="MVP-card-track" :style="{ paddingLeft: trackPadding + 'px', scrollPaddingLeft: trackPadding + 'px' }">
                    <mvpCard img="images/streetsnap/mvp-inspiration.png" img-alt="mvp-1" eyebrow="Feature 01" title="靈感任務圖卡" :description="['結合遊戲化機制，系統隨機指派如「夕陽剪影」、「尋找紅色的物體」等具體任務。', '透過「限制」來激發創意，讓使用者不再漫無目的，而是帶著「破關」的心態上街。']" />

                    <mvpCard img="images/streetsnap/mvp-map.png" img-alt="mvp-2" eyebrow="Feature 02" title="街拍地圖" :description="['這不僅是導航，而是「靈感地圖」。地圖上可顯示篩選後的照片及其位置，並結合任務圖卡。', '解決「去哪拍」的焦慮，同時提供當地的拍攝範例作為參考。']" />

                    <mvpCard img="images/streetsnap/mvp-filter.png" img-alt="mvp-3" eyebrow="Feature 03" title="作品瀏覽" :description="['建立基於「攝影要素」的篩選機制，並具備自動推播與推薦功能。', '讓使用者能針對特定風格、技巧、構圖，進行針對性的觀摩學習。']" />

                    <mvpCard img="images/streetsnap/mvp-portfolio.png" img-alt="mvp-4" eyebrow="Feature 04" title="個人攝影集" :description="['提供自由的分類與排版功能，讓作品如個人攝影集呈現。', '讓 App 不只是工具，而是攝影師的「數位策展廳」，滿足自我實現的需求。']" />
                </div>
                <div class="container">
                    <div class="MVP-nav">
                        <button type="button" class="MVP-nav-btn" aria-label="Scroll left" @click="scroll('left')">
                            <svg viewBox="0 0 640 640" fill="currentColor"><path d="M201.4 297.4C188.9 309.9 188.9 330.2 201.4 342.7L361.4 502.7C373.9 515.2 394.2 515.2 406.7 502.7C419.2 490.2 419.2 469.9 406.7 457.4L269.3 320L406.6 182.6C419.1 170.1 419.1 149.8 406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3L201.3 297.3z" /></svg>
                        </button>
                        <button type="button" class="MVP-nav-btn" aria-label="Scroll right" @click="scroll('right')">
                            <svg viewBox="0 0 640 640" fill="currentColor"><path d="M438.6 342.6C451.1 330.1 451.1 309.8 438.6 297.3L278.6 137.3C266.1 124.8 245.8 124.8 233.3 137.3C220.8 149.8 220.8 170.1 233.3 182.6L370.7 320L233.4 457.4C220.9 469.9 220.9 490.2 233.4 502.7C245.9 515.2 266.2 515.2 278.7 502.7L438.7 342.7z" /></svg>
                        </button>
                    </div>
                </div>
                <!-- </div> -->
            </div>
        </article>
        <ImageLightbox :show="lightboxOpen" :image="lightboxImage" :alt="lightboxAlt" @update:show="(val) => (lightboxOpen = val)" @close="onLightboxClosed" />
    </section>
</template>

<script setup>
    import { ref, onMounted, onUnmounted } from "vue";
    import PersonaCard from "~/components/PersonaCard.vue";

    import ImageLightbox from "~/components/ImageLightbox.vue";

    import mvpCard from "~/components/mvpCard.vue";

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

    const track = ref(null);

    const scroll = (dir) => {
        const el = track.value;
        if (!el) return;
        const firstCard = el.querySelector(".mvp-card");
        const gap = 24;
        const amount = firstCard ? firstCard.offsetWidth + gap : el.clientWidth * 0.8;

        el.scrollBy({
            left: dir === "left" ? -amount : amount,
            behavior: "smooth",
        });
    };

    // --- Dynamic Alignment Logic ---
    const mvpTitle = ref(null);
    const trackPadding = ref(20); // Default fallback

    const updateTrackPadding = () => {
        if (mvpTitle.value) {
            const rect = mvpTitle.value.getBoundingClientRect();
            // Calculate distance from left viewport edge
            trackPadding.value = rect.left;
        }
    };

    let resizeObserver = null;

    onMounted(() => {
        updateTrackPadding();
        window.addEventListener("resize", updateTrackPadding);
    });

    onUnmounted(() => {
        window.removeEventListener("resize", updateTrackPadding);
    });
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
    .side-line-box {
        border-left: 4px solid var(--main-300);
        padding-left: 16px;
        margin: 64px 0;
    }
    .insights-context {
        font-size: var(--tw-h5-size);
        line-height: 1.8;
    }
    .interviews-context {
        margin-bottom: 40px;
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
    .gray-bg-container {
        padding: 128px 0;
        background-color: var(--gray-100);
    }
    .journey-map-container {
        margin-bottom: 64px;
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
    .MVP-container {
        padding: 80px 0;
        background: #f5f5f7;
    }

    /* 標題＋左右箭頭 */
    .MVP-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        margin-bottom: 36px;
    }

    .MVP-titles {
        margin: 0;
    }

    .MVP-nav {
        display: flex;
        justify-content: end;
        gap: 16px;
    }

    .MVP-nav-btn {
        width: 36px;
        height: 36px;
        border-radius: 999px;
        border: 0;
        background: var(--gray-200);
        color: var(--gray-700);
        font-size: 18px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.2s ease;
    }

    .MVP-nav-btn:hover {
        background-color: #e9e9ee;
        color: var(--gray-800);
    }

    /* 橫向滑動區 */
    .MVP-card-track {
        /* Full width to allow scrolling to the edge */
        width: 100%;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        scroll-behavior: smooth;

        /* Padding left is handled by JS style binding */
        padding-bottom: 32px;
        /* Add right padding specifically for the end of scroll */
        padding-right: 200px;

        display: flex;
        gap: 24px;
    }

    .MVP-card-track > * {
        scroll-snap-align: start;
        flex: 0 0 auto;
    }

    /* 隱藏桌面瀏覽器的捲軸（可依喜好保留） */
    .MVP-card-track::-webkit-scrollbar {
        display: none;
    }
    .MVP-card-track {
        -ms-overflow-style: none;
        scrollbar-width: none;
    }

    @media (max-width: 1200px) {
        .MVP-card-track {
            padding-right: 80px;
        }
    }
    @media (max-width: 768px) {
        .MVP-container {
            padding: 48px 0;
        }

        .MVP-header {
            align-items: flex-end;
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
