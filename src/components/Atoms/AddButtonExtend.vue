<template>
  <div>
    <h3>Vue.extendで記述</h3>
    <v-btn @click="pushExtend" elevation="1">クリックボタン(Extend.ver)</v-btn>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "AddButtonExtend",
  methods: {
    pushExtend(): void {
      this.$emit("push_extend");
    },
  },
});
</script>
