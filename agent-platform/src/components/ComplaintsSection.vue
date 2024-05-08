<template>
  <div>

    <div>
      <h1>Complaints</h1>
      <h3>Select one to start</h3>
    </div>
    <div class="container">
      <div class="column">
        <MainCard msg="Uploaded a wrong artwork/typo"></MainCard>
      </div>
      <div class="column">
        <MainCard msg="The finishing is wrong"></MainCard>
      </div>
      <div class="column">
        <MainCard msg="Damaged product/order"></MainCard>
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
  }

}
</script>

<style scoped>
.container {
  display: flex;
}

.column {
  flex: 1;
  margin: 0 10px;
  padding: 20px;
}
</style>