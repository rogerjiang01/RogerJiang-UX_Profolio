<template>
    <section id="Problem-section" aria-labelledby="problem-title">
        <div class="the-prompt">
            <div class="container">
                <h4>The Prompt</h4>
                <div class="side-line-box">
                    <p>我很喜歡在城市裡走路、拍照。剛開始街拍時，我以為自己需要的是「更好的相機」或「更厲害的濾鏡」，但越拍越久，我發現真正讓人停下來的，不是器材，而是——不知道下一步要拍什麼、要去哪裡拍、為什麼拍。</p>
                </div>
            </div>
        </div>
        <div class="problem-section-container container">
            <div class="problem-section__header">
                <h3 id="problem-title">THE PROBLEM</h3>
                <h3 class="problem-section__lead">街拍攝影師的創作過程缺乏系統化的回饋與引導，導致創作無法持續、風格難以建立、成就感無法累積。</h3>
            </div>
            <div class="problem-section__points">
                <h5 class="problem-description">在使用者研究中，我訪談了幾位有街拍、旅遊拍照或人像攝影習慣的使用者，並根據他們的現況整理出人物誌。這些人背景不同、器材不同、風格也不同，卻出現了非常一致的卡關點：</h5>
                <!-- <h5 class="problem-bold">城市沒有變難拍，是創作者變得「不知道從哪裡開始」了。</h5> -->
                <ul class="problem-list">
                    <li>不知道想拍的地點</li>
                    <li>找不到靈感、找不到拍攝方向</li>
                    <li>回家整理照片流程繁瑣痛苦</li>
                    <li>低潮期來時完全沒有動力</li>
                </ul>
            </div>
        </div>

        <div class="problem-intro">
            <div class="problem-intro-container container">
                <p>
                    這讓我意識到一件事 —— 街拍不是沒有工具，而是
                    <span>沒有一個理解街拍者日常流程的工具</span>
                    。 現有的工具各自做了一塊：
                </p>
                <ul>
                    <li>Google Map 很會標地點，但看不到「在這裡可以拍出什麼感覺」。</li>
                    <li>IG 很會展示作品，但作品風格的搜索查詢卻經常失準。</li>
                    <li>雲端相簿很會存照片，但很難支援「以創作為單位」的整理與回顧。</li>
                </ul>
                <p>Streetsnap 想做的，是把這幾件事情接回同一條線上： 讓「靈感」、「地點」、「創作行動」變成一個循環，而不是三個彼此分裂的步驟。所以，我不是從「我要做一個很酷的街拍 IG 社群」出發，而是從這個問題開始：</p>
                <p>
                    <span>如果有一個工具，可以讓我今天打開它，就知道： 我要去哪裡、想拍什麼、怎麼開始，那街拍會不會重新變得好玩？</span>
                </p>
                <p>Streetsnap 想讓創作者重新找到「為什麼要出門拍照」的理由。</p>
            </div>
        </div>
    </section>
</template>

<script setup></script>
<style scoped>
    #Problem-section {
        margin-bottom: 128px;
        scroll-margin-top: 240px; /*  header  */
    }

    .the-prompt {
        background-color: var(--gray-100, #f2f2f7);
        padding: 100px 0;
        margin-bottom: 128px;
    }

    .the-prompt h4 {
        font-size: var(--en-h4-size);
        font-weight: var(--en-h4-weight);
        line-height: var(--en-h4-height);
        margin-bottom: 32px;
    }
    .side-line-box {
        border-left: 4px solid var(--gray-600);
        padding-left: 16px;
        /* margin-bottom: 32px; */
    }

    .the-prompt p {
        margin-bottom: 0;
    }

    .problem-section-container {
        margin-bottom: 64px;
    }

    .problem-section__header h3 {
        font-size: var(--en-h3-size);
        font-weight: var(--en-h3-weight);
        line-height: var(--en-h3-height);
    }
    .problem-section__points {
        margin-top: 64px;
        display: flex;
        flex-direction: column;
        gap: 32px;
    }

    .side-line-box p {
        margin-bottom: 0;
    }
    .problem-description {
        color: var(--gray-700);
        /* margin-bottom: 32px; */
    }
    .problem-bold {
        font-family: var(--ff-sans);
        font-size: var(--en-h5-size);
        font-weight: 600;
        line-height: var(--en-h5-height);
        /* margin-bottom: 32px; */
    }
    .problem-section__points ul {
        margin-top: 0;
    }
    .problem-section__points ul li {
        /* list-style: none; */
        font-family: var(--ff-sans);
        font-size: var(--tw-h5-size);
        font-weight: var(--tw-h5-weight);
        line-height: var(--tw-h5-lineheight);
        font-style: normal;
        color: var(--gray-700);
        margin: 16px 0;
    }

    .problem-intro {
        background-color: var(--gray-100, #f2f2f7);
        padding: 100px 0;
    }
    .problem-intro-container {
        display: flex;
        flex-direction: column;
        gap: 32px;
    }
    .problem-intro-container ul {
        margin: 0;
    }
    .problem-intro-container p,
    .problem-intro-container ul li {
        font-family: var(--ff-sans);
        /* font-size: var(--tw-h5-size); */
        font-size: 1.1rem;
        font-weight: var(--tw-h5-weight);
        line-height: var(--tw-h5-lineheight);
        font-style: italic;
        color: var(--gray-800);
    }
    .problem-intro-container p span {
        color: var(--main-700);
    }

    @media (max-width: 768px) {
        #Problem-section {
            margin: 64px 0;
            scroll-margin-top: 120px;
        }

        .problem-section-container {
            margin-bottom: 64px;
        }
        .problem-description {
            padding: 0;
        }
    }
</style>
