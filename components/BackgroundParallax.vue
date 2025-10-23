<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const pos = ref(0);
const wrapperRef = ref(null);

const handleScroll = () => {
    if (wrapperRef.value) {
        pos.value = wrapperRef.value.scrollTop * -0.5; // 0.5 = vitesse ralentie
    }
};

onMounted(() => {
    if (wrapperRef.value) {
        wrapperRef.value.addEventListener('scroll', handleScroll);
    }
});

onBeforeUnmount(() => {
    if (wrapperRef.value) {
        wrapperRef.value.removeEventListener('scroll', handleScroll);
    }
});
</script>

<template>
    <div class="relative h-screen w-screen overflow-hidden">
        <!-- FOND PARALLAX -->
        <div class="parallax-bg" :style="{ transform: `translateY(${pos}px)` }"></div>

        <!-- SLOT : contenu défilant -->
        <div ref="wrapperRef" class="relative z-10 h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth">
            <slot />
        </div>
    </div>
</template>

<style scoped>
.parallax-bg {
    position: absolute;
    top: 96px;
    left: 0;
    height: 200%;
    width: 100%;
    background-image: url('/bg.png');
    opacity: 5%;
    background-size: cover;
    background-position: center;
    z-index: -1;
    will-change: transform;
}
</style>