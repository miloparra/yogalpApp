<template>
    <header class="w-full fixed top-0 left-0 z-50 bg-[#DB6437] text-white shadow-md">
        <div class="h-24 flex justify-between items-center">
            <nav class="max-w-5xl mx-auto flex justify-center items-center gap-8 font-medium">
                <a href="/#about" class="w-26 text-center hover:text-[#ffba88] transition-colors">Yogalp</a>
                <a href="/#sessions" class="w-26 text-center hover:text-[#ffba88] transition-colors">Horaires</a>

                <NuxtLink to="/#about" class="">
                    <img class="w-30" src="public/Logo_YA_Bold_White.png" alt="Logo" />
                </NuxtLink>

                <a href="/#events" class="w-26 text-center hover:text-[#ffba88] transition-colors">Evenements</a>
                <a href="/#contact" class="w-26 text-center hover:text-[#ffba88] transition-colors">Contact</a>
            </nav>
        </div>
    </header>
</template>