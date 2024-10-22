<script setup lang="ts">
import AppHeader from '@/components/shared/AppHeader.vue';

</script>

<template>
  <div>
    <AppHeader />
    <main>
      <slot />
    </main>
  </div>
</template>
