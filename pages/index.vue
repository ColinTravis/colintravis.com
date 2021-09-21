<template>
  <div class="bg-grey-lighter h-screen font-stolzl">
    <div class="container mx-auto h-full flex justify-center items-center">
      <div class="w-auto sm:w-auto lg:w-1/3 px-4">
        <div class="border-teal p-4 border-t-12 bg-white mb-6 rounded-lg shadow-xl">
          <logo class="mx-auto block w-1/2"/>
          <h1 class="text-center mb-8">ColinTravis.com</h1>
          <!-- <div class="flex flex-col items-center justify-between">
            <h1 class="text-center font-medium text-xl mb-4">Exciting new things are coming.</h1>
            <p class="text-center font-light"> A new build of this website based on Nuxt.js, with a blazing fast headless CMS is prepping to deploy...</p>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>