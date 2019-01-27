<template>
    <v-navigation-drawer app dark stateless v-model="drawer">
      <v-list>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Home</v-list-tile-title>
        </v-list-tile>
        <v-list-group prepend-icon="account_circle" v-for="(item, index) in naviItems" :key="index">
            <v-list-tile slot="activator">
              <v-list-tile-content>
                <v-list-tile-title>{{item.siteName}}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile v-on:click='' v-for="(tag, index) in item.tagNames" :key="index">
              <v-list-tile-action>
                <v-icon></v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{tag.tagName}}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
      </v-list>
    </v-navigation-drawer>
</template>


<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

@Component
export default class Navigation extends Vue {

  private naviItems: object[] = [
    {
      siteName: 'Qiita',
      tagNames: [
        {tagName: 'JavaScript'},
        {tagName: 'Java'},
      ],
    },
    {
      siteName: 'Qiita2',
      tagNames: [
        {tagName: 'JavaScript'},
        {tagName: 'Java'},
      ],
    },
  ];

  @Prop()
  private naviState!: boolean;

  private drawer: boolean = false;

  @Watch('naviState')
  private setDrawer(): void {
    // 親コンポーネントから直接値を渡すとエラーになるため
    this.drawer = !this.drawer;
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
