<template>
  <div>导航栏|<router-link to="/">HelloWorld</router-link>|<router-link to="/hhh">HelloWorld2</router-link></div>
  <hr/>
  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
}
</script>
