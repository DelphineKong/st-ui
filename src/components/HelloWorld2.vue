<template>
  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <p>Edit <code>components/HelloWorld2.vue</code> to test hot module replacement.</p>
</template>

<script>
export default {
  name: 'HelloWorld2',
  props: {
    msg: String
  },
  data() {
    return {
      count: 2
    }
  }
}
</script>
