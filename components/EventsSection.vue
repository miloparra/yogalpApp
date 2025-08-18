<script setup lang="ts">
import { Icon } from '#components'
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
    <div class="h-[calc((100vh-96px)/1.5)] my-[-80px] grid" :style="{ gridTemplateColumns: `auto 1fr auto` }">
        <div class="flex justify-center items-center w-40">
          <button class="flex justify-center items-center w-20 h-20 rounded-full hover:bg-[#F7F7F7]" @click="prev">
            <Icon name="weui:arrow-filled" size="50" class="rotate-180"></Icon>
          </button>
        </div>
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
                    class="flex-none w-[calc(100%/10)] h-full scale-75"
                    :class="item.color"
                >
                    <div class="h-full w-full flex items-center justify-center text-4xl text-white font-bold">
                    {{ item.id }}
                    </div>
                </div>
            </div>
        </div>
        <div class="flex justify-center items-center w-40">
          <button class="flex justify-center items-center w-20 h-20 rounded-full hover:bg-[#F7F7F7]" @click="next">
            <Icon name="weui:arrow-filled" size="50"></Icon>
          </button>
        </div>
    </div>
  </section>
</template>
