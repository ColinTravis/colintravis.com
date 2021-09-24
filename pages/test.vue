<template>
  <section>
    <!-- <div>
        <h1>Data from Storyblok:</h1>
        {{story}}
    </div> -->
    <component
      v-if="story.content.component"
      :key="story.content._uid"
      :blok="story.content"
      :is="story.content.component"
    />
  </section>
</template>

<script>
export default {
  data() {
    return {
      story: { content: {} },
    };
  },
  mounted() {
    //   For live-updates
    this.$storybridge(() => {
      const storyblokInstance = new StoryblokBridge();

      // Use the input event for instant update of content
      storyblokInstance.on('input', (event) => {
        console.log(this.story.content);
        if (event.story.id === this.story.id) {
          this.story.content = event.story.content;
        }
      });

      // Use the bridge to listen the events
      storyblokInstance.on(['published', 'change'], (event) => {
        // window.location.reload()
        this.$nuxt.$router.go({
          path: this.$nuxt.$router.currentRoute,
          force: true,
        });
      });
    });
  },

  asyncData (context) {
    return context.app.$storyapi.get('cdn/stories', {
      starts_with: 'projects/',
      version: 'draft'
    }).then((res) => {
      return res.data
    }).catch((res) => {
      if (!res.response) {
        console.error(res)
        context.error({ statusCode: 404, message: 'Failed to receive content form api' })
      } else {
        console.error(res.response.data)
        context.error({ statusCode: res.response.status, message: res.response.data })
      }
    })
  },

  asyncData(context) {
    // // This what would we do in real project
    // const version = context.query._storyblok || context.isDev ? 'draft' : 'published'
      let version = context.query._storyblok || context.isDev ? 'draft' : 'published';
    // const fullSlug = (context.route.path == '/' || context.route.path == '') ? 'home' : context.route.path

    //  // Loading reference data - Projecs in our case
    // if(context.store.state.projects.loaded !== '1') {

    //   let projectsRefRes = await context.app.$storyapi.get(`cdn/stories/`, { starts_with: 'projects/', version: 'draft' })
    //   context.store.commit('projects/setProjects', projectsRefRes.data.stories)
    //   context.store.commit('projects/setLoaded', '1')
    // Load the JSON from the API - loading the home content (index page)
    return context.app.$storyapi
      .get('cdn/stories/home', {
        version: version,
      })
      .then((res) => {
        return res.data;
      })
      .catch((res) => {
        if (!res.response) {
          console.error(res);
          context.error({
            statusCode: 404,
            message: 'Failed to receive content form api',
          });
        } else {
          console.error(res.response.data);
          context.error({
            statusCode: res.response.status,
            message: res.response.data,
          });
        }
      });
  },
};
</script>
