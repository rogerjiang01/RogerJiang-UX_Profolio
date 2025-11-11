<template>
    <div class="page-wrapper">
        <!-- 使用 components/Working.vue -->
        <Working img-src="/images/working.svg" img-alt="working picture" title="網站建置中..." description="I'm currently building my portfolio website — Stay tuned." />

        <div class="link-togo">
            <!-- external link 開新分頁 -->
            <a href="https://rogerjiang-portfolio-ux.webflow.io/project/coffee-shop-menu-design" target="_blank" rel="noopener noreferrer">前往 蒔在咖啡-菜單設計 查看作品</a>
        </div>
    </div>
</template>

<script setup>
    import Working from "~/components/Working.vue";
</script>

<style scoped>
    .page-wrapper {
        display: flex;
        flex-direction: column;
        padding: 40px 20px;
        align-items: center;
    }

    /* 你現有的 link 樣式 */
    .link-togo {
        width: 100%;
        text-align: center;
        margin-top: 40px;
    }
    .link-togo a {
        color: var(--main-700);
        font-family: var(--ff-sans);
        font-size: var(--tw-p-size);
        font-weight: var(--tw-p-weight);
        line-height: var(--tw-p-lineheight);
        text-decoration: underline;
    }
</style>
