<script setup>
const { $contentful } = useNuxtApp()

const about = ref(null)

const entries = await $contentful.getEntries({
  content_type: 'about'
})
about.value = entries.items[0]?.fields || null

</script>

<template>
  <section id="about" class="scroll-mt-24 mt-24 py-20">
    <div class="h-[calc(100vh-96px)] my-[-80px] grid grid-cols-3 overflow-hidden scale-90">
      <!-- Image -->
      <div class="col-span-2">
        <img
          src="public/photo_yoga_ext.jpg"
          alt="Yoga"
          class="w-full h-full object-cover"
        />
      </div>

      <!-- Texte -->
      <div class="p-6 flex flex-col justify-center items-center border-r-35 border-r-[#F27F53]">
        <div class="w-3/5 flex justify-center items-center text-7xl">
          Yogalp
        </div>
        <div class="w-3/5 flex justify-center items-center text-md text-justify mt-15">
          {{ about?.presentation }}
        </div>
      </div>
    </div>
  </section>
</template>
