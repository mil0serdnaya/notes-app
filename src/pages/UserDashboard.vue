<script setup lang="ts">
import { useModalStore } from '@/stores/modalStore';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import AddNoteModal from '@/components/modals/AddNoteModal.vue';
import Notes from '@/components/Notes.vue';
import Button from '@/components/shared/ui/Button.vue';
import IconPlus from '@/components/icons/IconPlus.vue';

const modalStore = useModalStore();
</script>

<template>
  <DefaultLayout>
    <Notes />
    <div class="add-note">
      <Button 
        :icon="IconPlus"
        variant="round"
        @click="modalStore.openModal('add-note')"
        aria-label="Добавить заметку"
        class="add-note__btn"
      />
    </div>
    <AddNoteModal />
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