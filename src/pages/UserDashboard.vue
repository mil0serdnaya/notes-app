<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import Notes from '@/components/Notes.vue';
import Button from '@/components/shared/ui/Button.vue';
import IconPlus from '@/components/icons/IconPlus.vue';
</script>

<template>
  <DefaultLayout>
    <Notes />
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
    position: fixed;
    bottom: 40px;
    right: 8px;
    box-shadow: 0px 15px 46px -10px #00000099;
    z-index: 1;
  }
}
</style>