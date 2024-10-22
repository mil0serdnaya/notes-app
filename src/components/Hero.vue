<script setup lang="ts">
</script>

<template>
  <section class="hero" aria-labelledby="hero-heading">
    <div class="hero__text-block">
      <h1 id="hero-heading" class="hero__heading">Мои заметки</h1>
      <p class="hero__description">Не забывай о важном, храни его в облаке.</p>
    </div>
    <div class="hero__image-block">
      <picture>
        <source srcset="../assets/images/hero-xl.png" media="(min-width: 1919px)" />
        <source srcset="../assets/images/hero-lg.png" media="(min-width: 1365px)" />
        <source srcset="../assets/images/hero-md.png" media="(min-width: 767px)" />
        <img src="../assets/images/hero.png" alt="Рука у доски с заметками" class="hero__image" />
      </picture>

      <picture>
        <source srcset="../assets/images/svg/hero-back-xl.svg" media="(min-width: 1919px)" />
        <source srcset="../assets/images/svg/hero-back-lg.svg" media="(min-width: 1365px)" />
        <source srcset="../assets/images/svg/hero-back-md.svg" media="(min-width: 767px)" />
        <img src="../assets/images/svg/hero-back.svg" alt="Дополнительная графика" class="hero__svg" />
      </picture>
    </div>
  </section>
</template>

<style lang="scss">
.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 20px 0 20px;

  &__text-block {
    text-align: center;
    display: grid;
    gap: 20px;
    margin-bottom: 20px;
  }

  &__heading {
    @include h1;
    & {
      color: $white;
    }
  }

  &__description {
    @include h3;
    & {
      color: $gray;
    }
  }

  &__image-block {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__image {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  &__svg {
    width: 100%;
    height: auto;
  }
}

</style>