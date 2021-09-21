<template>
  <nuxt-link
    :to="projectLink"
    class="project-teaser block py-4 px-6 border rounded border-gray-500">
    <h2 class="pt-2 pb-4 text-2xl font-bold">
      {{ projectContent.name }}
    </h2>
    <p class="pb-6 leading-relaxed">
      {{ projectContent.intro }}
    </p>
  </nuxt-link>
</template>
 
<script>
export default {
  props: {
    projectContent: {
      type: Object,
      required: true
    },
    projectLink: {
      type: String,
      required: true
    }
  }
}
</script>
 
<style>
.project-teaser:hover {
  box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.75);
}
</style>