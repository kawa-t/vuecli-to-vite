<template>
  <div>
    <p>you check button {{ countProp }} times</p>
    <p>yout score : {{ doubleCount }} points</p>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component({ components: {} })
export default class PlayGound extends Vue {
  @Prop()
  countProp: number;

  get doubleCount(): number {
    return this.countProp * 2;
  }
}
</script>
