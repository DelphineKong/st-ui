<template>
  <div class="st-tabs">
    <div class="st-tabs-nav">
      <div class="st-tabs-nav-item" v-for="(t,index) in titles" :key="index">{{t}}</div>
    </div>
    <div class="st-tabs-content">
      <!-- <component :is="defaults[0]"></component> -->
      <component class="st-tabs-content-item" v-for="(c,index) in defaults"  :key="index" :is="c"></component>
  </div>
</div>
  
</template>
<script lang="ts">
import Tab from './Tab.vue'
export default {
  setup(props, context) {
    console.log({...context.slots.default()[0]})
    console.log({...context.slots.default()[1]})
    const defaults=context.slots.default()
    defaults.forEach((tag)=>{
        if(tag.type !== Tab){
            throw Error("Tabs 子标签必须是Tab")
        }
    })
    const titles=defaults.map((tag)=>{
      return tag.props.title
      
    })
    return{defaults,titles}
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