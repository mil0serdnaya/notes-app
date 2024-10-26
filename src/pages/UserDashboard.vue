<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import Button from '@/components/shared/ui/Button.vue';
import IconPlus from '@/components/icons/IconPlus.vue';
</script>

<template>
  <DefaultLayout>
    <div class="add-note">
      <Button 
        :icon="IconPlus"
        variant="round"
        @click=""
        aria-label="Добавить заметку"
        class="add-note__btn"
      />
    </div>
  </DefaultLayout>
</template>

<style scoped lang="scss">
.add-note {
  &__btn {
    position: absolute;
    bottom: 40px;
    right: 8px;
    box-shadow: 0px 15px 46px -10px #00000099;
    z-index: 1;
  }
}
</style>