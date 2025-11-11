<template>
    <div id="app-layout" class="app-layout">
        <Header />
        <main class="site-main">
            <NuxtPage />
        </main>
        <Footer />
    </div>
</template>

<script setup>
    import Header from "~/components/header.vue";
    import Footer from "~/components/footer.vue";
</script>

<style scoped>
    .app-layout {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }
    .site-main {
        flex: 1; /* 這行關鍵：main 會自動撐滿剩餘空間，讓 footer 在底部 */
        display: flex;
        flex-direction: column;
    }
</style>
