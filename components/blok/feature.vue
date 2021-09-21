<template>
  <div
    v-editable="blok"
    class="py-2 text-center">
    <p v-if="blok.icon">{{blok.icon.alt}}</p>
    <img
    v-if="blok.icon"
      class="mx-auto w-1/6"
      :src="blok.icon.filename">
    <h1 class="text-lg">{{ blok.name }}</h1>
    <p class="text-gray-600">
      {{ blok.description }}
    </p>
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