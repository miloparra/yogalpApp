<template>
    <section id="sessions" class="scroll-mt-24 py-20">
        <div class="h-[calc(100vh-96px)] my-[-80px] grid grid-cols-3 grid-rows-3">
            <!-- Case 7 -->
            <div class="p-6 flex border-r-3 border-r-[#9b4222]">
                <div class="flex justify-center w-1/4">
                    <div class="ml-30 rotate-270">
                        <div class="flex justify-center text-4xl">
                            HATHA
                        </div>
                        <div class="flex justify-center text-5xl">
                            YOGA
                        </div>
                    </div>
                </div>
                <div class="paragraph w-3/4 flex items-center pr-7 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae ipsum sit amet enim
                    venenatis
                    commodo id volutpat nulla. Pellentesque pretium ac mi quis rutrum. Nullam convallis ex vel elit
                    pellentesque porta. Sed convallis neque sit amet est mollis, et hendrerit mauris varius.
                </div>
            </div>
            <!-- Case 8/9 -->
            <img class="col-span-2 w-full h-full object-cover" src="public/chaine_aravis.jpg" alt="">
            <!-- Case fusionnée en haut à gauche (2x2) -->
            <div class="col-span-2 row-span-2 flex justify-center items-center border-t-3 border-t-[#9b4222]">
                <div>
                    <div class="text-5xl mb-10">Horaires</div>
                    <div class="text-sm">
                        <div class="py-5">
                            <div>Lundi 17h30</div>
                            <div>Centre social, l'Argentière la Bessée</div>
                        </div>
                        <div class="py-5">
                            <div>Mardi 17h30</div>
                            <div>Salle polyvalente, La Roche de rame</div>
                        </div>
                        <div class="py-5">
                            <div>Atelier à thème</div>
                            <div>Un Mercredi par mois à 17h30</div>
                            <div>Salle polyvalente, La Roche de rame</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Autres cases normales -->
            <img class="w-full h-full object-cover border-l-3 border-l-[#9b4222] border-b-3 border-b-[#DB6437]"
                src="public/photo_yoga_int.jpg" alt="">
            <div class="case3 flex justify-center bg-[#9b4222] border-b-3 border-b-[#DB6437]">
                <img class="w-1/2 object-cover" src="public/Logo_YA_SM.png" alt="">
            </div>
        </div>
    </section>
</template>