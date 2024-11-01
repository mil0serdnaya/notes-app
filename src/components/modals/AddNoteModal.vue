<script setup lang="ts">
import { ref, watch } from 'vue';
import { useModalStore } from '@/stores/modalStore';
import { toggleBodyScroll } from '@/utils/utils';
import Button from '../shared/ui/Button.vue';
import IconClose from '../icons/IconClose.vue';

const modalStore = useModalStore();
const noteTitle = ref('');
const noteText = ref('');
const error = ref(null);

const createNote = () => {

};

watch(
  () => modalStore.isAddNoteModalOpen,
  (newValue) => {
    toggleBodyScroll(newValue);
  }
);

</script>

<template>
  <transition name="fade">
    <div v-if="modalStore.isAddNoteModalOpen" class="modal-overlay" @click.self="modalStore.closeModals">
      <section class="modal modal--add-note" role="dialog" aria-labelledby="modal__title" aria-modal="true">
        <header class="modal__header">
          <h2 id="modal__title" class="modal__title">Добавление заметки</h2>
          <Button 
            :icon="IconClose"
            variant="round"
            @click="modalStore.closeModals"
            aria-label="Закрыть окно"
            class="modal__close"
          />
        </header>
        
        <form @submit.prevent="createNote" class="modal-form">
          <div class="modal-form__inputs">
            <div class="modal-form__input-block">
              <label for="note-title" class="modal-form__label">Название заметки</label>
              <input 
                id="note-title" 
                type="text" 
                v-model="noteTitle"
                placeholder="Введите название" 
                class="modal-form__input" 
                required 
              />
              <div class="modal-form__info">
                <p v-show="1" class="modal-form__error-text">Сообщение об ошибке</p>
                <p class="modal-form__count">0/100</p>
              </div>
            </div>

            <div class="modal-form__input-block">
              <label for="note-text" class="modal-form__label">Текст заметки</label>
                <textarea 
                  id="note-text" 
                  rows="5" 
                  v-model="noteText"
                  maxlength="500"
                  placeholder="Введите текст"
                  class="modal-form__textarea" 
                  required>
                </textarea>
                <div class="modal-form__info">
                  <p v-show="1" class="modal-form__error-text">Сообщение об ошибке</p>
                  <p class="modal-form__count">0/100</p>
                </div>
            </div>
          </div>
          <div class="modal-form__footer">
            <Button 
              type="submit"
              variant="text"
              size="large"
              label="Добавить"
              aria-label="Добавить заметку"
              class="modal-form__submit"
            />
          </div>
        </form>
      </section>
    </div>
  </transition>
</template>



<style lang="scss" scoped>
.modal--add-note {
  padding: 24px 16px;
  @include modal;
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

  &__input,
  &__textarea {
    width: 100%;
    margin-top: 8px;
    @include input-style();
    @include label-text;
  }

  &__textarea {
    padding: 16px 28px;
    max-height: 168px;

    @include breakpoint(xl) {
      height: 244px;
      max-height: 244px;
    }
  }

  &__input-footer {
    @include flex-center(row, space-between, center);
    padding: 0 24px;
  }

  &__error-text {
    @include label-text;
    color: $error;
  }

  &__info {
    @include label-text;
    display: flex;
    justify-content: space-between;
    padding: 0 24px;
    margin-top: 8px;
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
      justify-content: flex-end;
    }
  }

  &__submit {
    @include breakpoint(md) {
      max-width: 150px;
    }
  }
}

</style>
