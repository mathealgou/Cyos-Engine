<template>
  <v-main 
   class=" bg-no-repeat bg-cover  bg-white hero relative"
  :style="{ 'background-image': `url(${backgroundImage})` }">
    <transition-group mode="in-out" name="fade-in">
      <v-btn to="./" class="ma-10" :color="settings.style.optionButtons.color" :dark="settings.style.optionButtons.dark" key="v-btn">
        <v-icon>
          mdi-arrow-left
        </v-icon>
        Main menu
      </v-btn>
      <v-card class="ml-10 mr-10 d-flex pa-5 justify-center align-center text-h3 text-center" :key="currentPage.title">
          {{currentPage.title}}
      </v-card>
      <v-card class="mt-10 ml-10 mr-10 pa-5" :key="currentPage.text">
        {{currentPage.text}}
      </v-card>
      <div width="80%" class="d-flex justify-center align-start flex-wrap text-center" :key="currentPage.options[0].name">
        <v-btn v-for="option in currentPage.options" :key="option.name" @click="goToPage(option.goTo)" class="mt-10 ml-10 mr-10" :color="settings.style.optionButtons.color" :dark="settings.style.optionButtons.dark">
          {{option.name}}
        </v-btn>
      </div>
    </transition-group>
  </v-main>
</template>

<script lang="js">
import { story } from "../stories/story";
import { settings } from "../settings/settings";

export default {
  data() {
    return {
      story: story,
      currentPage: story.page1,
      settings: settings,
      backgroundImage: story.page1.backgroundImage,
      backgroundSong: story.page1.backgroundSong,
      audioPlayer: new Audio(),
    };
  },
  methods: {
    goToPage(page) {
      let newPage = `page${page}`;
      this.currentPage = this.story[newPage];
      this.backgroundImage = this.story[newPage].backgroundImage;
      this.backgroundSong = this.story[newPage].backgroundSong;
      this.audioPlayer.src = require("../music/".concat(this.backgroundSong));
      this.audioPlayer.volume = 0.3;
      this.audioPlayer.play();
    },
  },
  mounted() {
    this.audioPlayer.src = require("../music/".concat(this.backgroundSong));
    this.audioPlayer.volume = 0.3;
    if (this.audioPlayer.paused == true) {
      this.audioPlayer.play();
    }
  },
};
</script>

<style scoped>
.v-main {
  background: no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  -webkit-transition: background-image 0.5s ease-in-out;
  transition: background-image 0.5s ease-in-out;
}

.fade-in-enter-active {
  transition: opacity 300ms ease-in-out;
  transition-delay: 1s;
}

.fade-in-leave-active {
  transition: opacity 300ms ease-in-out;
}
.fade-in-enter,
.fade-in-leave-to {
  opacity: 0;
}
</style>