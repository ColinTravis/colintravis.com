<template>
  <section>
<p>{{title}}</p>
<h1>{{content}}</h1>

  </section>
</template>

<script>
export default {
  asyncData(context) {
    return context.app.$storyapi.get('cdn/stories/about', {
        version: 'draft'
    }).then(res => {
        return {
            title: res.data.story.content.title,
            content: res.data.story.content.content
        }
    });
  },
};
</script>

<style></style>
