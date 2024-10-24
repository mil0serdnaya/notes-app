import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useModalStore = defineStore('modal', () => {
  const isLoginModalOpen = ref(false);
  const isRegisterModalOpen = ref(false);

  const openLoginModal = () => {
    isLoginModalOpen.value = true;
    isRegisterModalOpen.value = false;
  };

  const openRegisterModal = () => {
    isRegisterModalOpen.value = true;
    isLoginModalOpen.value = false;
  };

  const closeModals = () => {
    isLoginModalOpen.value = false;
    isRegisterModalOpen.value = false;
  };

  return {
    isLoginModalOpen,
    isRegisterModalOpen,
    openLoginModal,
    openRegisterModal,
    closeModals,
  };
});
