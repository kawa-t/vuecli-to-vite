<template>
  <v-app id="app" class="app__wrapper">
    <v-main>
      <v-toolbar color="red lighten-3" dark>
        <v-toolbar-title>VueCLIからViteへ</v-toolbar-title>
        <v-spacer></v-spacer>
        <span>package.jsonのバージョン:{{ packageVersion }}</span>
      </v-toolbar>
      <v-layout width="90%">
        <v-flex><CountNumber /></v-flex>
        <v-flex><CountNumberExtend /></v-flex>
      </v-layout>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CountNumber from "./components/CountNumber.vue";
import CountNumberExtend from "./components/CountNumberExtend.vue";
@Component({
  components: {
    CountNumber,
    CountNumberExtend,
  },
})
export default class App extends Vue {
  get packageVersion(): string {
    return require("../package.json").version;
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.app__wrapper {
  display: flex;
  justify-content: center;
}
</style>
