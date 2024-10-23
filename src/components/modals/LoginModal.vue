<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount } from 'vue';
import Button from '../shared/ui/Button.vue';
import IconClose from '../icons/IconClose.vue';
import IconPasswordOn from '../icons/IconPasswordOn.vue';
import IconPasswordOff from '../icons/IconPasswordOff.vue';


const email = ref('');
const password = ref('');
const showPassword = ref(false);
const isModalOpen = ref(true);

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};

const login = () => {
  console.log('Email:', email.value);
  console.log('Password:', password.value);
};

const register = () => {
  console.log('Регистрация');
};

const closeModal = () => {
  isModalOpen.value = false;
};

const toggleBodyScroll = (disableScroll: boolean) => {
  if (disableScroll) {
    document.body.classList.add('no-scroll');
  } else {
    document.body.classList.remove('no-scroll');
  }
};

watch(isModalOpen, (newValue) => {
  toggleBodyScroll(newValue);
});

onMounted(() => {
  toggleBodyScroll(isModalOpen.value);
});

onBeforeUnmount(() => {
  toggleBodyScroll(false);
});

</script>

<template>
  <transition name="fade">
    <div v-if="isModalOpen" class="modal-overlay" @click.self="closeModal">
      <section class="modal" role="dialog" aria-labelledby="modal__title" aria-modal="true">
        <header class="modal__header">
          <h2 id="modal__title" class="modal__title">Вход в ваш аккаунт</h2>
          <Button 
            :icon="IconClose"
            variant="round"
            @click="closeModal" 
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
              <a href="#" @click.prevent="register" class="modal-form__register-link">Зарегистрируйтесь</a>
            </div>
          </div>
          <div class="modal-form__error">
            <span>
              Пользователь с таким логином не найден
            </span>
          </div>
        </form>
      </section>
    </div>
  </transition>
</template>



<style scoped lang="scss">
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(10, 31, 56, 0.7);
  display: flex;
  align-items: center;
  z-index: 1000;

  @include breakpoint(md) {
    justify-content: center;
  }
}

.modal {
  background: rgba(27, 47, 70, 1);
  border-radius: 40px;
  padding: 80px 16px;
  width: 100%;
  max-height: 100%;
  overflow-y: scroll;
  position: relative;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

  @include breakpoint(md) {
    max-width: 688px;
    padding: 56px;
    max-height: unset;
    overflow-y: unset;
  }

  @include breakpoint(lg) {
    max-width: 594px;
  }

  @include breakpoint(xl) {
    max-width: 780px;
    padding: 80px;
  }

  &__header {
    margin-bottom: 28px;

    @include breakpoint(md) {
      margin-bottom: 40px;
    }
  }

  &__title {
    @include h2;
    & {
      color: $white;
    }
  }

  &__close {
    position: absolute;
    top: 15px;
    right: 15px;

    @include breakpoint(md) {
      top: 20px;
      right: 20px;
    }
  }
}

.modal-form {
  display: flex;
  flex-direction: column;

  &__inputs {
    display: grid;
    gap: 16px;

    @include breakpoint(md) {
      gap: 24px;
    }
  }

  &__label {
    @include label-text;
    margin-bottom: 8px;
    padding-left: 24px;

    & {
      color: $gray;
    }
  }

  &__input {
    border: none;
    min-height: 72px;
    border-radius: 36px;
    padding: 10px 28px;
    @include label-text;
    color: $dark;
    width: 100%;
    box-sizing: border-box;
    margin-top: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid transparent;
    transition: all .15s;

    &::placeholder {
      @include label-text;
      color: $gray;
    }

    &:hover {
      border: 2px solid $green-light;
    }

    &:active {
      outline: 2px solid $green-light;
    }

    &:focus-visible {
      outline: none;
    }
  }

  &__password {
    display: flex;
    align-items: center;
    position: relative;
  }

  &__password-toggle {
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
    display: flex;
    justify-content: space-between;
    align-items: center;
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
    gap: 12px;
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
      max-width: 114px;
    }
  }

  &__register {
    display: flex;
    justify-content: center;
    gap: 5px;
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
