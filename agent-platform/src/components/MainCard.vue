<template>
    <div>
        <p>{{ msg }}</p>
    </div>
</template>

<script>
export default {
    name: 'MainCard',
    props: {
        msg: String
    }
}
</script>

<style scoped>
div {
    border-radius: 20px;
    border: 0px solid var(--Negro, #000);
    background: #EAEFF5;
    padding: 15px;
}
</style>