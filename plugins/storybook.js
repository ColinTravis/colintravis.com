import { StoryblokVue, apiPlugin } from "@storyblok/vue";
import { defineNuxtPlugin, useRuntimeConfig } from "#app";

export default defineNuxtPlugin(({ vueApp }) => {
  const { storyblok } = useRuntimeConfig();
  const deepCopy = JSON.parse(JSON.stringify(storyblok));
  deepCopy.use = [apiPlugin]
  vueApp.use(StoryblokVue, deepCopy);
});
