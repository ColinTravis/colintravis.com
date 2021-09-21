<template>
  <div
    v-editable="blok"
    class="py-8 mb-6 text-5xl font-bold text-center">
    <h3 class="text-5xl">{{ blok.headline }}</h3>
    <h1 class="text-4xl">This is the teaser component</h1>
    <img v-if="blok.image.filename" class="h-48 w-full mb-4 object-cover" :src="blok.image.filename" :alt="blok.image.alt">
    <p v-if="blok.image.title"> {{blok.image.title}} </p> 
  </div>
</template>
 
<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true
    }
  }
}
</script>