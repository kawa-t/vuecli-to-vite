<template>
  <v-app id="app" class="app__wrapper">
    <v-content>
      <v-main>
        <v-layout>
          <v-flex><CountNumber /></v-flex>
          <v-flex><CountNumberExtend /></v-flex>
        </v-layout>
      </v-main>
    </v-content>
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
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.app__wrapper {
  display: flex;
  justify-content: center;
}
</style>
