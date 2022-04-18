<script setup>
import IconCheck from '../icons/IconCheck.vue';

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['update:modelValue']);
</script>

<template>
  <label class="relative cursor-pointer inline-block">
    <input
      type="checkbox"
      class="absolute opacity-0 cursor-pointer"
      :checked="props.modelValue"
      @input="emit('update:modelValue', !props.modelValue)"
    />
    <div
      class="w-4 h-4 rounded border-2 border-grey-250 flex items-center justify-center"
      :class="{ ' bg-blue-400 border-none': props.modelValue }"
    >
      <IconCheck />
    </div>
  </label>
</template>
