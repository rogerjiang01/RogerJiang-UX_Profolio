<template>
    <section id="About_me">
        <div class="about-container container">
            <div class="about-img">
                <img src="/images/about_me.jpg" alt="Portrait" />
            </div>
            <div class="about-text">
                <h3 class="about-title">Hi，我是Roger 👋</h3>
                <p class="about-description">我由工程背景轉向使用者體驗設計，熱衷以觀察與實驗找出人與科技互動的更自然方式。對我來說，設計不是只讓介面好看，而是讓人與系統的對話更順暢、有意義。</p>

                <p class="about-description">
                    這份作品集涵蓋團隊專案與個人練習：與團隊完成的
                    <strong>Reframe</strong>
                    展現完整 UX 流程；個人 side project
                    <strong>Streetsnap</strong>
                    探索互動式街拍；
                    <strong>Interior</strong>
                    強化前端切版能力；為新開咖啡廳設計的
                    <strong>蒔在菜單</strong>
                    則落實於實體情境。
                </p>

                <p class="about-description">我持續在設計與技術之間求平衡，期望以人為本的思維，創造直覺、愉悅且有共鳴的使用體驗。</p>

                <div class="resume">
                    <a href="https://drive.google.com/file/d/1U_of41SUweDr3hmlYyZM8kQNqSzU8-di/view?usp=sharing" class="resume-btn" target="_blank" rel="noopener noreferrer" @click="trackResumeClick">Roger's resume</a>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    const trackResumeClick = () => {
        useTrackEvent("select_content", {
            content_type: "resume_link",
            item_id: "roger_resume",
        });
    };
</script>

<style scoped>
    .about-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 64px;
        margin: 100px auto;
    }

    .about-img img {
        width: 360px;
        border-radius: 8px;
    }

    .about-text {
        display: flex;
        flex-direction: column;
        /* gap: 12px; */
    }
    .about-description strong {
        color: var(--main-700);
    }

    .resume {
        align-self: center;
    }
    .resume-btn {
        background-color: var(--white);
        display: flex;
        padding: 12px 28px;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
        border: 1px solid var(--main-500);
        text-decoration: none;
        color: var(--main-500);
        font-family: var(--ff-sans);
        font-size: 14px;
        transition: all 0.2s ease;
        margin-top: 12px;
        text-transform: uppercase;
    }

    .resume-btn:hover {
        background-color: var(--main-500);
        color: var(--white);
    }

    @media (max-width: 1200px) {
        .about-img img {
            width: 300px;
        }
    }

    @media (max-width: 768px) {
        .about-container {
            display: flex;
            flex-direction: column;
            margin: 64px 0;
        }
        .about-img img {
            width: 100%;
            max-width: 360px;
        }
        .about-text {
            gap: 16px;
            align-items: center;
        }
    }
</style>
