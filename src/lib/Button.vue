<template>
    <button class="st-button" :class="`theme-${theme}`">
        <slot></slot>
    </button>
</template>
<script>
export default {
    props: {
        theme:{
            type:String,
            default:'button'
        }
    }
}
</script>