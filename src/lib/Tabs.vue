<template>
  <div>Tabs 组件</div>
  <component :is="defaults[0]"></component>
  <component :is="defaults[1]"></component>
</template>
<script lang="ts">
import Tab from './Tab.vue'
export default {
  setup(props, context) {
    console.log({...context.slots.default()[0]})
    console.log({...context.slots.default()[0]})
    const defaults=context.slots.default()
    defaults.forEach((tag)=>{
        if(tag.type !== Tab){
            throw Error("Tabs 子标签必须是Tab")
        }
    })
    return{defaults}
    
  },
};
</script>
