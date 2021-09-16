<template>
  <v-main>
    <v-app-bar height="200" class="d-flex justify-center align-center text-h1 text-center">
        {{settings.gameTitle}}
    </v-app-bar>
  </v-main>
</template>

<script>
import { settings } from "../settings/settings";
export default {
  props: ["title"],
  data() {
    return {
      settings: settings,
    };
  },
};
</script>

<style scoped>
</style>