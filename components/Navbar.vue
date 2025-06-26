<template>
    <header class="w-full fixed top-0 left-0 z-50 bg-[#DB6437] text-white shadow-md">
        <div class="h-24 flex justify-between items-center">
            <div class="flex w-1/5 justify-center items-center">
                <!-- <NuxtLink to="#about" class="ml-10">
                    <img class="w-20" src="public/Logo3.png" alt="Logo" />
                </NuxtLink> -->
                <NuxtLink to="#about" class="mt-2">
                    <img class="w-40" src="public/Logotype_White.png" alt="Logo" />
                </NuxtLink>
            </div>
            <nav class="max-w-5xl mx-auto flex justify-center gap-8 font-medium">
                <a href="#about" class="hover:text-[#ffba88] transition-colors">Yogalp</a>
                <a href="#sessions" class="hover:text-[#ffba88] transition-colors">Horaires</a>
                <a href="#events" class="hover:text-[#ffba88] transition-colors">Evenements</a>
                <a href="#contact" class="hover:text-[#ffba88] transition-colors">Contact</a>
            </nav>
            <div class="w-1/5">
            </div>
        </div>
    </header>
</template>