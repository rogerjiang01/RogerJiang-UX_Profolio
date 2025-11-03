<template>
    <div>
        <Hero />

        <section id="work" class="works-section container">
            <h2 class="section-title">作品</h2>

            <div class="projects-grid">
                <ProjectCard title="Reframe" description="為重視健康與體態者設計一款一站式整合App，讓健身與飲食控制更直覺、更能持續下去。" image="/images/reframe-hero.png" link="/reframe" />

                <ProjectCard title="StreetSnap" description="為街頭攝影設計一款概念App，讓街拍擁有前所未有的新體驗。" image="/images/StreetSnap_cover-final.png" variant="reverse" />

                <ProjectCard title="Interior—網站切版練習" description="使用HTML, CSS3進行網站切版練習。" image="/images/interior.png" />

                <ProjectCard title="蒔在—咖啡廳菜單" description="為一間台南的新開幕咖啡廳設計一份屬於他們的菜單。" image="/images/cafe-menu.jpg" variant="reverse" />
            </div>
        </section>
    </div>
</template>

<script setup>
    import Hero from "~/components/Hero.vue";
    import ProjectCard from "~/components/projectCard.vue";
</script>
