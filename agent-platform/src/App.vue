<template>
  
  <ComplaintsSection />
</template>

<script>
import ComplaintsSection from './components/ComplaintsSection.vue';



export default {
  name: 'App',
  components: {
    ComplaintsSection,
  }
}
</script>

<style>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
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
