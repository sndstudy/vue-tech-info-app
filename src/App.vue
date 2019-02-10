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

  public async mounted(): Promise<void> {

    const params: any = { params:
                          {
                              page: '1',
                              perPage: '20',
                              query: 'tag:JavaScript',
                          },
                        };

    // Qiita APIから取得する処理
    const response: IAxiosResponse =
        await axios.get<IAxiosResponse>('http://localhost:3000/qiita', params).catch(
                                        (err: IAxiosResponse): IAxiosResponse => {
                                            return err;
                                        });

    this.items = response.data;


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

