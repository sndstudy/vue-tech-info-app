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

  private url: string = 'https://tech-info-server.herokuapp.com/';

  public async created(): Promise<void> {

    try {

      // Qiita APIから取得する処理
      const response: IAxiosResponse = await httpGet(`${this.url}qiita`, paramsJavaScript).catch(() => {
                                                          throw new Error('クライアントError');
                                                        });;

      this.items = [...response.data];

    } catch (err) {

    }

  }

  private async requestTag(value: {siteName: string, tagName: string}): Promise<void> {

    const paramsAll: {[key: string]: QueryParams} = {
      'JavaScript' : paramsJavaScript,
      'Java' : paramsJava,
      'Python' : paramsPython,
      'vue.js' : paramsVue,
    };

    try {
      const response: IAxiosResponse | any = await httpGet(`${this.url}${value.siteName.toLowerCase()}`,
                                                      paramsAll[value.tagName]).catch(() => {
                                                        throw new Error('クライアントError');
                                                      });
      this.items = [...response.data];
    } catch (err) {
      console.log(err);
    }

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

