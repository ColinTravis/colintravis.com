<template>
  <section class="container max-w-3xl">
    <Header />
    <PostPreview
      v-for="post in posts"
      :key="post.id"
      :title="post.title"
      :excerpt="post.previewText"
      :id="post.id"
      class="shadow-md block p-6"
    />
  </section>
</template>

<script>
export default {


// let one = "https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt"
// let two = "https://api.storyblok.com/v1/cdn/datasources/?token=wANpEQEsMYGOwLxwXQ76Ggtt"
// let three = "https://api.storyblok.com/v1/cdn/stories/vue?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt"
 
// const requestOne = axios.get(one);
// const requestTwo = axios.get(two);
// const requestThree = axios.get(three);
 
// axios.all([requestOne, requestTwo, requestThree]).then(axios.spread((...responses) => {
//   const responseOne = responses[0]
//   const responseTwo = responses[1]
//   const responesThree = responses[2]
//   // use/access the results 
// })).catch(errors => {
//   // react on errors.
// })


  asyncData(context) {
    return context.app.$storyapi.get('cdn/stories', {
        version: process.env.NODE_ENV == 'production' ? 'published' : 'draft',
        starts_with: 'blog/',
      })
      .then((res) => {
        console.log(res);
        return {
          posts: res.data.stories.map((blogPost) => {
            return {
              id: blogPost.slug,
              title: blogPost.content.title,
              content: blogPost.content.content,
              previewText: blogPost.content.summary,
              thumbnailUrl: blogPost.content.thumbnail,
            };
          }),
        };
      })
  },
};
</script>
