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

  private paramsJava: any = { params:
                          {
                              page: '1',
                              perPage: '5',
                              query: 'tag:Java',
                          },
                        };

  private readonly paramsJavaScript: any = { params:
                      {
                          page: '1',
                          perPage: '5',
                          query: 'tag:JavaScript',
                      },
                    };

  private readonly paramsPython: any = { params:
                      {
                          page: '1',
                          perPage: '5',
                          query: 'tag:Python',
                      },
                    };

  private readonly paramsVue: any = { params:
                      {
                          page: '1',
                          perPage: '5',
                          query: 'tag:vue.js',
                      },
                    };


  public async created(): Promise<void> {

    // Qiita APIから取得する処理
    const [a, b, c, d]: IAxiosResponse[] = await Promise.all([
      httpGet('http://localhost:3000/qiita', this.paramsJava),
      // httpGet('http://localhost:3000/qiita', paramsJavaScript),
      // httpGet('http://localhost:3000/qiita', paramsPython),
      // httpGet('http://localhost:3000/qiita', paramsVue),
    ]);

    // this.items = [...a.data, ...b.data, ...c.data, ...d.data];
    this.items = [...a.data];

  }

  private async requestTag(value: string): Promise<void> {

    const paramsAll: any = {
      'JavaScript' : this.paramsJavaScript,
      'Java' : this.paramsJava,
      'Python' : this.paramsPython,
      'vue.js' : this.paramsVue,
    };

    // Qiita APIから取得する処理
    const a: IAxiosResponse = await httpGet('http://localhost:3000/qiita', paramsAll[value]);
    this.items = [...a.data];

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

