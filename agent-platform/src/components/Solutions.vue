<template>
    <div class="header">
        <h1>{{ $route.query.title }}</h1>
        <h3><span style="font-weight: bold; color: #E84E1E;">Action: </span>{{ $route.query.action }}</h3>

    </div>
    <div>
        <h4>Summary of questions</h4>
    </div>

    <body>
        <div class="container">
            <h4>Solutions and next steps</h4>
            <div class="answer container">
                Solution 1
            </div>
            <div class="answer container">
                Solution 2
            </div>
            <div class="answer container">
                Action for agent
            </div>
            <button class="btnprimary"> {{ }}</button>
        </div>
    </body>
</template>

<script>
/* eslint-disable */
export default {
    name: 'solutions',
}

</script>
<style scoped>
.header {
    margin: 80px 0 40px 0;
    color: #222222;

}

h1 {
    color: #222222;
    font-size: 56px;
    font-weight: 500;
    margin: 0 0 20px 0;
}

h4 {
    color: #222222;
    font-weight: 500;
    margin: 0 0 20px 0;
}
</style>