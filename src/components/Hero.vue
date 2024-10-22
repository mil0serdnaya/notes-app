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
        <source srcset="../assets/images/hero-lg.png" media="(min-width: 1359px)" />
        <source srcset="../assets/images/hero-md.png" media="(min-width: 767px)" />
        <img src="../assets/images/hero.png" alt="Рука у доски с заметками" class="hero__image" />
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

  @include breakpoint(md) {
    padding: 40px 40px 0 40px;
  }

  @include breakpoint(lg) {
    flex-direction: row;
    justify-content: space-between;
    padding: 0 80px;
  }

  @include breakpoint(xl) {
    padding: 0 160px;
  }

  &__text-block {
    text-align: center;
    display: grid;
    gap: 20px;
    margin-bottom: 20px;

    @include breakpoint(lg) {
      text-align: left;
      gap: 40px;
      margin: 0;
    }
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
    @include breakpoint(lg) {
      max-width: 400px;
    }
  }

  &__image-block {
    display: flex;
    align-items: center;
  }

  &__image {
    width: 100%;
    height: auto;
  }

  &__svg {
    width: 100%;
    height: auto;
  }
}

</style>