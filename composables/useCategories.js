const state = reactive({
  categories: []
})

export function useCategories() {
  const storyblokApi = useStoryblokApi()
  async function fetchCategories() {
    const { data } = await storyblokApi.get('cdn/stories/', {
      version: process.env.NODE_ENV === 'production' ? 'published' : 'draft',
      // folder to fetch
      starts_with: 'categories/',
    //   avoids "categories" index page
      is_startpage: false
    })

    state.categories = data.stories
  }

  const formattedCategories = computed(() =>
    state.categories.map(({ name, uuid, content }) => ({
      name,
      uuid,
      icon: content.icon
    })).slice(0,3)
  )

  return {
    ...toRefs(state),
    fetchCategories,
    formattedCategories
  }
}
