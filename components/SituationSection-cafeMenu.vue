<template>
    <section id="Situation-section" aria-labelledby="situation-title">
        <div class="situation-section-container container">
            <div class="situation-section__header">
                <h3 class="situation-title">THE SITUATION & TASK</h3>
                <h3 class="situation-section__lead">蒔在咖啡是一間即將於2024年4月開始試營運的咖啡廳，店主邀請我為他的店設計菜單。</h3>
                <ScrollRevealImage src="/images/cafe-menu/situation-image.jpg" alt="蒔在咖啡店面照片" custom-class="situation-img" />
            </div>
        </div>

        <div class="situation-intro">
            <div class="situation-intro-container container">
                <p>
                    這是一間以
                    <span>「溫暖的感受、扎實的記憶性、豐富的風味」</span>
                    為理念而誕生的精品咖啡小店，位於台南小巷的一隅。店內氛圍柔和且放鬆，讓每位來訪的客人都能在日常中找到一段恰到好處的寧靜。
                </p>
                <p>
                    主要提供店主拿手的
                    <span>「精品手沖咖啡」</span>
                    與女主人用心的
                    <span>「創意風味甜點」</span>
                    ，每一杯與每一道甜點都希望成為客人腦海中「喝過、吃過就忘不了」的記憶。
                </p>
                <p>
                    這裡不是一間只追求風格的咖啡館，而是希望讓人帶著好奇來、帶著溫度走的空間。
                    <span>每一次停留、每一次啜飲，都能成為生活裡一段微小而扎實的美好。</span>
                </p>
            </div>
        </div>
        <template>
            <div class="gallery-section">
                <div class="gallery-window" ref="windowRef">
                    <img class="logo" src="/public/images/cafe-menu/logo-sit_tsai.svg" alt="蒔在咖啡Logo" />
                    <div class="gallery" :style="{ transform: `translateY(${offsetY}px)` }">
                        <img src="/public/images/cafe-menu/situation-gallery-1.jpg" alt="蒔在咖啡店內照片1" />
                        <img src="/public/images/cafe-menu/situation-gallery-2.jpg" alt="蒔在咖啡店內照片2" />
                        <img src="/public/images/cafe-menu/situation-gallery-3.jpg" alt="蒔在咖啡店內照片3" />
                    </div>
                </div>
            </div>
        </template>
    </section>
</template>

<script setup>
    import { ref, onMounted, onUnmounted } from "vue";

    const windowRef = ref(null);
    const offsetY = ref(0);

    const handleScroll = () => {
        if (windowRef.value) {
            // 取得窗戶元素距離視窗頂部的距離
            const rect = windowRef.value.getBoundingClientRect();

            // 計算位移量：
            // 我們希望 .gallery (高度100vh) 的頂部始終貼齊視窗頂部 (0)，
            // 但因為它是放在 .gallery-window 裡面的 absolute，
            // 所以我們要給予負的 top 距離，抵銷掉窗戶的移動。
            offsetY.value = -rect.top;
        }
    };

    onMounted(() => {
        window.addEventListener("scroll", handleScroll);
        // 初始化一次位置
        handleScroll();
    });

    onUnmounted(() => {
        window.removeEventListener("scroll", handleScroll);
    });
</script>

<style scoped>
    #Situation-section {
        margin: 128px 0;
        scroll-margin-top: 240px; /*  header  */
    }

    .situation-section-container {
        margin-bottom: 128px;
    }

    .situation-title {
        font-size: var(--en-h3-size);
        font-weight: var(--en-h3-weight);
        line-height: var(--en-h3-lineheight);
    }

    .situation-section__lead {
        font-size: var(--tw-h4-size);
        font-weight: var(--en-h4-weight);
        line-height: var(--tw-h4-lineheight);
        margin-top: 32px;
    }

    :deep(.situation-img) {
        /* 使用 deep 傳入 ScrollRevealImage 的 custom-class */
        width: 100%;
        height: auto;
        margin-top: 48px;
    }
    .situation-intro {
        background-color: var(--cafeMenu-100);
        padding: 100px 0;
    }
    .situation-intro-container {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }
    .situation-intro-container p {
        font-family: var(--ff-sans);
        font-size: var(--tw-h5-size);
        font-weight: var(--tw-h5-weight);
        line-height: var(--tw-h5-lineheight);
        font-style: italic;
        color: var(--cafeMenu-800);
    }
    .situation-intro-container p span {
        color: var(--cafeMenu-500);
    }

    /* Gallery */
    /* 這是固定在螢幕中的三張照片 */
    /* 區塊間距 */
    .gallery-section {
        padding: 50px 0; /* 根據需求調整 */
    }

    /* 窗戶：定義視窗範圍 */
    .gallery-window {
        position: relative;
        width: 100%;
        height: 600px; /* 這裡設定窗戶的高度，不需要 100vh */
        overflow: hidden; /* 關鍵：超出窗戶的部分要隱藏 */
        /* background-color: #f0f0f0; 預備背景色 */
    }
    .gallery-window .logo {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 300px;
        height: auto;
        z-index: 10;
        filter: brightness(0) invert(1);
    }

    /* 內部容器：模擬固定背景 */
    .gallery {
        position: absolute;
        top: 0%;
        /* transform: translate(-50%, 0); */
        width: 100%;
        height: 100vh; /* 關鍵：讓容器高度等於視窗高度，方便置中 */

        /* Flex 排版 (依照您的需求) */
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 12px;

        /* 優化效能 */
        will-change: transform;
        pointer-events: none; /* 讓圖片不干擾滑鼠事件，視需求開啟或關閉 */
    }

    /* 圖片樣式 */
    .gallery img {
        max-width: 100%; /* 根據需求調整圖片大小 */
        height: auto;
        object-fit: cover;
    }

    /* RWD 調整 (選用) */
    @media (max-width: 1200px) {
        .gallery {
            top: 50%;
            transform: translate(-50%, 0);
            /* Flex 排版 */
            display: flex;
            justify-content: center;
            gap: 12px;
        }
        .gallery img {
            max-width: 40%; /* 根據需求調整圖片大小 */
            height: 60vh;
            object-fit: cover;
        }
        .gallery-window {
            height: 500px; /* 調整手機版窗戶高度 */
        }
    }
    @media (max-width: 768px) {
        .gallery {
            top: 0%;
            /* transform: translate(-50%, 0); */
            display: flex;
            flex-direction: column; /* 手機版改為垂直排列 */
            justify-content: center;
            gap: 12px;
        }
        .gallery img {
            max-width: 100%; /* 根據需求調整圖片大小 */
            height: auto;
            object-fit: cover;
        }
        .gallery-window {
            height: 80vh; /* 調整手機版窗戶高度 */
        }
        .gallery-window .logo {
            width: 200px;
        }
    }

    @media (max-width: 768px) {
        #Situation-section {
            margin: 64px 0;
            scroll-margin-top: 120px;
        }

        .situation-section-container {
            margin-bottom: 64px;
        }
        .situation-description {
            padding: 0;
        }
    }
</style>
