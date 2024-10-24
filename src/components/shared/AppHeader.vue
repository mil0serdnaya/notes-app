<script setup lang="ts">
import { useModalStore } from '@/stores/modalStore';
import Logo from '../icons/Logo.vue';
import IconLogin from '../icons/IconLogin.vue';
import Button from './ui/Button.vue';

const modalStore = useModalStore();
</script>

<template>
  <header class="app-header">
    <div class="app-header__logo">
      <RouterLink to="/">
        <Logo />
      </RouterLink>
    </div>
    <div>
      <Button label="Вход" :icon="IconLogin" @click="modalStore.openLoginModal"/>
    </div>
  </header>
</template>

<style lang="scss">
.app-header {
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @include breakpoint(md) {
    padding: 20px 40px;
  }

  @include breakpoint(lg) {
    padding: 20px 80px;
  }

  @include breakpoint(xl) {
    padding: 40px 160px;
  }

  &__logo {
    svg {
      max-width: 155px;

      @include breakpoint(md) {
        max-width: 220px;
      }
    }
  }
}
</style>