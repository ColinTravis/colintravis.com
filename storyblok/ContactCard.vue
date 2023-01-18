<script setup>
defineProps({
  blok: {
    type: Object,
    default: () => ({})
  }
})
</script>

<template>
  <div class="h-screen bg-grey-lighter font-stolzl">
    <div class="container flex items-center justify-center h-full mx-auto">
      <div class="w-auto px-4 sm:w-auto lg:w-1/3">
        <div
          class="flex flex-col p-4 mb-6 bg-white rounded-lg shadow-xl border-teal border-t-12"
        >
          <IconsCTLogo class="block w-1/2 mx-auto" />

          <h1 class="mb-5 text-center">{{ blok.url }}</h1>
          <p class="mb-5 text-center">{{ blok.copy }}</p>
          <a class="mx-auto" :href="blok.socialUrl">
            <IconsGithubLogo
              class="w-8 h-8 transition-colors duration-200 ease-in-out hover:text-ct-blue"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
