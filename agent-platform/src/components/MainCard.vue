<template>
    <div>
        <button>{{ msg }}</button>
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
button {
    height: 80px;
    font-weight: 500;
    font-size: 16px;
    width: 280px;
    border-radius: 12px;
    border: 0px solid;
    background: #EAEFF5;
    padding: 5px 10px;
    margin:0px 0px 40px 0px;
}
</style>