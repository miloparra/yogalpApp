<script setup lang="ts">
import { ref } from "vue"
let name = ref("")
const email = ref("")
const message = ref("")
const success = ref(false)
</script>

<template>
    <section id="contact" class="scroll-mt-24 py-40 bg-[#F27F53]">
        <div class="h-[calc(100vh-96px)/2] my-[-80px] grid grid-cols-2">
            <div class="flex flex-col justify-center items-center">
                <div class="flex flex-col items-center">
                    <div class="flex items-center">
                        <img class="w-50 h-50" src="/IconeWhite.png" alt="">
                        <div>
                            <div class="flex items-center gap-3 mt-4">
                                <Icon name="ic:baseline-local-phone" size="20" class="text-white"></Icon>
                                <div class="text-white">055456666</div>
                            </div>
                            <div class="flex items-center gap-3 mt-4">
                                <Icon name="ic:baseline-alternate-email" size="20" class="text-white"></Icon>
                                <div class="text-white">yogalp@gmail.com</div>
                            </div>
                            <div class="flex items-center gap-3 mt-4">
                                <Icon name="ic:round-house-siding" size="20" class="text-white"></Icon>
                                <div>
                                    <p class="text-white">2 Impasse des Myosotis</p>
                                    <p class="text-white">15600 MAURS</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center gap-3 py-10 text-white">
                        <NuxtLink to="/legalMentions" class="hover:underline">Mentions légales</NuxtLink>
                        <p class="hidden lg:block">|</p>
                        <NuxtLink to="/confidentiality" class="hover:underline">Politique de confidentialité</NuxtLink>
                    </div>
                </div>    
            </div>
            <div class="flex flex-col justify-center items-center">
                <h2 class="text-4xl font-bold text-center mb-8 text-white">Contactez-nous !</h2>
                <form class="w-2/3 flex flex-col gap-5">
                    <input v-model="name" class="bg-white opacity-35 placeholder-black p-3 pl-5 rounded-lg" type="text" placeholder="Nom">
                    <input v-model="email" class="bg-white opacity-35 placeholder-black p-3 pl-5 rounded-lg" type="email" placeholder="Email">
                    <textarea v-model="message" class="bg-white opacity-38 placeholder-black p-3 pl-5 rounded-lg" type="text" placeholder="Message"></textarea>
                    <div class="flex justify-center">
                        <UButton class="w-40 flex justify-center bg-[#F27F53] hover:bg-[#f39b78] transition-colors duration-600 cursor-pointer" type="submit" trailing-icon="i-lucide-arrow-right" size="xl">Envoyer</UButton>
                    </div>
                </form>
                <div v-if="success" class="flex items-center gap-2">
                    <Icon name="material-symbols:check-circle-rounded" size="18"></Icon>
                    <p> Message envoyé !</p>
                </div>

            </div>
        </div>
    </section>
</template>