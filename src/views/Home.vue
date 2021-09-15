<template>
  <div>
    <div class="d-flex justify-center">
    <v-btn to="" class="ma-2" color="success" x-large>{{settings.gameTitle}}</v-btn>
    </div>
  </div>
</template>

<script>
import { settings } from "../settings/settings";
export default {
  data() {
    return {
      settings: settings,
    };
  },
};
</script>

<style>
</style>