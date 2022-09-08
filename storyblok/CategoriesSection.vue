<script setup>
defineProps({
  blok: {
    type: Object,
    default: () => ({})
  }
})

const { categories, fetchCategories, formattedCategories } = useCategories()

await fetchCategories()
</script>

<template>
  <section class="relative w-full bg-red-400 mt-50">
    <div>
      <h2>{{ blok.title }}</h2>
    </div>
    <ul class="grid grid-cols-3 gap-8">
        <li v-for="{ icon, name, uuid } of formattedCategories" :key="uuid">
            <div class="flex flex-col items-center justify-center flex-1 p-4 bg-white rounded-lg shadow-lg">
                <img v-if="icon" class="w-[76px] h-[76px] mb-4" :src="icon.filename" alt="">
                <h2>{{name}}</h2>
            </div>
        </li>
    </ul>
    <div>
      <img v-if="blok.image" class="w-[76px]" :src="blok.image.filename" :alt="blok.image.alt" />
    </div>
  </section>
</template>
