<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
    this.$router.push('/');
  },
};
</script>

<style>
body {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #222222;
  margin: 0;
  padding: 0;
}

@media (min-width: 768px) {
  #app {
    margin-top: 80px;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    grid-gap: 20px;
    padding: 0 20px;
  }
}
</style>
