<template>
  <div>
    <title-bar/>
    <div class="d-flex justify-center">
    <v-btn to="./game" class="ma-2" color="green" dark x-large>Play</v-btn>
    </div>
  </div>
</template>

<script>
import { settings } from "../settings/settings";
import titleBar from "../components/TitleBar.vue";

export default {
  components: { titleBar },
  data() {
    return {
      settings: settings,
    };
  },
};
</script>

<style>
</style>