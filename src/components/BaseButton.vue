<script setup>
import { computed } from 'vue';

const props = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  outlined: {
    type: Boolean,
    default: false,
  },
  text: {
    type: Boolean,
    default: false,
  },
});

const defaultClasses = 'px-8 select-none rounded font-semibold';
const classes = computed(() => ({
  'bg-blue-400 text-white hover:bg-blue-200 active:bg-blue-600':
    !props.outlined && !props.text,
  'pointer-events-none': props.disabled,
  'opacity-80 bg-gray-300': props.disabled && !props.outlined && !props.text,
  'text-gray-300 border-gray-300': props.disabled && props.outlined,
  'text-blue-400 hover:text-blue-200 active:text-blue-600':
    props.outlined || props.text,
  'border border-blue-400 bg-transparent hover:border-blue-200 active:border-blue-600':
    props.outlined,
  'h-[42px]': !props.text,
  'h-5': props.text,
  'text-gray-300': props.disabled && props.text,
}));
</script>

<template>
  <button :class="[defaultClasses, classes]">
    <slot></slot>
  </button>
</template>
