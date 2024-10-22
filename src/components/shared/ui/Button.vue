<script setup lang="ts">
import { computed } from 'vue';

interface ButtonProps {
  label?: string;
  size?: "small" | "medium" | "large";
  color?: "green";
  type?: "button" | "submit";
  variant?: "text" | "contained" | "round";
  icon?: any; 
  disabled?: boolean;
}

const props = withDefaults(defineProps<ButtonProps>(), {
  size: "medium",
  color: "green",
  type: "button",
  variant: "contained",
  disabled: false,
});

const hasIcon = computed(() => !!props.icon);
const hasLabel = computed(() => !!props.label);
</script>

<template>
  <button
    :type="type"
    :disabled="disabled"
    class="button"
    :class="[
      `button--${size}`,
      `button--${color}`,
      `button--${variant}`,
      { 'button--with-icon': hasIcon },
    ]"
  >
    <span v-if="icon" class="button__icon">
      <component :is="icon" />
    </span>

    <span v-if="hasLabel" class="button__label">{{ label }}</span>
  </button>
</template>

<style scoped>

</style>
