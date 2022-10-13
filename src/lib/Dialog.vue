<template>
  <div class="dialog-over">dialog组件</div>
  <div></div>
  <div>
    <header>标题</header>
    <main>
      <p>内容111</p>
      <p>内容222</p>
    </main>
    <footer>
      <Button>OK</Button>
      <Button>cancle</Button>
    </footer>
  </div>
</template>
<script lang="ts">
import Button from "./Button.vue";
export default {
  components: {
    Button,
  },
};
</script>
