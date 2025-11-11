<template>
    <section id="Hero">
        <div class="hero-content container">
            <div class="intro">
                <div class="intro-heading">
                    <h1 class="name">Roger Jiang</h1>
                    <h4 class="title">UX Designer</h4>
                </div>

                <div class="intro-description">
                    <p class="project-text">
                        <span>近期參與</span>
                        <span class="project-bold">
                            <NuxtLink class="case-link" to="/reframe">Reframe</NuxtLink>
                        </span>
                        <span>一站式健身飲食平台設計專案。</span>
                    </p>
                    <p class="project-text">
                        <span>過去有</span>
                        <span class="project-bold">
                            <NuxtLink class="case-link" to="/streetsnap">StreetSnap</NuxtLink>
                        </span>
                        、
                        <span class="project-bold">
                            <NuxtLink class="case-link" to="/interior">Interior切版練習</NuxtLink>
                        </span>
                        與
                        <span class="project-bold">
                            <NuxtLink class="case-link" to="/cafe_menu">蒔在菜單設計</NuxtLink>
                        </span>
                        。
                    </p>
                </div>

                <div class="about-section">
                    <p class="about-text">
                        我喜歡從人與環境的互動中尋找設計的意義，設計出能真實地回應使用者生活的作品。 👉
                        <NuxtLink class="about-link" to="/about">關於我</NuxtLink>
                    </p>
                </div>

                <div class="social-links">
                    <a href="https://www.linkedin.com/in/rogerjiang-uxdesigner" class="social-icon" aria-label="LinkedIn" v-html="linkedinSvg" target="_blank" rel="noopener noreferrer"></a>
                    <a href="http://www.behance.net/rogerjiang-uxer" class="social-icon" aria-label="Behance" v-html="behanceSvg" target="_blank" rel="noopener noreferrer"></a>
                    <a href="https://www.instagram.com/rogerjiang01?igsh=MWI1eTNuZW83cmd6aA%3D%3D&utm_source=qr" class="social-icon" aria-label="Instagram" v-html="instagramSvg" target="_blank" rel="noopener noreferrer"></a>
                </div>
            </div>

            <div class="portrait-container">
                <div class="portrait-frame">
                    <div class="portrait-image">
                        <img src="/images/portrait.png" alt="Roger Jiang portrait" />
                    </div>
                </div>

                <div class="portrait-decoration">
                    <div class="logo-overlay">
                        <img src="/public/images/LOGO2.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    import { ref } from "vue";

    const linkedinSvg =
        ref(`<svg fill="none" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg"><path d="M33.4286 0H2.56339C1.14911 0 0 1.16518 0 2.59554V33.4045C0 34.8348 1.14911 36 2.56339 36H33.4286C34.8429 36 36 34.8348 36 33.4045V2.59554C36 1.16518 34.8429 0 33.4286 0ZM10.8804 30.8571H5.54464V13.6768H10.8884V30.8571H10.8804ZM8.2125 5.14286C9.03301 5.14286 9.81992 5.46881 10.4001 6.049C10.9803 6.62919 11.3063 7.41609 11.3063 8.23661C11.3063 9.05712 10.9803 9.84403 10.4001 10.4242C9.81992 11.0044 9.03301 11.3304 8.2125 11.3304C7.39199 11.3304 6.60508 11.0044 6.02489 10.4242C5.4447 9.84403 5.11875 9.05712 5.11875 8.23661C5.11875 7.41609 5.4447 6.62919 6.02489 6.049C6.60508 5.46881 7.39199 5.14286 8.2125 5.14286ZM30.8813 30.8571H25.5455V22.5C25.5455 20.5071 25.5054 17.9438 22.7732 17.9438C19.9929 17.9438 19.567 20.1134 19.567 22.3554V30.8571H14.2313V13.6768H19.35V16.0232H19.4223C20.1375 14.6732 21.8813 13.2509 24.4768 13.2509C29.8768 13.2509 30.8813 16.8107 30.8813 21.4393V30.8571Z" fill="#0F8CA0"/>
                        </svg>`);
    const behanceSvg =
        ref(`<svg fill="none" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg"><path d="M39.7363 11.9871H28.7115V9.34688H39.7363V11.9871ZM21.3727 22.8156C22.0826 23.8785 22.4375 25.1674 22.4375 26.6823C22.439 28.2497 22.0341 29.6541 21.2228 30.8956C20.7226 31.7012 20.0644 32.4052 19.285 32.9682C18.3731 33.6317 17.3159 34.0854 16.1943 34.2946C14.9219 34.5387 13.6271 34.6576 12.3298 34.6496H0V8.25H13.2226C16.5536 8.30314 18.9147 9.23422 20.3123 11.0624C21.1486 12.1848 21.566 13.5289 21.5645 15.0949C21.566 16.7062 21.1442 18.0015 20.2991 18.9808C19.8288 19.5306 19.1344 20.0316 18.2158 20.4837C19.6091 20.9726 20.6629 21.7499 21.3727 22.8156ZM6.31591 18.6598H12.1072C13.2976 18.6598 14.2624 18.4415 15.0017 18.005C15.7424 17.5686 16.1127 16.7948 16.1127 15.6837C16.1127 14.4536 15.6226 13.6416 14.6423 13.2476C13.7973 12.9741 12.72 12.8366 11.4105 12.8352H6.31371L6.31591 18.6598ZM16.6705 26.3061C16.6705 24.935 16.0885 23.9869 14.9289 23.4788C14.2779 23.1883 13.3652 23.0388 12.1909 23.0303H6.31371V30.0665H12.1027C13.2888 30.0679 14.2125 29.9135 14.8738 29.6031C16.0716 29.0292 16.6712 27.9301 16.6727 26.3061H16.6705ZM43.8256 22.0121C43.9608 22.8765 44.0174 24.1279 43.9954 25.7661H29.7168C29.7947 27.6651 30.4781 28.9951 31.767 29.7562C32.5459 30.2309 33.4879 30.4676 34.5931 30.4662C35.7586 30.469 36.7065 30.1792 37.437 29.5967C37.8352 29.2864 38.1865 28.8541 38.4907 28.3H43.7242C43.589 29.4224 42.9563 30.5618 41.8261 31.7182C40.0713 33.5577 37.6126 34.4781 34.4498 34.4796C31.8412 34.4796 29.5382 33.7037 27.5409 32.1519C25.5495 30.5972 24.5531 28.0719 24.5516 24.5757C24.5516 21.2964 25.451 18.7838 27.2499 17.0378C29.0576 15.2862 31.39 14.4147 34.2647 14.4147C35.9695 14.4147 37.5068 14.7094 38.8765 15.299C40.2433 15.8885 41.372 16.8217 42.2626 18.0986C43.0651 19.2238 43.5868 20.5276 43.8278 22.0099L43.8256 22.0121ZM38.6737 22.5031C38.5782 21.1894 38.1218 20.1931 37.3047 19.5143C36.4905 18.8341 35.4771 18.4933 34.2647 18.4918C32.9464 18.4947 31.9272 18.856 31.207 19.576C30.4795 20.2916 30.0239 21.2674 29.8402 22.5031H38.6737Z" fill="#0F8CA0"/>
                        </svg>`);
    const instagramSvg =
        ref(`<svg fill="none" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M30.68 6.92C30.2053 6.92 29.7413 7.06076 29.3466 7.32447C28.952 7.58819 28.6443 7.96302 28.4627 8.40156C28.281 8.8401 28.2335 9.32266 28.3261 9.78822C28.4187 10.2538 28.6473 10.6814 28.9829 11.0171C29.3186 11.3527 29.7462 11.5813 30.2118 11.6739C30.6773 11.7665 31.1599 11.719 31.5984 11.5373C32.037 11.3557 32.4118 11.048 32.6755 10.6534C32.9392 10.2587 33.08 9.79467 33.08 9.32C33.08 8.68348 32.8271 8.07303 32.3771 7.62294C31.927 7.17286 31.3165 6.92 30.68 6.92ZM39.88 11.76C39.8407 10.1006 39.53 8.4589 38.96 6.9C38.4538 5.5651 37.662 4.35692 36.64 3.36C35.6496 2.33485 34.4391 1.54835 33.1 1.06C31.5453 0.472322 29.9017 0.15442 28.24 0.12C26.12 0 25.44 0 20 0C14.56 0 13.88 0 11.76 0.12C10.0983 0.15442 8.45469 0.472322 6.9 1.06C5.56396 1.55451 4.35473 2.34017 3.36 3.36C2.33485 4.35036 1.54835 5.56088 1.06 6.9C0.472322 8.45469 0.15442 10.0983 0.12 11.76C0 13.88 0 14.56 0 20C0 25.44 0 26.12 0.12 28.24C0.15442 29.9017 0.472322 31.5453 1.06 33.1C1.54835 34.4391 2.33485 35.6496 3.36 36.64C4.35473 37.6598 5.56396 38.4455 6.9 38.94C8.45469 39.5277 10.0983 39.8456 11.76 39.88C13.88 40 14.56 40 20 40C25.44 40 26.12 40 28.24 39.88C29.9017 39.8456 31.5453 39.5277 33.1 38.94C34.4391 38.4516 35.6496 37.6651 36.64 36.64C37.6645 35.6452 38.4567 34.4364 38.96 33.1C39.53 31.5411 39.8407 29.8994 39.88 28.24C39.88 26.12 40 25.44 40 20C40 14.56 40 13.88 39.88 11.76ZM36.28 28C36.2658 29.2696 36.0359 30.5275 35.6 31.72C35.2807 32.5904 34.7678 33.3768 34.1 34.02C33.4509 34.6805 32.6662 35.1923 31.8 35.52C30.6075 35.9559 29.3496 36.1858 28.08 36.2C26.08 36.3 25.34 36.32 20.08 36.32C14.82 36.32 14.08 36.32 12.08 36.2C10.7617 36.2259 9.4489 36.0229 8.2 35.6C7.37237 35.2547 6.62381 34.7443 6 34.1C5.33618 33.4575 4.82969 32.6704 4.52 31.8C4.03009 30.5908 3.7592 29.3041 3.72 28C3.72 26 3.6 25.26 3.6 20C3.6 14.74 3.6 14 3.72 12C3.72729 10.702 3.96428 9.41544 4.42 8.2C4.77209 7.35582 5.31253 6.60332 6 6C6.60585 5.31038 7.35726 4.7639 8.2 4.4C9.4188 3.95896 10.7039 3.72899 12 3.72C14 3.72 14.74 3.6 20 3.6C25.26 3.6 26 3.6 28 3.72C29.2696 3.73417 30.5275 3.96412 31.72 4.4C32.6289 4.7373 33.4446 5.28569 34.1 6C34.7534 6.61604 35.2652 7.36669 35.6 8.2C36.0449 9.41776 36.275 10.7035 36.28 12C36.38 14 36.4 14.74 36.4 20C36.4 25.26 36.38 26 36.28 28ZM20 9.74C17.9716 9.74395 15.9899 10.3491 14.3053 11.4788C12.6207 12.6086 11.3088 14.2124 10.5353 16.0875C9.76178 17.9626 9.56145 20.0249 9.95959 22.0139C10.3577 24.0028 11.3365 25.8291 12.7722 27.262C14.2078 28.6948 16.036 29.67 18.0257 30.0643C20.0154 30.4586 22.0773 30.2542 23.9509 29.4771C25.8245 28.6999 27.4258 27.3849 28.5523 25.6981C29.6788 24.0113 30.28 22.0284 30.28 20C30.2826 18.6502 30.0184 17.3132 29.5025 16.0659C28.9866 14.8186 28.2291 13.6856 27.2737 12.7321C26.3184 11.7786 25.1839 11.0234 23.9356 10.5099C22.6873 9.99636 21.3498 9.73472 20 9.74ZM20 26.66C18.6828 26.66 17.3951 26.2694 16.2999 25.5376C15.2047 24.8058 14.351 23.7656 13.847 22.5487C13.3429 21.3317 13.211 19.9926 13.468 18.7007C13.7249 17.4088 14.3593 16.2221 15.2907 15.2907C16.2221 14.3593 17.4088 13.7249 18.7007 13.468C19.9926 13.211 21.3317 13.3429 22.5487 13.847C23.7656 14.351 24.8058 15.2047 25.5376 16.2999C26.2694 17.3951 26.66 18.6828 26.66 20C26.66 20.8746 26.4877 21.7406 26.153 22.5487C25.8183 23.3567 25.3278 24.0909 24.7093 24.7093C24.0909 25.3278 23.3567 25.8183 22.5487 26.153C21.7406 26.4877 20.8746 26.66 20 26.66Z" fill="#0F8CA0"/>
                        </svg>`);
    // Replace "..." with the actual path content from your HTML icons (or keep links)
