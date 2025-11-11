<template>
    <section id="Problem-section" aria-labelledby="problem-title">
        <div class="problem-section-container container">
            <div class="problem-section__header">
                <h3 id="problem-title">THE PROBLEM</h3>
                <h3 class="problem-section__lead">許多重視健康與體態的人，因為訓練與飲食記錄分散在不同 App，導致難以持之以恆。</h3>
            </div>
            <div class="problem-section__points">
                <h5 class="problem-description">從不知如何開始的新手，到厭倦繁瑣紀錄的老手，他們都面臨同樣的困擾：</h5>
                <ul class="problem-list">
                    <li>1. 難以在同一平台同時管理訓練與飲食</li>
                    <li>2. 缺乏準確、在地化的食物資料</li>
                    <li>3. 記錄介面繁雜、操作不直覺，降低持續意願</li>
                    <li>4. 缺少明確的進度回饋與激勵機制</li>
                </ul>
            </div>
        </div>

        <div class="problem-intro">
            <div class="problem-intro-container container">
                <p>即使現下有許多健身與飲食相關的app，但仍然沒有整合在一起的平台，且根據調查鮮少有人願意持續使用。</p>
                <p>
                    因此，我與團隊共同合作，並擔任團隊領導者的角色，決定將這個概念付諸實踐—
                    <br />
                    想像一個
                    <span>一站式整合健身與飲食控制 App</span>
                    ，如何為重視健康與體態的人帶來更完善的使用體驗。
                </p>
            </div>
        </div>
    </section>
</template>

<script setup></script>
<style scoped>
    #Problem-section {
        margin: 128px 0;
        scroll-margin-top: 240px; /*  header  */
    }

    .problem-section-container {
        margin-bottom: 128px;
    }

    .problem-section__header h3 {
        font-size: var(--en-h3-size);
        font-weight: var(--en-h3-weight);
        line-height: var(--en-h3-height);
    }
    .problem-section__points {
        margin-top: 64px;
    }
    .problem-description {
        color: var(--gray-700);
        margin-bottom: 28px;
    }
    .problem-section__points ul li {
        list-style: none;
        font-family: var(--ff-sans);
        font-size: var(--tw-h5-size);
        font-weight: var(--tw-h5-weight);
        line-height: var(--tw-h5-lineheight);
        font-style: normal;
        color: var(--gray-700);
        margin: 4px 0;
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
    .problem-intro-container p {
        font-family: var(--ff-sans);
        font-size: var(--tw-h5-size);
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
