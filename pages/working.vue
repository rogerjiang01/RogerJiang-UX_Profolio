<template>
    <section class="text-center py-5">
        <h2>網站正在建置中</h2>
        <p>I'm currently building my portfolio website — Stay tuned.</p>
        <img :src="qr" alt="QR to prototype" style="width: 200px" />
    </section>
</template>

<script setup>
    const qr = "/qr/figma-prototype.png"; // 把 QR 圖放 public/qr/ 下面
</script>
