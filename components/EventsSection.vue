<script setup lang="ts">
import { ref, computed } from 'vue'

const items = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  color: ['bg-[#DB6437]', 'bg-[#9b4222]', 'bg-[#FFC971]', 'bg-[#1C1C1C]'][i % 4]
}))

const currentIndex = ref(0)
const visibleCount = 3

const maxIndex = computed(() => items.length - visibleCount)

const prev = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}

const next = () => {
  if (currentIndex.value < maxIndex.value) {
    currentIndex.value++
  }
}
</script>

<template>
  <section id="events" class="scroll-mt-24 py-20">
    <div class="h-[calc(100vh-96px)] my-[-80px] grid grid-cols-2" :style="{ gridTemplateRows: `1fr 33.33vw` }">
        <div class="flex justify-center items-center text-3xl">Evenements</div>
        <div class=""></div>
        <div class="col-span-2">
            <div class="relative h-full w-full overflow-hidden">
                <!-- Carousel container -->
                <div
                class="flex transition-transform duration-500 ease-in-out h-full"
                :style="{
                    width: `${(100 / visibleCount) * items.length}%`,
                    transform: `translateX(-${(100 / items.length) * currentIndex}%)`
                }"
                >
                    <div
                        v-for="item in items"
                        :key="item.id"
                        class="flex-none w-[calc(100%/10)] h-full rounded-full scale-75"
                        :class="item.color"
                    >
                        <div class="h-full w-full flex items-center justify-center text-4xl text-white font-bold">
                        {{ item.id }}
                        </div>
                    </div>
                </div>

                <!-- Navigation arrows -->
                <button
                class="absolute h-full top-1/2 left-0 transform -translate-y-1/2 z-10 bg-black/30 hover:bg-black/50 text-white px-3 py-2"
                @click="prev"
                >
                <
                </button>

                <button
                class="absolute h-full top-1/2 right-0 transform -translate-y-1/2 z-10 bg-black/30 hover:bg-black/50 text-white px-3 py-2"
                @click="next"
                >
                >
                </button>
            </div>
        </div>
        <!-- <div class="col-span-2 h-15 bg-[#DB6437]"></div> -->
    </div>
  </section>
</template>
