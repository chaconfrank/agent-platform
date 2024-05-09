<template>
    <div>
        <h1>{{ title }}</h1>
        <h3>{{ description }}</h3>
    </div>
</template>

<script>
/* eslint-disable */
export default {
    name: 'Description',
    props: {
        title: String,
        description: String
    }
}
</script>

<style scoped>
div {
    color: #222222;

}
</style>