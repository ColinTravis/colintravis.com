<template>
  <header
    class="bg-white text-black || z-10 h-16 px-8 w-full || flex items-center || fixed top-0 left-0 "
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
        <li>
          <nuxt-link
            class="text-teal-600 hover:underline"
            to="/test">
            Home
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            class="text-teal-600 hover:underline"
            to="/projects">
            Projects
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>
