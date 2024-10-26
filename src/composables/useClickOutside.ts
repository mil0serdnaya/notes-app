import { onMounted, onUnmounted } from 'vue';
import type { Ref } from 'vue';

export function useClickOutside(
  elementRef: Ref<HTMLElement | null>,
  callback: (event: MouseEvent) => void
): void {
  const onClickOutside = (event: MouseEvent) => {
    if (elementRef.value && !elementRef.value.contains(event.target as Node)) {
      callback(event);
    }
  };

  onMounted(() => {
    document.addEventListener('click', onClickOutside);
  });

  onUnmounted(() => {
    document.removeEventListener('click', onClickOutside);
  });
}
