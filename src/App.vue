<!-- https://vuetifyjs.com/ja/framework/default-markup -->
<template>
  <v-app>
    <Navigation v-bind:naviState="naviState" @requestTag="requestTag"/>
    <Toolbar v-on:sideIcon='naviState = !naviState'/>
    <v-content>
      <TechInfoView v-bind:itemList="items" />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TechInfoView from './components/TechInfoView.vue';
import Navigation from './components/Navigation.vue';
import Toolbar from './components/Toolbar.vue';
import axios from 'axios';
import { IAxiosResponse } from './dto/axios_response';
import { IItemResponse } from './dto/item_response';
import { Item } from './interface/item';
import { httpGet } from './service/http-service';
import { paramsJava, paramsJavaScript, paramsPython, paramsVue, QueryParams } from './params/query_params';

@Component({
  components: {
    TechInfoView,
    Navigation,
    Toolbar,
  },
})
export default class App extends Vue {

  private naviState: boolean = true;
  private items: Item[] = [];

  public async created(): Promise<void> {

    // Qiita APIから取得する処理
    const response: IAxiosResponse = await httpGet('http://localhost:3000/qiita', paramsJavaScript);

    this.items = [...response.data];

  }

  private async requestTag(value: {siteName: string, tagName: string}): Promise<void> {

    const paramsAll: {[key: string]: QueryParams} = {
      'JavaScript' : paramsJavaScript,
      'Java' : paramsJava,
      'Python' : paramsPython,
      'vue.js' : paramsVue,
    };

    // Qiita APIから取得する処理
    const response: IAxiosResponse = await httpGet(`http://localhost:3000/${value.siteName.toLowerCase()}`,
                                                    paramsAll[value.tagName]);
    this.items = [...response.data];

  }

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

