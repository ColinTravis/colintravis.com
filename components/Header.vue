<template>
  <header
    class="
      bg-white
      text-black
      ||
      z-10
      h-16
      px-8
      w-full
      ||
      flex
      items-center
      ||
      top-0
      left-0
      mb-8
    "
  >
    <div class="flex w-full items-center">
      <div class="mr-auto flex flex-row space-x-4 items-center">
        <div class="w-8">
          <CTLogoDark />
        </div>
        <h1 class="text-xl">Colin Travis</h1>
      </div>
    </div>
    <nav>
      <ul>
        <li v-for="(link, linkIndex) in links" :key="linkIndex">
          <nuxt-link class="text-teal-600 hover:underline" :to="link.href">
            {{ link.name }}
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'projects', href: '/projects' },
        { name: 'blog', href: '/blog' },
      ],
    };
  },
};
</script>
