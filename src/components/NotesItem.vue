<script setup>
import IconClose from '@/components/icons/IconClose.vue';
import Button from '@/components/shared/ui/Button.vue';
</script>

<template>
  <article class="note">
    <header class="note__header">
      <h2 class="note__title">Заголовок</h2>
    </header>
    <p class="note__content">
      А также явные признаки победы институционализации могут быть объединены в целые кластеры себе подобных.
    </p>
    <footer class="note__footer">
      <Button label="Удалить" :icon="IconClose" aria-label="Удалить заметку"/>
    </footer>
  </article>
</template>

<style lang="scss" scoped>
.note {
  background-color: $green-light;
  border-radius: 12px;
  box-shadow: 0px 15px 15px -10px rgba(0, 0, 0, 0.4);
  position: relative;
  align-self: start;
  clip-path: polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 0 100%);

  &::after {
    content: '';
    position: absolute;
    display: block;
    width: 40px;
    height: 40px;
    background-color: $green;
    top: 0;
    right: 0;
    border-bottom-left-radius: 12px;
  }

  &__header {
    border-bottom: 1px solid $green-middle;
    padding: 20px 20px 20px 28px;
  }

  &__title {
    color: $white;
    @include h4;
    margin: 0;
  }

  &__content {
    flex-grow: 1;
    color: $white;
    @include text-normal;
    padding: 20px 28px 28px 28px;
  }

  &__footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 8px;

    .button__icon{
      padding-top: 5px;
    }
  }
}
</style>