<template>
    <section id="home" class="relative h-screen overflow-hidden">
        <!-- Image -->
        <div class="absolute inset-0">
            <img
            src="/IA_Yoga_Montagne.png"
            alt="Yoga"
            class="w-full h-full filter brightness-90 object-cover"
            />
        </div>

        <!-- Texte -->
        <div class="relative flex flex-col justify-between items-center gap-2 lg:gap-5 h-full text-white">
            <div class="h-10"></div>
            <div class="flex flex-col items-center">
                <img
                src="/Logotype_White.png"
                alt="Logotype"
                class="w-80 lg:w-120"
                />
                <div class="lg:text-2xl font-medium">
                    L’harmonie au sommet
                </div>
            </div>
            <div class="h-20">
                <NuxtLink to="/#about"><Icon name="ic:outline-arrow-downward" size="40" class="text-white animate-bounce"></Icon></NuxtLink>
            </div>
        </div>
    </section>
</template>