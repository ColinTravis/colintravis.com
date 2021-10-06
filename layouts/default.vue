<template>
  <div>
    <Header />
    <h1 v-for="link in links" :key="link">{{link.navlink}}</h1>
    <Nuxt />
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [],
    };
  },
  async fetch() {
    this.$nuxt.context.app.$storyapi
      .get('cdn/stories/global/nav-main', {
        version: 'draft',
      })
      .then((res) => {
        // console.log(res.data.story.content.navlinks);
        this.links = res.data.story.content.navlinks.map((link) => {
          return {
            navlink: link.navlink,
          };
        });
      });
  },
  fetchOnServer: false,
};
</script>
