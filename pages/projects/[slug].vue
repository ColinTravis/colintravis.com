<script setup>
import { RichTextRenderer } from '@marvr/storyblok-rich-text-vue-renderer'
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
        <h1 class="mb-8 text-4xl font-bold text-ct-blue">
          {{ story.content.label }}
        </h1>
        <ul class="flex">
          <li class="flex items-center mr-4 text-gray-800">
            <Icon name="uil:clock" />
            <span class="ml-2"> {{ story.content.prep_time }} mins </span>
          </li>
          <li class="flex items-center text-gray-800">
            <Icon name="uil:user" />
            <span class="ml-2">
              Serves
              {{ story.content.diners }}
            </span>
          </li>
        </ul>
        <RichTextRenderer :document="story.content.ingredients"/>
        <!-- <pre>{{ story.content.ingredients }}</pre> -->
      </div>
    </header>
  </div>
</template>
