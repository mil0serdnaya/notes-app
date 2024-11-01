import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useModalStore = defineStore('modal', () => {
  const isLoginModalOpen = ref(false);
  const isRegisterModalOpen = ref(false);
  const isAddNoteModalOpen = ref(false);

  const openModal = (type: 'login' | 'register' | 'add-note') => {
    isLoginModalOpen.value = type === 'login';
    isRegisterModalOpen.value = type === 'register';
    isAddNoteModalOpen.value = type === 'add-note';
  };

  const closeModals = () => {
    isLoginModalOpen.value = false;
    isRegisterModalOpen.value = false;
    isAddNoteModalOpen.value = false;
  };

  return {
    isLoginModalOpen,
    isRegisterModalOpen,
    isAddNoteModalOpen,
    openModal,
    closeModals,
  };
});
