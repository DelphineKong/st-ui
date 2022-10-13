<template>
    <div>Button 示例</div>
    <h1>theme示例</h1>
    <div>
        <Button >hello</Button>
        <Button theme="button">hello</Button>
        <Button theme="link">hello</Button>
        <Button theme="text">hello</Button>
    </div>
    <h1>size示例</h1>
    <div>
        <Button >hello</Button>
        <Button size="big">hello</Button>
        <Button size="small">hello</Button>
       
    </div>
</template>
<script lang="ts">
import Button from '../lib/Button.vue'
export default {
    components:{Button},
    setup(){
        const onClick=()=>{
            console.log("hi~")
        }
        return{onClick}
    }
}
</script>