import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useModalStore = defineStore('modal', () => {
  const isLoginModalOpen = ref(false);
  const isRegisterModalOpen = ref(false);

  const openModal = (type: 'login' | 'register') => {
    isLoginModalOpen.value = type === 'login';
    isRegisterModalOpen.value = type === 'register';
  };

  const closeModals = () => {
    isLoginModalOpen.value = false;
    isRegisterModalOpen.value = false;
  };

  return {
    isLoginModalOpen,
    isRegisterModalOpen,
    openModal,
    closeModals,
  };
});
