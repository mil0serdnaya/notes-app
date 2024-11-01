<script setup>
import IconClose from '@/components/icons/IconClose.vue';
import Button from '@/components/shared/ui/Button.vue';
</script>

<template>
  <section class="notes">
    <ul class="notes__list">
      <li class="notes__item">
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
      </li>
      <li class="notes__item">
        <article class="note">
          <header class="note__header">
            <h2 class="note__title">Заголовок</h2>
          </header>
          <p class="note__content">
            Не следует, однако, забывать, что базовый вектор развития предопределяет высокую востребованность позиций, занимаемых участниками в отношении поставленных задач...
          </p>
          <footer class="note__footer">
            <Button label="Удалить" :icon="IconClose" aria-label="Удалить заметку"/>
          </footer>
        </article>
      </li>
      <li class="notes__item">
        <article class="note">
          <header class="note__header">
            <h2 class="note__title">Заголовок</h2>
          </header>
          <p class="note__content">
            Не следует, однако, забывать, что базовый вектор развития предопределяет высокую востребованность позиций, занимаемых участниками в отношении поставленных задач...
          </p>
          <footer class="note__footer">
            <Button label="Удалить" :icon="IconClose" aria-label="Удалить заметку"/>
          </footer>
        </article>
      </li>
      <li class="notes__item">
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
      </li>
      <li class="notes__item">
        <article class="note">
          <header class="note__header">
            <h2 class="note__title">Заголовок</h2>
          </header>
          <p class="note__content">
            Не следует, однако, забывать, что базовый вектор развития предопределяет высокую востребованность позиций, занимаемых участниками в отношении поставленных задач...
          </p>
          <footer class="note__footer">
            <Button label="Удалить" :icon="IconClose" aria-label="Удалить заметку"/>
          </footer>
        </article>
      </li>
      <li class="notes__item">
        <article class="note">
          <header class="note__header">
            <h2 class="note__title">Заголовок</h2>
          </header>
          <p class="note__content">
            Не следует, однако, забывать, что базовый вектор развития предопределяет высокую востребованность позиций, занимаемых участниками в отношении поставленных задач...
          </p>
          <footer class="note__footer">
            <Button label="Удалить" :icon="IconClose" aria-label="Удалить заметку"/>
          </footer>
        </article>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
.notes {
  padding: 20px;

  @include breakpoint(md) {
    padding: 40px;
  }

  @include breakpoint(lg) {
    padding: 40px 80px;
  }

  @include breakpoint(xl) {
    padding: 40px 160px;
  }

  &__list {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;

    @include breakpoint(lg) {
      grid-template-columns: repeat(3, 1fr);
    }

    @include breakpoint(xl) {
      grid-template-columns: repeat(3, 1fr);
      gap: 40px;
    }
  }

  &__item {
    display: flex;
  }
}

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