<template>
  <v-container grid-list-xl text-xs-center fluid>
    <v-layout wrap row>
      <v-flex xs8 offset-xs2 v-for="item in itemList" :key="item.index">
        <TechInfoItem v-bind:item="item" />
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import TechInfoItem from './TechInfoItem.vue';
import { Item } from '../interface/item';

@Component({
  components: {
    TechInfoItem,
  },
})
export default class TechInfoView extends Vue {

  @Prop()
  private itemList!: Item[];

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
