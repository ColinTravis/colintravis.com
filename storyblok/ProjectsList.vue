<script setup>
defineProps({
  blok: {
    type: Object,
    default: () => ({})
  }
})
const { projects, fetchProjects } = useProjects()
await fetchProjects()
</script>

<template>
  <div class="w-full p-20">
    <div class="container mx-auto">
      <h2 class="w-2/3 mb-8 text-4xl font-bold">{{ blok.title }}</h2>
    </div>
    <div class="grid grid-cols-3 gap-4 py-8">
      <article
        v-for="{ uuid, content } of projects"
        :key="uuid"
        class="overflow-hidden bg-white rounded-lg shadow-md"
      >
        <img v-if="content.heroImage" :src="content.heroImage.filename" class="w-full" :alt="content.heroImage.alt" />
        <div class="relative p-4 min-h-[100px]">
          <h3 class="font-bold text-ct-blue">{{ content.label }}</h3>
          <span class="absolute p-4 bg-gray-300 rounded-full right-8 -top-[33px]">
            <img class="w-[36px] h-[36px]" :src="content.category.content.icon.filename" alt="">
          </span>
        </div>
      </article>
    </div>
  </div>
</template>
