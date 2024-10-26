<script setup lang="ts">
import { computed } from 'vue';

interface ButtonProps {
  label?: string;
  size?: "small" | "medium" | "large";
  type?: "button" | "submit";
  color?: "green" | "dark";
  variant?: "text" | "contained" | "round";
  icon?: any; 
  disabled?: boolean;
}

const props = withDefaults(defineProps<ButtonProps>(), {
  size: "medium",
  type: "button",
  color: "green",
  variant: "contained",
  disabled: false,
});

const hasLabel = computed(() => !!props.label);
</script>

<template>
  <button
    :type="type"
    :disabled="disabled"
    class="button"
    :class="[
      `button--${size}`,
      `button--${variant}`,
      `button--${color}`,
    ]"
  >
    <div v-if="icon" class="button__icon">
      <component :is="icon" />
    </div>

    <span v-if="hasLabel" class="button__label">{{ label }}</span>
  </button>
</template>

<style lang="scss">
.button {
  height: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: $white;
  border-radius: 32px;
  padding: 0 24px;
  gap: 12px;
  transition: all .15s ease-out;

  &:disabled {
    background-color: $gray;
  }

  &__label {
    @include btn-text;
    color: $white;
  }

  &--round {
    border-radius: 50%;
    width: 56px;
    padding: 0;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;

    .button__icon {
      padding-top: 4px;
    }
  }

  &--text {
    justify-content: center;
  }

  &--large {
    width: 100%;
  }

  &--green {
    background-color: $green-light;

    &:hover {
      background-color: $green-middle;
    }

    &:active {
      background-color: $green-dark;
    }
  }

  &--dark {
    background-color: $dark-middle;

    &:hover {
      background-color: $dark-light;
    }
  }
}
</style>
