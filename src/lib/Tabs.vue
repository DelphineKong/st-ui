<template>
  <div class="st-tabs">
    <div class="st-tabs-nav">
      <div
        class="st-tabs-nav-item"
        v-for="(t, index) in titles"
        :ref="
          (el) => {
            if (el) navItems[index] = el;
          }
        "
        :key="index"
        @click="select(t)"
        :class="{ selected: t === selected }"
      >
        {{ t }}
      </div>
      <div class="st-tabs-nav-indicator" ref="indicator"></div>
    </div>
    

    <div class="st-tabs-content">
      <!-- <component :is="defaults[0]"></component> -->
      <component
        class="st-tabs-content-item"
        v-for="(c, index) in defaults"
        :key="index"
        :class="{ selected: c.props.title === selected }"
        :is="c"
      ></component>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, onMounted, ref } from "vue";
import Tab from "./Tab.vue";
export default {
  props: {
    selected: {
      type: String,
    },
  },
  setup(props, context) {
    const navItems = ref<HTMLDivElement[]>([]);
    const indicator = ref<HTMLDivElement>(null);
    onMounted(() => {
      // console.log({...navItems.value})
      const divs = navItems.value;
      //获取当前tan标题的元素的长度，设置给下划线的元素长度
      const result = divs.filter((div) =>
        div.classList.contains("selected")
      )[0]; //取filter返回值的第0个
      const { width } = result.getBoundingClientRect();
      indicator.value.style.width = width + "px";
    });
    const defaults = context.slots.default();
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error("Tabs 子标签必须是Tab");
      }
    });
    const current = computed(() => {
      console.log("从新return");
      return defaults.filter((tag) => {
        return tag.props.title === props.selected;
      })[0]; //取filter返回值的第0个,当前component
    });

    const titles = defaults.map((tag) => {
      return tag.props.title;
    });
    const select = (title: string) => {
      console.log(title);
      context.emit("update:selected", title);
    };
    return { defaults, titles, current, select, navItems, indicator };
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
    position: relative;
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
    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
    }
  }
  &-content {
      padding: 8px 0;
      &-item {
        display: none;
        &.selected {
          display: block;
        }
      }
    }
}
</style>
