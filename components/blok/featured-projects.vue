<template>
  <div v-editable="blok">
    <h2 class="pt-2 pl-6 text-lg text-gray-700 italic">{{ blok.title }}</h2>
    <ul class="flex py-6 mb-6">
      <li
        v-for="project in sortedProjects" :key="project._uid"
        class="flex-auto px-6" style="min-width: 33%">
        <project-teaser
          v-if="project.content"
          :project-link="project.full_slug"
          :project-content="project.content"/>
        <p v-else class="px-4 py-2 text-white bg-red-700 text-center rounded">This content loads on save. <strong>Save the entry & reload.</strong></p>
      </li>
    </ul>
  </div>
</template>
 
<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true
    }
  },
  computed: {
    sortedProjects() {
      // Load reference data/content from store
      const featuredProjects = this.$store.state.projects.projects.filter((project) => {
        return this.blok.project.includes(project.uuid)
      })
 
      // Enable the ordering of the project previews
      featuredProjects.sort((a, b) => {
        return this.blok.projects.indexOf(a.uuid) - this.blok.projects.indexOf(b.uuid);
      })
 
      return featuredProjects
    }
  }
}
</script>