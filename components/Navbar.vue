<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)

onMounted(() => {
    const handleScroll = () => {
    isScrolled.value = window.scrollY > 50 // seuil de déclenchement (50px)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    handleScroll()

    onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll)
    })
})
</script>

<template>
    <header :class="[
      'w-full fixed top-0 left-0 z-50 transition-colors duration-300',
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent text-white'
    ]">
        <div class="h-24 flex justify-between items-center">
            <nav class="max-w-5xl mx-auto flex justify-center items-center gap-8 font-medium">
                <a href="/#about" class="w-26 text-center hover:text-[#ffba88] transition-colors">Yogalp</a>
                <a href="/#sessions" class="w-26 text-center hover:text-[#ffba88] transition-colors">Horaires</a>

                <NuxtLink to="/#about" class="relative w-20 h-20">
                    <img
                    src="/IconeWhite.png"
                    alt="Logo blanc"
                    class="absolute top-0 left-0 w-full h-full transition-opacity duration-1000"
                    :class="{ 'opacity-0': isScrolled }"
                    />
                    <img
                    src="/IconeBlack.png"
                    alt="Logo noir"
                    class="absolute top-0 left-0 w-full h-full transition-opacity duration-1000"
                    :class="{ 'opacity-83': isScrolled, 'opacity-0': !isScrolled }"
                    />
                </NuxtLink>

                <a href="/#events" class="w-26 text-center hover:text-[#ffba88] transition-colors">Evenements</a>
                <a href="/#contact" class="w-26 text-center hover:text-[#ffba88] transition-colors">Contact</a>
            </nav>
        </div>
    </header>
</template>