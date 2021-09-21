<template>
  <section>
    <Header/>
    <h2 class="py-10 text-center font-bold text-4xl">projects Overview</h2>
    {{ projects }}
    <ul class="flex py-6 mb-6">
      <li
        v-for="project in stories" :key="project._uid"
        class="flex-auto px-6" style="min-width: 33%">
        <project-teaser
          v-if="project.content"
          :project-link="project.full_slug"
          :project-content="project.content"/>
        <p v-else class="px-4 py-2 text-white bg-red-700 text-center rounded">This content loads on save. <strong>Save the entry & reload.</strong></p>
      </li>
    </ul>
  </section>
</template>
 
<script>
export default {
  data () {
    return {
      stories: []
    }
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
  }
}
</script>