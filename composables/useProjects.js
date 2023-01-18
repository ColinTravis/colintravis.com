const state = reactive({
  projects: []
})

export function useProjects() {
  const storyblokApi = useStoryblokApi()

  async function fetchProjects() {
    const { data } = await storyblokApi.get('cdn/stories/', {
      version: process.env.NODE_ENV === 'production' ? 'published' : 'draft',
      starts_with: 'projects/',
      //   fetch internally, instead of getting UUID - not working in API currently
      resolve_relations: 'category',
      is_startpage: false
    })

    // Workaround for fetching categories
    state.projects = data.stories.map((project) => ({
      ...project,
      content: {
        ...project.content,
        category: data.rels.find(
          ({ uuid }) => uuid === project.content.category
        )
      }
    }))
  }
  async function fetchProjectBySlug(slug, string) {
    try {
      const { data } = await storyblokApi.get('cdn/stories/', {
        version: process.env.NODE_ENV === 'production' ? 'published' : 'draft',
        starts_with: 'projects/',
        by_slugs: '*/' + slug,
        //   fetch internally, instead of getting UUID - not working in API currently
        resolve_relations: 'category',
        is_startpage: false
      })
      const story = data.stories[0]
      return story
    } catch (error) {
      console.error(error)
    }
  }
  return {
    ...toRefs(state),
    fetchProjects,
    fetchProjectBySlug
  }
}
