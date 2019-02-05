<template>
  <v-card hover dark>
    <v-card-title primary-title>
      <span class="square">a</span>
      <a v-bind:href="item.url">{{item.title}}</a>
    </v-card-title>
    <div>{{item.tag}}</div>
    <div>
      <v-chip small label color="primary" text-color="white" v-for="tag in item.tags" :key="tag.index">{{tag}}</v-chip>
    </div>
  </v-card>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Item } from '../interface/item';

@Component
export default class TechInfoItem extends Vue {
  @Prop() private item!: Item;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

a {
  color: #42b983;
  font-size: 20px;
}

.square {
	display: inline-block;
	width: 30px;
	height: 30px;
	background: rgb(80, 231, 110);
  margin-right: 10px;
  color: white;
  font-size: 20px;
}
</style>
