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
    height: 80px;
    width: 280px;
    border-radius: 12px;
    border: 0px solid var(--Negro, #000);
    background: #EAEFF5;
    padding: 10px;
    margin:0px 0px 40px 0px;
}
</style>