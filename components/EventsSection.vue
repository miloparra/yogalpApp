<script setup lang="ts">
import { ref, computed } from 'vue'
import { queryCollection } from '#imports'
// get all the contents
const allContent = await queryCollection('content').all()
// get all the events contents
const events = allContent.filter(item => item.path.startsWith('/events/'))
const currentIndex = ref(0) // first visible event index (left one)
const visibleCount = 3 // number of visible event in the carousel
const maxIndex = computed(() => events.length - visibleCount) // maximum departure index 
// move to previous events
const prev = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}
// move to nexts events
const next = () => {
  if (currentIndex.value < maxIndex.value) {
    currentIndex.value++
  }
}
</script>

<template>
    <section id="events" class="scroll-mt-24">
        <div class="h-[calc(100vh-96px)] flex flex-col justify-center items-center">
            <div class="w-full text-5xl font-bold mb-4 px-50">Evenement</div>
            <div class="w-full mb-15 px-50">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae ipsum sit amet enim
                venenatis commodo id volutpat nulla. Pellentesque pretium ac mi quis rutrum.
            </div>
            <div class="h-[calc((100vh-96px)/2)] grid" :style="{ gridTemplateColumns: `auto 1fr auto` }">
                <div class="flex justify-center items-center w-40">
                    <button class="flex justify-center items-center w-20 h-20 rounded-full hover:bg-[#F7F7F7] hover:scale-110 cursor-pointer" @click="prev">
                        <Icon name="weui:arrow-filled" size="50" class="rotate-180"></Icon>
                    </button>
                </div>
                <div class="relative h-full w-full overflow-hidden">
                    <!-- Carousel container -->
                    <div
                    class="flex transition-transform duration-500 ease-in-out h-full"
                    :style="{
                        width: `${(100 / visibleCount) * events.length}%`,
                        transform: `translateX(-${(100 / events.length) * currentIndex}%)`
                    }"
                    >
                        <div
                            v-for="event in events"
                            :key="event.id"
                            class="flex-none h-full p-5"
                            :style="{width: `calc(100% / ${events.length})`,}"
                        >
                            <!-- Carousel card -->
                            <div class="h-full w-full flex flex-col justify-center items-center gap-4 p-10 rounded-xl bg-white shadow-md">
                                <img class="w-20 object-cover" src="/Logo_YA_SM.png" alt="">
                                <!-- Contenu frontmatter -->
                                <div class="text-2xl">{{ event.title }}</div>
                                <div class="">{{ event.description }}</div>
                                <!-- Contenu markdown -->
                                <ContentRenderer :value="event" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex justify-center items-center w-40">
                    <button class="flex justify-center items-center w-20 h-20 rounded-full hover:bg-[#F7F7F7] hover:scale-110 cursor-pointer" @click="next">
                        <Icon name="weui:arrow-filled" size="50"></Icon>
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>