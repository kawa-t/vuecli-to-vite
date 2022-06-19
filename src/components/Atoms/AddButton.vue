<template>
  <div>
    <h3>クラスコンポーネントで記述</h3>
    <v-btn @click="pushClassComponent" elevation="1">クリックボタン</v-btn>
  </div>
</template>
<script lang="ts">
import { Component, Emit, Vue } from "vue-property-decorator";
@Component
export default class AddButton extends Vue {
  @Emit("pushClassComponent")
  pushClassComponent(): void {}
}
</script>
