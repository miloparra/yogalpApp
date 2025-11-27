<script setup lang="ts">
const form = reactive({
  name: '',
  email: '',
  message: ''
})

const loading = ref(false)
const success = ref(false)
const error = ref('')
  
const sendMessage = async () => {
  loading.value = true
  success.value = false
  error.value = ''

  try {
    const res = await $fetch('/api/contact', {
      method: 'POST',
      body: form
    })

    if (res.success) {
      success.value = true
      form.name = ''
      form.email = ''
      form.message = ''
    } else {
      error.value = 'Impossible d’envoyer le message'
    }
  } catch (err) {
    error.value = 'Erreur interne'
  }

  loading.value = false
}
</script>

<template>
    <section id="contact" class="scroll-mt-20 lg:scroll-mt-24">
        <div class="h-[calc(100vh-80px)] lg:h-[60vh] grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 bg-[#F27F53]">
            <div class="order-2 lg:order-1 flex flex-col justify-center items-center mt-5 lg:mt-0">
                <div class="flex items-center">
                    <img class="w-25 h-25 lg:w-50 lg:h-50" src="/IconeWhite.png" alt="">
                    <div class="text-sm lg:text-base flex flex-col gap-4">
                        <div class="flex items-center gap-3">
                            <Icon name="ic:baseline-local-phone" size="20" class="text-white"></Icon>
                            <div class="text-white">055456666</div>
                        </div>
                        <div class="flex items-center gap-3">
                            <Icon name="ic:baseline-alternate-email" size="20" class="text-white"></Icon>
                            <div class="text-white">yogalp@gmail.com</div>
                        </div>
                        <div class="flex items-center gap-3">
                            <Icon name="ic:round-house-siding" size="20" class="text-white"></Icon>
                            <div>
                                <p class="text-white">2 Impasse des Myosotis</p>
                                <p class="text-white">15600 MAURS</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col lg:flex-row items-center gap-3 lg:py-10 pt-10 text-white text-sm lg:text-base">
                    <NuxtLink to="/legalMentions" class="hover:underline">Mentions légales</NuxtLink>
                    <p class="hidden lg:block">|</p>
                    <NuxtLink to="/confidentiality" class="hover:underline">Politique de confidentialité</NuxtLink>
                </div>  
            </div>
            <div class="relative order-1 lg:order-2 flex flex-col justify-end lg:justify-center items-center">
                <h2 class="text-2xl lg:text-4xl font-bold text-center mb-3 lg:mb-8 text-white">Contactez-nous !</h2>
                <form @submit.prevent="sendMessage" class="w-2/3 flex flex-col gap-2 lg:gap-5 text-sm lg:text-base">
                    <input v-model="form.name" class="bg-white opacity-35 placeholder-black p-2 lg:p-3 pl-5 rounded-lg" type="text" placeholder="Nom">
                    <input v-model="form.email" class="bg-white opacity-35 placeholder-black p-2 lg:p-3 pl-5 rounded-lg" type="email" placeholder="Email">
                    <textarea v-model="form.message" class="bg-white opacity-38 placeholder-black p-2 lg:p-3 pl-5 rounded-lg" type="text" placeholder="Message"></textarea>
                    <div class="flex justify-center">
                        <UButton class="w-40 flex justify-center bg-[#F27F53] hover:bg-[#f39b78] transition-colors duration-600 cursor-pointer" type="submit" trailing-icon="i-lucide-arrow-right" size="xl">Envoyer</UButton>
                    </div>
                </form>
                <div class="absolute -bottom-6 lg:bottom-15 flex items-center gap-2">
                    <Icon v-if="success" name="material-symbols:check-circle-rounded" size="18"></Icon>
                    <p v-if="success" class="text-sm font-semibold"> Message envoyé !</p>
                </div>
            </div>
        </div>
    </section>
</template>