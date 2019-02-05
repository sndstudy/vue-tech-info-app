<template>
    <v-toolbar app color="teal lighten-3">
      <v-toolbar-side-icon v-on:click='sideIcon'></v-toolbar-side-icon>
      <v-toolbar-title>TechInfo</v-toolbar-title>
      <!-- <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat>Link One</v-btn>
        <v-btn flat>Link Two</v-btn>
        <v-btn flat>Link Three</v-btn>
      </v-toolbar-items> -->
    </v-toolbar>
</template>


<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';

@Component
export default class Navigation extends Vue {

  @Emit('sideIcon')
  private emitSideIcon(): void {
    return;
  }

  private sideIcon(): void {
    this.emitSideIcon();
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// h3 {
//   margin: 40px 0 0;
// }
// ul {
//   list-style-type: none;
//   padding: 0;
// }
// li {
//   display: inline-block;
//   margin: 0 10px;
// }
// a {
//   color: #42b983;
// }
</style>
