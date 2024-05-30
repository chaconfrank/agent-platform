<template>
  <div>
    <h1>Complaints</h1>
    <h3>Select one to start</h3>
  </div>
  <div class="container">
    <div class="column">
      <MainCard @click="toQuestion('low-resolution')" msg="Low resolution" :disabled=false></MainCard>
      <MainCard @click="toQuestion('cropmarks')" msg="CropMarks" :disabled=false></MainCard>
      <MainCard @click="toQuestion('colour-deviation')" msg="Print marks are printed on product" :disabled=false></MainCard>
      <MainCard msg="The colour is different (CMYK)" :disabled=true></MainCard>
    </div>
    <div class="column">
      <MainCard msg="The finishing is wrong" :disabled=true></MainCard>
      <MainCard msg="I received the incorrect sizes of textile" :disabled=true></MainCard>
      <MainCard msg="Customer received order from different customer" :disabled=true></MainCard>
      <MainCard msg="Lost order" :disabled=true></MainCard>
    </div>
    <div class="column">
      <MainCard msg="There are stains / smudges on my product" :disabled=true></MainCard>
      <MainCard msg="Incomplete order / missing pieces" :disabled=true></MainCard>
      <MainCard msg="Damaged product/order" :disabled=true></MainCard>
      <MainCard msg="Order delayed" :disabled=true></MainCard>
    </div>
  </div>
</template>

<script>

import MainCard from './MainCard.vue'

export default {
  name: 'ComplaintsSection',
  components: {
    MainCard
  },
  methods: {
    toQuestion(questionId) {
      this.$router.push({ path: '/questions/' + questionId });
    }
  }
}

</script>

<style scoped>
.container {
  display: flex;
}

.column {
  flex: 1;
  margin: 10px 20px;
  color: #222222;
  font-weight: 900
}


h1 {
  margin: 40px 0px 10px 20px;
  color: #E84E1E;
}

h3 {
  margin: 0px 0px 40px 20px;
  color: #757575;
  font-weight: 500;
}
</style>