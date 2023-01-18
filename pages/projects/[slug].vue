<script setup>
const route = useRoute()
const { slug } = route.params

const { fetchProjectBySlug } = useProjects()
const story = await fetchProjectBySlug(slug)
</script>

<template>
  <div>
    <header v-if="story">
      <img
        class="w-1/4 rounded-lg aspect-square"
        :src="story.content.heroImage.filename"
        :alt="story.content.heroImage.alt"
      />
      <div class="relative overflow-hidden bg-white rounded-lg shadow-md">
        <h1 class="mb-8 text-4xl font-bold text-ct-blue"> {{ story.content.label }}</h1>

      </div>
    </header>
  </div>
</template>
