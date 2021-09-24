<template>
  <nuxt-link
    :to="projectLink"
    class="project-teaser block py-4 px-6 border rounded border-gray-500">
    PROJECT TEASER
    <h2 class="pt-2 pb-4 text-2xl font-bold">
      {{ projectContent.title }}
    </h2>
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
  },
computed : {
  resizeImaged(){
    const imageUrl = this.projectContent.hero_image
    if (typeof imageUrl !== 'undefined') {
      return imageUrl.filename.replace('//a.storyblok.com', '//img2.storyblok.com/300x250'
      )
    }
  }
}
}
</script>
 
<style>
.project-teaser:hover {
  box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.75);
}
</style>