<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import Hero from '@/components/Hero.vue';
import LoginModal from '@/components/modals/LoginModal.vue';
</script>

<template>
  <DefaultLayout>
    <Hero />
    <LoginModal />
  </DefaultLayout>
</template>
