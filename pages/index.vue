<script setup>
import AboutSection from '~/components/AboutSection.vue'
import SessionsSection from '~/components/SessionsSection.vue'
import EventsSection from '~/components/EventsSection.vue'
import ContactSection from '~/components/ContactSection.vue'
</script>

<template>
  <div class="h-screen snap-y snap-mandatory overflow-y-auto scroll-smooth">
    <AboutSection />
    <SessionsSection />
    <EventsSection />
    <ContactSection />
  </div>
</template>