<template>
  <nuxt-link :to="`/blog/${id}`">
    <article class="post-preview">
      <!-- <div
        :style="{ backgroundImage: 'url(' + thumbnailImage + ')' }"
        class="post-preview-thumbnail"
      > -->
        <div class="post-preview">
          <h1>{{ title }}</h1>
          <p>{{ excerpt }}</p>
        </div>
      <!-- </div> -->
    </article>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    excerpt: {
      type: String,
      required: true,
    },
    thumbnailImage: {
      type: String,
      required: false,
    },
    id: {
      type: String,
      required: true,
    },
  },
};
</script>
