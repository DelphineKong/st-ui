<template>
  <div v-for="(t,index) in titles" :key="index">{{t}}</div>
  <!-- <component :is="defaults[0]"></component> -->
  <component v-for="(c,index) in defaults"  :key="index" :is="c"></component>
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