</script>

<style scoped>
    #Hero {
        height: 80vh;
    }

    .hero-content {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 100%;
    }

    .intro {
        width: 52%;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .intro span,
    .intro p {
        font-family: var(--ff-sans);
        font-size: var(--tw-p-size);
        font-style: normal;
        font-weight: var(--tw-p-weight);
        line-height: var(--tw-p-lineheight);
    }

    .intro .title {
        margin: 16px 0;
        color: var(--gray-800);
        font-family: "Open Sans";
        font-weight: 300;
    }

    .intro .project-bold .case-link,
    .intro .about-text .about-link {
        color: var(--main-700);
        text-decoration: none;
        font-weight: 600;
        padding: 2px 4px;
    }

    .portrait-container {
        position: relative;
    }

    .portrait-frame {
        width: calc(320px + 92px);
    }

    .portrait-image {
        width: 320px;
        border-radius: 16px;
        overflow: hidden;
    }

    .portrait-image img {
        width: 100%;
        height: auto;
        display: block;
    }

    .portrait-decoration {
        position: absolute;
        left: 92px;
        bottom: -43px;
        width: 320px;
        height: 422px;
        aspect-ratio: 320/422;
        border-radius: var(--Radius-corner-radius-16, 16px);
        border: 3px solid var(--main-500);
        z-index: -1;
    }

    .logo-overlay {
        position: absolute;
        width: 93px;
        height: 93px;
        aspect-ratio: 1;
        right: 0px;
        bottom: 0px;
    }

    @media (max-width: 1200px) {
        .hero-content {
            gap: 40px;
        }
        .portrait-frame {
            width: calc(240px + 80px);
        }
        .portrait-image {
            width: 240px;
        }
        .portrait-decoration {
            left: 80px;
            bottom: -32px;
            width: 240px;
            height: auto;
            /* aspect-ratio: 220 / 290; */
            border-width: 2px;
        }
        .logo-overlay {
            width: 70px;
            height: 70px;
        }
        .logo-overlay img {
            width: 100%;
            height: 100%;
        }
    }

    @media (max-width: 768px) {
        #Hero {
            height: auto;
            padding: 80px 0;
        }

        .hero-content {
            flex-direction: column;
            gap: 32px;
            align-items: center;
        }

        .intro {
            width: 100%;
            gap: 8px;
        }

        .social-links {
            position: absolute;
            visibility: hidden;
        }

        .portrait-frame {
            width: 320px;
        }

        .portrait-image {
            width: 270px;
            border-radius: 12px;
        }

        .portrait-decoration {
            left: 56px;
            bottom: -32px;
            width: 270px;
            height: auto;
            /* aspect-ratio: 220 / 290; */
            border-width: 2px;
            border-radius: 12px;
        }

        .portrait-container {
            margin-top: 24px;
            margin-bottom: 24px;
        }

        .portrait-decoration .logo-overlay {
            width: 64px;
            height: 64px;
            right: 0px;
            bottom: 0px;
        }
        .logo-overlay img {
            width: 64px;
            height: 64px;
        }
    }
</style>
