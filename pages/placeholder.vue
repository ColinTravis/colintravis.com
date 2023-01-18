<script setup>
definePageMeta({
  layout: "layout-placeholder",
});
const story = await useStoryblok('placeholder', { version: 'draft' })
</script>

<template>
    <main role="main">
      <StoryblokComponent v-if="story" :blok="story.content" />
    </main>
</template>
