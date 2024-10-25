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
const showPassword = ref(false);

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};

const register = () => {
  console.log('Регистрация:', email.value, password.value);
};

watch(
  () => modalStore.isRegisterModalOpen,
  (newValue) => {
    toggleBodyScroll(newValue);
  }
);
</script>

<template>
  <transition name="fade">
    <div v-if="modalStore.isRegisterModalOpen" class="modal-overlay" @click.self="modalStore.closeModals">
      <section class="modal modal-register" role="dialog" aria-labelledby="modal__title" aria-modal="true">
        <header class="modal__header">
          <h2 id="modal__title" class="modal__title">Регистрация</h2>
          <Button 
            :icon="IconClose"
            variant="round"
            @click="modalStore.closeModals"
            aria-label="Закрыть окно" 
            class="modal__close"
          />
        </header>
        
        <form @submit.prevent="register" class="modal-form">
          <div class="modal-form__inputs">
            <div class="modal-form__input-block">
              <label for="email" class="modal-form__label">Email</label>
              <input 
                id="email" 
                type="email"
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
                  v-model="password" 
                  :type="showPassword ? 'text' : 'password'"
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

            <div class="modal-form__input-block">
              <label for="password" class="modal-form__label">Пароль еще раз</label>
              <div class="modal-form__password">
                <input 
                  id="password" 
                  :type="showPassword ? 'text' : 'password'" 
                  v-model="password" 
                  placeholder="Пароль еще раз" 
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
              label="Зарегистрироваться"
              aria-label="Отправить форму"
              class="modal-form__submit"
            />
            <div class="modal-form__register">
              <span>У вас есть аккаунт? </span>
              <a href="#" @click.prevent="modalStore.openLoginModal" class="modal-form__register-link">Войдите</a>
            </div>
          </div>
        </form>
      </section>
    </div>
  </transition>
</template>

<style scoped lang="scss">
.modal-overlay {
  @include modal-overlay;
}

.modal {
  @include modal;
  padding: 40px 16px;

  @include breakpoint(md) {
    padding: 56px;
  }

  @include breakpoint(lg) {
    max-width: 594px;
  }

  @include breakpoint(xl) {
    max-width: 780px;
    padding: 80px;
  }

  &__header {
    @include modal-header;
  }

  &__title {
    @include modal-title;
  }

  &__close {
    @include modal-close;
  }
}

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
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    margin-top: 24px;

    @include breakpoint(md) {
      margin-top: 40px;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  }

  &__submit {
    @include breakpoint(md) {
      order: 2;
      max-width: 270px;
    }
  }

  &__register {
    display: flex;
    justify-content: center;
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
