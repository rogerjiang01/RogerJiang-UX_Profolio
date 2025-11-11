<template>
    <article class="persona-card">
        <div class="row g-3 align-items-center" :class="reverse ? 'flex-row-reverse' : ''">
            <div class="persona-img col-12 col-lg-6">
                <!-- 圖片位置（請把檔案放到 /public/images/reframe/ ）-->
                <img :src="imgSrc" :alt="imgAlt" class="img-fluid" />
            </div>

            <div class="persona-content col-12 col-lg-6 px-4">
                <h6 class="persona-title">{{ title }}</h6>
                <p class="persona-description" v-html="description"></p>

                <blockquote v-if="quote" class="blockquote mb-0">
                    <h5 class="persona-quote mb-4">{{ quote }}</h5>
                    <p v-if="quoteAuthor" class="blockquote-footer">{{ quoteAuthor }}</p>
                </blockquote>
            </div>
            <div class="persona-card-insight">
                <h6 class="persona-insight">
                    Insight：
                    <span v-if="insight">{{ insight }}</span>
                </h6>
            </div>
        </div>
    </article>
</template>

<script setup>
    const props = defineProps({
        title: { type: String, required: true },
        description: { type: String, default: "" },
        quote: { type: String, default: "" },
        quoteAuthor: { type: String, default: "" },
        insight: { type: String, default: "" },
        imgSrc: { type: String, required: true },
        imgAlt: { type: String, default: "" },
        reverse: { type: Boolean, default: false },
    });
</script>
<style scoped>
    .persona-card {
        background: var(--white, #fff);
        border-radius: 16px;
        padding: 32px 24px;
        margin: 64px 0;
    }
    .persona-quote {
        font-style: italic;
        color: var(--main-700);
    }
    .blockquote-footer {
        color: var(--gray-600);
    }
    .persona-insight {
        color: var(--gray-700);
    }
    .persona-insight span {
        font-weight: 500;
    }
    .persona-card-insight {
        margin-top: 36px;
    }
    @media (max-width: 1200px) {
        .persona-img {
            padding: 0 24px;
        }
        .persona-content {
            margin-top: 24px;
        }
        .persona-card-insight {
            margin-top: 32px;
            padding: 0 20px;
        }
    }
</style>
