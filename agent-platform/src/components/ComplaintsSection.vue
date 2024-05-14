<template>
  <div>

    <div>
      <h1>Complaints</h1>
      <h3>Select one to start</h3>
    </div>
    <div class="container">
      <div class="column">
        <MainCard @click="toDescription('Low resolution', 
        'The quality can be bad because the quality of the file is also bad.',
        'Compare the customers photo with the CPDF associated with their order.', 
        'Is the DPI of the file too low?','NO', 'YES')" 
        msg="Low resolution"></MainCard>

        <MainCard @click="toDescription('Uploaded a wrong artwork', 
        'The quality can be bad because the quality of the file is also bad.')" 
        msg="Uploaded a wrong artwork"></MainCard>

        <MainCard @click="toDescription('Print marks are printed on product', 
        'Write here the description')" 
        msg="Print marks are printed on product"></MainCard>

        <MainCard @click="toDescription('The colour is different (CMYK)', 
        'Write here the description')" 
        msg="The colour is different (CMYK)"></MainCard>
      </div>
      <div class="column">
        <MainCard msg="The finishing is wrong"></MainCard>
        <MainCard msg="I received the incorrect sizes of textile"></MainCard>
        <MainCard msg="Customer received order from different customer"></MainCard>
        <MainCard msg="Lost order"></MainCard>
      </div>
      <div class="column">
        <MainCard msg="There are stains / smudges on my product"></MainCard>
        <MainCard msg="Incomplete order / missing pieces"></MainCard>
        <MainCard msg="Damaged product/order"></MainCard>
        <MainCard msg="Order delayed"></MainCard>
      </div>
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
    toDescription(title, description, action, question,btnsecondary, btnprimary) {
      this.$router.push({ path: '/description', 
      query: {
      title, 
      description, 
      action, 
      question,
      btnsecondary,
      btnprimary} });
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