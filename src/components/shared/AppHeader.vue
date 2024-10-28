<script setup>
import { ref } from 'vue';
import { useModalStore } from '@/stores/modalStore';
import IconLogin from '../icons/IconLogin.vue';
import IconUser from '../icons/IconUser.vue';
import Button from './ui/Button.vue';

const modalStore = useModalStore();

const isMenuOpen = ref(false);
const userButtonRef = ref(null);
const userMenuRef = ref(null);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

const logout = () => {
  closeMenu();
  console.log('User logged out');
};

</script>

<template>
  <header class="header">
    <div class="header__logo">
      <RouterLink to="/" class="header__logo-link"/>
    </div>

    <div v-if="0" class="header__login">
      <Button label="Вход" :icon="IconLogin" @click="modalStore.openModal('login')"/>
    </div>

    <div class="header__user">
      <span class="header__user-email" aria-label="User email">e-mail@mail.mail</span>
      <Button 
        :icon="IconUser"
        ref="userButtonRef"
        variant="round"
        color="dark"
        class="header__user-button"
        @click="toggleMenu"
        aria-label="Меню пользователя"
        :aria-expanded="isMenuOpen.toString()"
        aria-controls="user-menu"
      />
      <transition name="fade">
        <div
          v-if="isMenuOpen"
          ref="userMenuRef"
          id="user-menu"
          class="header__user-menu"
          role="menu"
        >
          <a href="#" class="header__logout" @click="logout" role="menuitem">
            Выйти
          </a>
        </div>
      </transition>
    </div>
  </header>
</template>


<style lang="scss">
.header {
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

  &__logo-link {
    display: block;
    width: 37px;
    height: 36px;
    background: url("@/assets/images/svg/logo-mobile.svg") no-repeat;
    background-size: 100% 100%;

    @include breakpoint(md) {
      width: 220px;
      height: 50px;
      background: url("@/assets/images/svg/logo.svg") no-repeat;
    }
  }

  &__user {
    display: flex;
    align-items: center;
    position: relative;
  }

  &__user-email {
    color: $white;
    @include text-small;
    max-width: 216px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden; 
  }

  &__user-button {
    width: 36px;
    height: 36px;
    margin-left: 12px;

    svg {
      width: 13px;
      height: 18px;
    }

    @include breakpoint(md) {
      width: 56px;
      height: 56px;

      svg {
        width: 20px;
        height: 28px;
      }
    }
  }

  &__user-menu {
    position: absolute;
    right: 0;
    top: 50px;
    padding: 10px 20px;
    border-radius: 12px;
    background-color: $dark-middle;
    box-shadow: 0px 15px 46px -10px rgba(0, 0, 0, 0.6);
    z-index: 1;

    &::before {
      position: absolute;
      top: -6px;
      right: 11px;
      content: "";
      width: 0px;
      height: 0px;
      border-style: solid;
      border-width: 0 7px 7px 7px;
      border-color: transparent transparent $dark-middle transparent;
    }

    @include breakpoint(md) {
      top: 80px;
      padding: 40px;

      &::before {
        top: -9px;
        right: 20px;
        border-width: 0 9px 9px 9px;
      }
    }
  }

  &__logout {
    @include link;
  }
}
</style>