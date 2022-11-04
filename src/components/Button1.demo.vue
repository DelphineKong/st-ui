<demo>常规使用</demo>

<template>
  <div>
    <Button>hello</Button>
    <Button theme="link">hello</Button>
    <Button theme="text">hello</Button>
  </div>
</template>
<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: { Button },
};
</script>
