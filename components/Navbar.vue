<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isScrolled = ref(false)

onMounted(() => {

    // handles navbar style depending on scroll, route or menu state
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
    <div class="navbar h-20 lg:h-24 fixed top-0 z-50 transition-colors duration-300" :class="[isScrolled ? 'bg-white shadow-md' : 'bg-transparent text-white']">
        <div class="navbar-start">
            <div class="dropdown">
                <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabindex="-1"
                    class="menu dropdown-content bg-white text-black z-1 mt-4 ml-[-8px] h-[calc(100vh-76px)] w-screen p-2">
                    <li><a href="/#about" class="text-xl">Yogalp</a></li>
                    <li><a href="/#sessions" class="text-xl">Horaires</a></li>
                    <li><a href="/#events" class="text-xl">Evenements</a></li>
                    <li><a href="/#contact" class="text-xl">Contact</a></li>
                </ul>
            </div>
            <NuxtLink to="/#home" class="relative w-20 h-20 group lg:hidden">
                <img
                src="/IconeWhite.png"
                alt="Logo blanc"
                class="absolute top-0 left-0 w-full h-full transition-opacity duration-1500"
                :class="{ 'opacity-0': isScrolled }"
                />
                <img
                src="/IconeBlack.png"
                alt="Logo noir"
                class="absolute top-0 left-0 w-full h-full transition-opacity duration-1500"
                :class="{ 'opacity-83': isScrolled, 'opacity-0': !isScrolled }"
                />
            </NuxtLink>
        </div>
        <div class="navbar-center hidden lg:flex">
            <div class="flex items-center gap-8 text-lg font-medium">
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
            </div>
        </div>
        <div class="navbar-end">
        </div>
    </div>
</template>