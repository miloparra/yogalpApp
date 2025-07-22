<template>
    <section id="sessions" class="min-h-[calc(100vh-96px)] scroll-mt-24 bg-red-100 py-20">
        <div class="h-[calc(100vh-96px)] my-[-80px] grid grid-cols-3 grid-rows-3">
            <!-- Case fusionnée en haut à gauche (2x2) -->
            <div class="bg-red-400 col-span-2 row-span-2 flex items-center justify-center">A (2x2)</div>

            <!-- Autres cases normales -->
            <div class="bg-blue-400 flex items-center justify-center">B</div>
            <div class="bg-green-400 flex items-center justify-center">C</div>
            <div class="bg-yellow-400 flex items-center justify-center">D</div>

            <!-- Case fusionnée bas milieu + droite -->
            <div class="bg-purple-400 col-span-2 flex items-center justify-center">E (bas fusionné)</div>
        </div>
    </section>
</template>