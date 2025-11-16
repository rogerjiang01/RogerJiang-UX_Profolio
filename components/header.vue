<template>
    <header id="Header" :class="{ scrolled: isScrolled }" ref="headerEl">
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid container">
                <!-- ✅ LOGO：導向首頁（圖片放在 /public/images/LOGO.svg） -->
                <NuxtLink class="navbar-brand" to="/">
                    <img src="/images/LOGO.svg" alt="Reframe Logo" />
                </NuxtLink>

                <button ref="togglerEl" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent" ref="collapseEl">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 gap-4 align-items-center">
                        <!-- ✅ Work：導向首頁 -->
                        <li class="nav-item">
                            <NuxtLink class="nav-link" aria-current="page" to="/">Work</NuxtLink>
                        </li>

                        <!-- ✅ About：導向 about.vue -->
                        <li class="nav-item">
                            <NuxtLink @click="trackAboutClick" class="nav-link pe-0" to="/about">About</NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<script setup>
    /*
  目標：
  1) 手機版點選 nav-link 自動關閉 collapse（mobile auto-close）
  2) 下滑時 header 加上 class `scrolled`（用於半透明背景）

  注意：此版用到 bootstrap 的 Collapse API（若在頁面中已載入 bootstrap.js）
        若無 bootstrap JS，會 fallback 至移除 .show 的作法。
*/

    import { ref, onMounted, onBeforeUnmount } from "vue";

    const headerEl = ref(null);
    const collapseEl = ref(null);
    const togglerEl = ref(null);

    const isScrolled = ref(false);

    let linkClickHandlers = [];
    let collapseInstance = null;

    function hideCollapse() {
        if (!collapseEl.value) return;
        try {
            // 若 bootstrap 可用，使用 Collapse API 隱藏
            if (typeof bootstrap !== "undefined" && bootstrap.Collapse) {
                const inst = bootstrap.Collapse.getInstance(collapseEl.value) || new bootstrap.Collapse(collapseEl.value, { toggle: false });
                inst.hide();
                return;
            }
        } catch (e) {
            // ignore and fallback
        }
        // fallback：直接移除 show 並把 aria-expanded 改為 false
        collapseEl.value.classList.remove("show");
        if (togglerEl.value) togglerEl.value.setAttribute("aria-expanded", "false");
    }

    onMounted(() => {
        // 1) 手機版點選 nav-link 自動關閉
        if (collapseEl.value) {
            const links = Array.from(collapseEl.value.querySelectorAll(".nav-link"));
            links.forEach((link) => {
                const handler = (e) => {
                    // 只在可見（小螢幕展開）時關閉
                    if (collapseEl.value.classList.contains("show")) {
                        hideCollapse();
                    }
                };
                link.addEventListener("click", handler);
                linkClickHandlers.push({ node: link, handler });
            });
        }

        // 2) 下滑時加上 scrolled class（簡單 threshold：scrollY > 10）
        const onScroll = () => {
            const y = window.scrollY || window.pageYOffset;
            isScrolled.value = y > 10;
        };
        window.addEventListener("scroll", onScroll, { passive: true });

        // initial check
        onScroll();

        onBeforeUnmount(() => {
            // 清除事件
            if (linkClickHandlers.length) {
                linkClickHandlers.forEach(({ node, handler }) => node.removeEventListener("click", handler));
                linkClickHandlers = [];
            }
            window.removeEventListener("scroll", onScroll);
        });
    });

    onBeforeUnmount(() => {
        // 保險性再清一次（若 onMounted 的 cleanup 沒被呼叫）
        if (linkClickHandlers.length) {
            linkClickHandlers.forEach(({ node, handler }) => node.removeEventListener("click", handler));
            linkClickHandlers = [];
        }
    });

    const trackAboutClick = () => {
        useTrackEvent("select_content", {
            content_type: "about_link",
            item_id: "about_page",
        });
    };
</script>

<style scoped>
    /* 只處理你要求的「下滑半透明底色」樣式（scoped，易於移回 main.css） */

    header#Header {
        position: sticky;
        top: 0;
        z-index: 1030;
        /* 預設：透明（或由你全域樣式決定） */
        background: transparent;
        transition: background-color 200ms ease, backdrop-filter 200ms ease;
    }

    /* 下滑時半透明 + 模糊（你可以在 main.css 統一修改顏色或透明度） */
    header#Header.scrolled .navbar {
        background-color: rgba(255, 255, 255, 0.85) !important;
        backdrop-filter: blur(6px);
    }

    #Header .navbar img {
        width: 56px;
        height: 72px;
        display: block;
    }

    @media (max-width: 768px) {
        #Header .navbar img {
            width: 49px;
            height: 63px;
        }
    }

    @media (max-width: 576px) {
        #Header .navbar img {
            width: 42px;
            height: 54px;
        }
    }

    /* 若想更低的半透明或不同顏色，可修改上面 rgba 數值 */
</style>
