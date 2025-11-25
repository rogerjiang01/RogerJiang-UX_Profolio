<template>
    <section id="Action-section" aria-labelledby="action-title">
        <!-- 章節標題 -->
        <div class="container">
            <div class="action-title-container">
                <h3 class="action-title">The Action</h3>
                <p class="lead">到店內實地觀察後，我一邊與店主確認風格調性，一邊歸納空間的視覺元素與情緒氛圍。</p>
                <p class="lead">
                    店內大量使用木質桌椅、木門與窗框，整體空間給人溫暖、放鬆、自然的感受。 因此，我
                    <span>以「木質感」作為視覺主軸</span>
                    ，並選擇具有手寫感的字體來呼應咖啡廳的溫度與人情味。
                </p>
                <ScrollRevealImage src="/images/cafe-menu/action-image.jpg" alt="蒔在咖啡店內裝潢照片" custom-class="action-image" />
            </div>
        </div>
        <article class="design-process">
            <div class="process-container container">
                <p>與店主討論，確認菜單最終將以「木製底板＋印刷紙張」的形式呈現，因此我需專注於版面佈局、色彩設定與視覺風格是否與木質載體協調一致。</p>
                <div class="process-img wood-board">
                    <img src="/public/images/cafe-menu/wood-board1.jpg" alt="木製底板圖片1" />
                    <img src="/public/images/cafe-menu/wood-board2.jpg" alt="木製底板圖片2" />
                </div>
            </div>
            <div class="process-container container">
                <p>
                    首先，我整理店主提供的所有品項資料，建立資訊架構，並依照實際印刷紙張尺寸開始製作線框（wireframe）。在這階段，我特別注意
                    <strong>資訊層級與閱讀節奏</strong>
                    ，確保消費者能在第一眼就快速理解內容。完成初版排版後，我與店主逐項確認內容與位置，建立後續視覺設計的基礎。
                </p>
                <div class="process-img menu-shadow">
                    <img src="/public/images/cafe-menu/typesetting1.png" alt="排版過程圖片1" />
                    <img src="/public/images/cafe-menu/typesetting2.png" alt="排版過程圖片2" />
                </div>
            </div>
            <div class="process-container container">
                <p>
                    這次的設計中，我加入一個很喜歡的小巧思：整份菜單的各頁故意設計成「不同的長度」，越上層的紙張裁切越短，而露出的下方區塊則放入小巧的圖示，例如咖啡、甜點、花茶等。這個做法讓客人不用完全翻頁就能提前辨識分類，
                    <strong>使菜單更具導覽性</strong>
                    ，也讓翻閱過程更直覺。這個想法源自我在排列文字內容時，觀察到分類資訊如果能提前呈現，就能讓使用者更快找到目標品項。
                </p>
                <div class="process-img menu-shadow">
                    <img src="/public/images/cafe-menu/nice_touch1.png" alt="設計小巧思圖片1" />
                    <img src="/public/images/cafe-menu/nice_touch2.png" alt="設計小巧思圖片2" />
                </div>
            </div>
            <div class="process-container container">
                <p>
                    在視覺風格上，我挑選了多組與「木質氛圍」協調的色票供店主選擇，包含
                    <strong>溫暖的黃色、低彩度黃綠色與咖啡色系</strong>
                    。
                </p>
                <div class="process-img menu-shadow">
                    <img src="/public/images/cafe-menu/color-select1.png" alt="顏色挑選圖片1" />
                    <img src="/public/images/cafe-menu/color-select2.png" alt="顏色挑選圖片2" />
                    <img src="/public/images/cafe-menu/color-select3.png" alt="顏色挑選圖片3" />
                </div>
            </div>
        </article>
        <article class="final-version">
            <div class="process-container container">
                <p>
                    在多輪調整細節後，除了確認使用帶有
                    <strong>溫暖復古感的黃色</strong>
                    ，在圖示上我選用手繪感的風格，讓整體菜單的調性更加一致。與店主討論後確定這個版本是最終版，並且將攜帶這個檔案前往印刷。
                </p>
                <div class="final-images menu-shadow">
                    <ScrollRevealImage src="/images/cafe-menu/menu_final1.png" alt="最終版菜單圖片1" custom-class="final-img" />
                    <ScrollRevealImage src="/images/cafe-menu/menu_final2.png" alt="最終版菜單圖片2" custom-class="final-img" />
                    <ScrollRevealImage src="/images/cafe-menu/menu_final3.png" alt="最終版菜單圖片3" custom-class="final-img" />
                    <ScrollRevealImage src="/images/cafe-menu/menu_final4.png" alt="最終版菜單圖片4" custom-class="final-img" />
                </div>
            </div>
        </article>
    </section>
</template>

<script setup></script>

<style scoped>
    #Action-section {
        margin: 100px 0;
    }
    /* 章節標題 */
    .action-title-container {
        margin-bottom: 96px;
    }
    .action-title {
        font-weight: var(--en-h4-weight);
        margin-bottom: 32px;
        text-align: center;
    }
    .lead span {
        color: var(--cafeMenu-500);
    }
    :deep(.action-image) {
        margin-top: 48px;
        width: 100%;
        height: auto;
        /* box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); */
    }

    article {
        margin: 128px 0;
    }

    /* Process */
    .process-container {
        margin-bottom: 96px;
        /* text-align: center; */
    }

    .process-container .process-img {
        display: flex;
        justify-content: center;
        gap: 24px;
        margin-top: 32px;
        flex-wrap: wrap;
    }

    .menu-shadow img {
        box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.1);
    }

    .process-img img {
        width: 300px;
        height: auto;
        display: block;
    }

    /* Final version */
    .final-images {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 24px;
        margin-top: 32px;
    }

    :deep(.final-img) {
        width: 100%;
        height: auto;
        display: block;
    }

    @media (max-width: 768px) {
        article {
            margin: 64px 0;
        }
        .process-container {
            margin-bottom: 64px;
        }
        .wood-board {
            flex-wrap: nowrap;
        }
        .wood-board img {
            width: 40%;
            height: auto;
            display: block;
        }
        .final-images {
            grid-template-columns: 1fr;
        }
    }
</style>
