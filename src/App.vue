<template>
  <v-app>
    <Navigation />
    <Toolbar />
    <v-content>
      <v-container fluid>
        <!-- <router-view></router-view> -->
      </v-container>
    </v-content>
    <!-- <v-footer app></v-footer> -->
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';
import Navigation from './components/Navigation.vue';
import Toolbar from './components/Toolbar.vue';

@Component({
  components: {
    HelloWorld,
    Navigation,
    Toolbar,
  },
})
export default class App extends Vue {}
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

