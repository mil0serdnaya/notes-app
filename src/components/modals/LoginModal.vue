<script setup lang="ts">
import { ref, watch } from 'vue';
import { useModalStore } from '@/stores/modalStore';
import { toggleBodyScroll } from '@/utils/utils';
import Button from '../shared/ui/Button.vue';
import IconClose from '../icons/IconClose.vue';
import IconPasswordOn from '../icons/IconPasswordOn.vue';
import IconPasswordOff from '../icons/IconPasswordOff.vue';

const modalStore = useModalStore();
const email = ref('');
const password = ref('');
const error = ref(null);
const showPassword = ref(false);

const login = () => {
  console.log('Email:', email.value);
  console.log('Password:', password.value);
};

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};

watch(
  () => modalStore.isLoginModalOpen,
  (newValue) => {
    toggleBodyScroll(newValue);
  }
);

</script>

<template>
  <transition name="fade">
    <div v-if="modalStore.isLoginModalOpen" class="modal-overlay" @click.self="modalStore.closeModals">
      <section class="modal" role="dialog" aria-labelledby="modal__title" aria-modal="true">
        <header class="modal__header">
          <h2 id="modal__title" class="modal__title">Вход в ваш аккаунт</h2>
          <Button 
            :icon="IconClose"
            variant="round"
            @click="modalStore.closeModals"
            aria-label="Закрыть окно"
            class="modal__close"
          />
        </header>
        
        <form @submit.prevent="login" class="modal-form">
          <div class="modal-form__inputs">
            <div class="modal-form__input-block">
              <label for="email" class="modal-form__label">Email</label>
              <input 
                id="email" 
                type="email" 
                v-model="email" 
                placeholder="Введите Email" 
                class="modal-form__input" 
                required 
                aria-describedby="email-error"
              />
            </div>

            <div class="modal-form__input-block">
              <label for="password" class="modal-form__label">Пароль</label>
              <div class="modal-form__password">
                <input 
                  id="password" 
                  :type="showPassword ? 'text' : 'password'" 
                  v-model="password" 
                  placeholder="Введите пароль" 
                  class="modal-form__input" 
                  required 
                  aria-describedby="password-error"
                />
                <button 
                  type="button" 
                  class="modal-form__password-toggle" 
                  @click="togglePasswordVisibility" 
                  aria-label="Показать или скрыть пароль"
                >
                  <IconPasswordOff v-if="showPassword" />
                  <IconPasswordOn v-else/>
                </button>
              </div>
            </div>
          </div>

          <div class="modal-form__footer">
            <Button 
              type="submit"
              variant="text"
              size="large"
              label="Войти"
              aria-label="Отправить форму"
              class="modal-form__submit"
            />
            <div class="modal-form__register">
              <span>У вас нет аккаунта? </span>
              <a href="#" @click.prevent="modalStore.openModal('register')" class="modal-form__register-link">Зарегистрируйтесь</a>
            </div>
          </div>
          <div v-if="error" class="modal-form__error">
            <span>
              Пользователь с таким логином не найден
            </span>
          </div>
        </form>
      </section>
    </div>
  </transition>
</template>



<style lang="scss" scoped>
.modal-form {
  @include flex-center(column, center, normal);

  &__inputs {
    display: grid;
    @include responsive-gap(16px, 24px);
  }

  &__label {
    @include label-text;
    margin-bottom: 8px;
    padding-left: 24px;
    color: $gray;
  }

  &__input {
    width: 100%;
    margin-top: 8px;
    @include input-style();
    @include label-text;
  }

  &__password {
    @include flex-center(row, flex-start, center);
    position: relative;
  }

  &__password-toggle {
    padding-top: 8px;
    background: none;
    border: none;
    color: #6b7280;
    cursor: pointer;
    position: absolute;
    right: 28px;
    padding-top: 8px;
    top: 50%;
    transform: translateY(-50%);
  }

  &__input-footer {
    @include flex-center(row, space-between, center);
    padding: 0 24px;
  }

  &__error {
    @include text-small;
    color: $error;
    background-color: rgba($error, 0.1);
    padding: 8px 20px;
    border-radius: 24px;
    margin-top: 12px;

    @include breakpoint(md) {
      @include label-text;
    }
  }

  &__count {
    @include label-text;
    color: $gray;
  }

  &__footer {
    @include flex-center(column, center);
    gap: 12px;
    margin-top: 24px;

    @include breakpoint(md) {
      margin-top: 40px;
      flex-direction: row;
      justify-content: space-between;
    }
  }

  &__submit {
    @include breakpoint(md) {
      order: 2;
      max-width: 114px;
    }
  }

  &__register {
    @include flex-center(row, center);
    gap: 4px;
    @include text-small;
    color: $gray;

    @include breakpoint(md) {
      order: 1;
    }

    @include breakpoint(lg) {
      flex-direction: column;
    }

    @include breakpoint(xl) {
      flex-direction: row;
    }
  }

  &__register-link {
    @include link;
    color: $green-light;
  }
}

</style>
