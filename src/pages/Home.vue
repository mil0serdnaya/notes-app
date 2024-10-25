<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import Hero from '@/components/Hero.vue';
import LoginModal from '@/components/modals/LoginModal.vue';
import RegisterModal from '@/components/modals/RegisterModal.vue';
</script>

<template>
  <DefaultLayout>
    <Hero />
    <LoginModal />
    <RegisterModal />
  </DefaultLayout>
</template>
