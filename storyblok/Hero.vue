<script setup>
defineProps({
  blok: {
    type: Object,
    default: () => ({})
  }
})
</script>

<template>
  <div class="hero">
    <div class="container grid grid-cols-2 mx-auto">
      <img
        v-if="blok.image"
        :src="`${blok.image.filename}/m/`"
        :alt="blok.image.alt"
        :title="blok.image.title"
      />
      <div>
        <h1 class="mb-4 font-sans text-4xl font-bold text-orange-500">
          {{ blok.title }}
        </h1>
        <p class="mb-4 text-lg text-gray-600">{{ blok.copy }}</p>
        <ul class="flex justify-end space-x-4" >
          <li v-for="button in blok.buttons" class="">
            <StoryblokComponent :blok="button" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
