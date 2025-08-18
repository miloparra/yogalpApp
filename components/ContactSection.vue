<script setup lang="ts">
import { textarea } from '#build/ui';

</script>

<template>
    <section id="contact" class="scroll-mt-24 py-20">
        <div class="h-[calc(100vh-96px)] my-[-80px] grid grid-cols-2 scale-90">
            <div class="flex flex-col justify-center items-center bg-[#F27F53]">
                <div class="mt-[-100px]">
                    <img class="w-100 h-100" src="/Logo_YA_Bold_White.png" alt="">
                    <div class="flex items-center gap-3 mt-3">
                        <Icon name="ic:baseline-local-phone" size="20" class="text-white"></Icon>
                        <div class="text-white">055456666</div>
                    </div>
                    <div class="flex items-center gap-3 mt-3">
                        <Icon name="ic:baseline-alternate-email" size="20" class="text-white"></Icon>
                        <div class="text-white">yogalp@gmail.com</div>
                    </div>
                    <div class="flex items-center gap-3 mt-3">
                        <Icon name="ic:round-house-siding" size="20" class="text-white"></Icon>
                        <div class="text-white">2 Impasse des Myosotis 15600 MAURS</div>
                    </div>
                </div>    
            </div>
            <div class="flex flex-col justify-center items-center">
                <h2 class="text-3xl font-bold text-center mb-20">Contactez-nous !</h2>
                <form class="w-2/3 flex flex-col gap-5">
                    <input class="bg-[#f9c7b3] p-3" type="text" placeholder="Nom">
                    <input class="bg-[#f9c7b3] p-3" type="email" placeholder="Email">
                    <textarea class="bg-[#f9c7b3] p-3" type="text" placeholder="Message"></textarea>
                    <UButton class="bg-[#F27F53] hover:bg-[#f39b78] flex justify-center" trailing-icon="i-lucide-arrow-right" size="xl">Button</UButton>
                </form>
            </div>
        </div>
    </section>
</template>