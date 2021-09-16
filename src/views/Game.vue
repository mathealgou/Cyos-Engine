<template>
  <v-main>
    <v-btn to="./" class="mt-1 mb-2" :color="settings.style.optionButtons.color" :dark="settings.style.optionButtons.dark" >
      <v-icon>
        mdi-arrow-left
      </v-icon>
      Main menu
    </v-btn>
    <v-app-bar height="100" class="ma-10 d-flex justify-center align-center text-h3 text-center">
        {{currentPage.title}}
    </v-app-bar>
    <v-card class="ma-10 pa-5" >
      {{currentPage.text}}

     
    </v-card>
    <div width="80%" class="d-flex justify-center align-start flex-wrap text-center">
      <v-btn v-for="option in currentPage.options" :key="option.name" @click="goToPage(option.goTo)" class="ma-5" :color="settings.style.optionButtons.color" :dark="settings.style.optionButtons.dark">
        {{option.name}}
      </v-btn>
    </div>
  </v-main>
</template>

<script>
import { story } from "../stories/story";
import { settings } from "../settings/settings";
export default {
  data() {
    return {
      story: story,
      currentPage: story.page1,
      settings: settings,
    };
  },
  methods: {
    goToPage(page) {
      let newPage = `page${page}`;
      this.currentPage = this.story[newPage];
    },
  },
};
</script>

<style>
</style>