<template>
  <div class="st-tabs">
    <div class="st-tabs-nav">

      <div class="st-tabs-nav-item" v-for="(t,index) in titles" :key="index"  @click="select(t)" :class="{selected: t=== selected}" >{{t}}</div>
    </div>


    <div class="st-tabs-content">
      <!-- <component :is="defaults[0]"></component> -->
      {{current}}
      <component class="st-tabs-content-item" :is="current"></component>
  </div>
</div>
  
</template>
<script lang="ts">
import { computed } from 'vue';
import Tab from './Tab.vue'
export default {
  props:{
    selected:{
      type:String
    }
  },
  setup(props, context) {
    const defaults=context.slots.default()
    defaults.forEach((tag)=>{
        if(tag.type !== Tab){
            throw new Error("Tabs 子标签必须是Tab")
        }
    })
    const current = computed(()=>{
      console.log("从新return")
      return defaults.filter((tag)=>{
        return tag.props.title === props.selected
      })[0];//取filter返回值的第0个,当前component
    })

    const titles=defaults.map((tag)=>{
      return tag.props.title
    })
    const select=(title:string)=>{
      console.log(title)
      context.emit('update:selected',title)
    }
    return{defaults,titles,current,select}
  },
};
</script>
<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.st-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>