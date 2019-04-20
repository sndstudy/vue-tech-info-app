<!-- https://vuetifyjs.com/ja/framework/default-markup -->
<template>
  <v-app>
    <Navigation v-bind:naviState="naviState"/>
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

  public async created(): Promise<void> {

    const paramsJava: any = { params:
                          {
                              page: '1',
                              perPage: '5',
                              query: 'tag:Java',
                          },
                        };

    const paramsJavaScript: any = { params:
                      {
                          page: '1',
                          perPage: '5',
                          query: 'tag:JavaScript',
                      },
                    };

    const paramsPython: any = { params:
                      {
                          page: '1',
                          perPage: '5',
                          query: 'tag:Python',
                      },
                    };

    const paramsVue: any = { params:
                      {
                          page: '1',
                          perPage: '5',
                          query: 'tag:vue.js',
                      },
                    };

    // Qiita APIから取得する処理
    const [a, b, c, d]: IAxiosResponse[] = await Promise.all([
      httpGet('http://localhost:3000/qiita', paramsJava),
      // httpGet('http://localhost:3000/qiita', paramsJavaScript),
      // httpGet('http://localhost:3000/qiita', paramsPython),
      // httpGet('http://localhost:3000/qiita', paramsVue),
    ]);

    // this.items = [...a.data, ...b.data, ...c.data, ...d.data];
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

