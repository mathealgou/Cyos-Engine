<template>
  <transition-group mode="in-out" name="fade-in">
    <div :key="outTitleBar">
      <title-bar />
      <div class="d-flex justify-center">
        <v-btn @click="play" class="ma-2" color="green" dark x-large>Play</v-btn>
      </div>
    </div>
  </transition-group>
</template>

<script>
import { settings } from "../settings/settings";
import titleBar from "../components/TitleBar.vue";

export default {
  components: { titleBar },
  data() {
    return {
      settings: settings,
      outTitleBar: false,
    };
  },
  methods: {
    play() {
      this.outTitleBar = true;
      setTimeout(() => {
        this.$router.push("/game");
      }, 450);
    },
  },
};
</script>

<style scoped>
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