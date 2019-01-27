<!-- https://vuetifyjs.com/ja/framework/default-markup -->
<template>
  <v-app>
    <Navigation />
    <Toolbar />
    <v-content>
      <TechInfoView />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TechInfoView from './components/TechInfoView.vue';
import Navigation from './components/Navigation.vue';
import Toolbar from './components/Toolbar.vue';

@Component({
  components: {
    TechInfoView,
    Navigation,
    Toolbar,
  },
})
export default class App extends Vue {

  private naviState: boolean = true;

}
</script>

<style lang="scss">
// #app {
//   font-family: 'Avenir', Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin-top: 60px;
// }
</style>

