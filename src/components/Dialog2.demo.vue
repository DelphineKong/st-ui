<demo>一键打开 Dialog</demo>
<template>
  <div>
    <Button @click="showDialog">toggle</Button>
  </div>
</template>
<script lang="ts">
import {openDialog,Button} from "../lib/index";
export default {
  components: {
    Button,
  },
  setup() {
    const showDialog = () => {
      openDialog({
        title: "标题",
        content: "你好",
        ok() {
          console.log("ok");
        },
        cancel() {
          console.log("cancel");
        },
      });
    };
    return { showDialog };
  },
};
</script>
