<script setup>
defineProps({
  blok: {
    type: Object,
    default: () => ({})
  }
})
</script>

<template>
    <div class="w-full">
        <div class="container mx-auto">
            <h2 class="w-2/3 mb-8 text-4xl font-bold">{{blok.title}}</h2>
        </div>
    </div>
</template>
