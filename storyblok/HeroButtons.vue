<script setup>
defineProps({
  blok: {
    type: Object,
    default: () => ({})
  }
})
</script>

<template>
  <button
    class="font-bold text-lg bg-blue-600 border-2 text-white rounded-full px-2 py-1.5"
    :class="
      blok.type === 'solid'
        ? 'bg-blue-600 text-white border-transparent'
        : 'bg-white text-indigo-600 border-indigo-600'
    "
  >
    {{ blok.label }}
  </button>
</template>
