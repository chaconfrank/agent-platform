<template>
    <div>
        <h1>{{ $route.query.title }}</h1>
        <h3>{{ $route.query.description }}</h3>
    </div>
</template>

<script>
/* eslint-disable */
export default {
    name: 'Description',
}
</script>

<style scoped>
div {
    color: #222222;

}
</style>