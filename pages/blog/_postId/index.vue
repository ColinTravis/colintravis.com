<template>
  <div id="post" :editable="blok">
    <div class="post-thumbnail"></div>
    <h1>{{ title }}</h1>
    <rich-text-renderer :document="content" />
  </div>
</template>

<script>
export default {
  asyncData(context) {
    return context.app.$storyapi
      .get(`cdn/stories/blog/${context.params.postId}`, {
        version: 'draft',
      })
      .then((res) => {
        console.log(res.data);
        return {
          image: res.data.story.content.thumbnail,
          title: res.data.story.content.title,
          content: res.data.story.content.content,
        };
      });
  },
  mounted() {
  },
};
</script>
