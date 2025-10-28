<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isScrolled = ref(false)

onMounted(() => {

    const handleScroll = () => {
        if (route.path === '/confidentiality' || route.path === '/legalMentions') {
            isScrolled.value = true
        } else {
            isScrolled.value = window.scrollY > 50
        }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    handleScroll()

    // Recalcule à chaque changement de route
    watch(() => route.path, () => {
        setTimeout(handleScroll, 200)
    })

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
            <nav class="max-w-5xl mx-auto flex justify-center items-center gap-8 text-lg font-medium">
                <a href="/#about" class="w-26 text-center hover:text-[#FFC971] transition-colors duration-300">Yogalp</a>
                <a href="/#sessions" class="w-26 text-center hover:text-[#FFC971] transition-colors duration-300">Horaires</a>

                <NuxtLink to="/#home" class="relative w-20 h-20 group">
                    <img
                    src="/IconeWhite.png"
                    alt="Logo blanc"
                    class="absolute top-0 left-0 w-full h-full group-hover:opacity-0 transition-opacity duration-1500"
                    :class="{ 'opacity-0': isScrolled }"
                    />
                    <img
                    src="/IconeBlack.png"
                    alt="Logo noir"
                    class="absolute top-0 left-0 w-full h-full group-hover:opacity-0 transition-opacity duration-1500"
                    :class="{ 'opacity-83': isScrolled, 'opacity-0': !isScrolled }"
                    />
                    <img
                    src="/Icone_Yellow.png"
                    alt="Logo jaune"
                    class="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                    />
                </NuxtLink>

                <a href="/#events" class="w-26 text-center hover:text-[#FFC971] transition-colors duration-300">Evenements</a>
                <a href="/#contact" class="w-26 text-center hover:text-[#FFC971] transition-colors duration-300">Contact</a>
            </nav>
        </div>
    </header>
</template>