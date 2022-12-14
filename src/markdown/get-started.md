# 开始使用
请先[安装](#/doc/install)本组件库。

然后在你的代码中写入下面的代码

```
import {Button,Switch,Dialog,openDialog,Tabs,Tab} from 'stui'
import '../node_modules/stui/dist/lib/stui.css'
```

就可以使用我提供的组件了。

## Vue 单文件组件

代码示例：

```
<template>
  <Button @click="open">openDialog</Button>
  <hr/>
  <Switch v-model:value="switchValue"></Switch>
  <hr/>
  <Tabs v-model:selected="tabSelected">
    <tab title="tab1">内容1 </tab>
    <tab title="tab2">内容2</tab>
  </Tabs>
  <hr/>
  
</template>
<script>
import {Button,Switch,Dialog,openDialog,Tabs,Tab} from 'stui'
import '../node_modules/stui/dist/lib/stui.css'
export default {
  name: 'App',
  components: {
    Button,Switch,Dialog,openDialog,Tabs,Tab
  },
  data(){
    return{
      switchValue:false,
      tabSelected:"tab1"
    }
  },
  methods:{
    open(){
      openDialog({
        title:'标题',
        content:'内容'
      })
    }
  }
}
</script>
```