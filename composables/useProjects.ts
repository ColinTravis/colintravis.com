const state = reactive({
  projects: []
})

export function useProjects() {
  const storyblokApi = useStoryblokApi()
  async function fetchProjects() {
    const { data } = await storyblokApi.get('cdn/stories/', {
      version: process.env.NODE_ENV === 'production' ? 'published' : 'draft',
      // folder to fetch
      starts_with: 'projects/',
      //   avoids "projects" index page
      is_startpage: false
    })

    state.projects = data.stories
  }

  const formattedProjects = computed(() =>
    state.projects
      .map(({ name, uuid, content }) => ({
        name,
        uuid,
        heroImage: content.heroImage
      }))
      .slice(0, 3)
  )

  return {
    ...toRefs(state),
    fetchProjects,
    formattedProjects
  }
}
