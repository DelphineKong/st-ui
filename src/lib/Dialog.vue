<template>
  <template v-if="visible">
    <Teleport to="body">
      <div class="st-dialog-overlay" @click="closeOnClickOverlay"></div>
      <div class="st-dialog-wrapper">
        <div class="st-dialog">
          <header>
            <slot name="title" />
            <span class="st-dialog-close" @click="close"></span>
          </header>
          <main>
            <slot name="content" />
          </main>
          <footer>
            <Button level="main" @click="ok">OK</Button>
            <Button @click="cancel">cancel</Button>
          </footer>
        </div>
      </div>
    </Teleport>
  </template>
</template>
<script lang="ts">
import Button from "./Button.vue";
export default { 
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    closeOnClickOverlay: {
      typr: Boolean,
      default: false,
    },
    ok: {
      type: Function,
    },
    cancel: {
      type: Function,
    },
  },
  components: {
    Button,
  },
  setup(props, context) {
    const close = () => {
      context.emit("update:visible", false);
    };
    const closeOnClickOverlay = () => {
      if (props.closeOnClickOverlay) {
        close(); //如果closeOnClickOverlay点击遮罩层关闭为true，就执行close
      }
    };
    const ok = () => {
      // if(props.ok && props.ok()!=false){ //如果欧克（）返回值不为空，然后关闭
      if (props.ok?.() != false) {
        //如果欧克（）返回值不为空，然后关闭
        close();
      }
    };
    const cancel = () => {
      if (props.cancel?.() != false) {
        close();
      }
      
    };
    return { close, closeOnClickOverlay, ok, cancel };
  },
};
</script>
<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;
.st-dialog {
  background: white;
  border-radius: $radius;
  box-shadow: 0 0 3px fade_out(black, 0.5);
  min-width: 15em;
  max-width: 90%;
  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.5);
    z-index: 10;
  }
  &-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
  }
  > header {
    padding: 12px 16px;
    border-bottom: 1px solid $border-color;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
  }
  > main {
    padding: 12px 16px;
  }
  > footer {
    border-top: 1px solid $border-color;
    padding: 12px 16px;
    text-align: right;
  }
  &-close {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;
    &::before,
    &::after {
      content: "";
      position: absolute;
      height: 1px;
      background: black;
      width: 100%;
      top: 50%;
      left: 50%;
    }
    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}
</style>
