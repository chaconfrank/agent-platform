<template>
    <div class="header">
        <v-btn>

        </v-btn>
        <h1>{{ $route.query.title }}</h1>
        <h4>{{ $route.query.description }}</h4>
        <h3><span style="font-weight: bold; color: #E84E1E;">Action: </span>{{ $route.query.action }}</h3>
    </div>
        <div class="question">
            <h1 class="question">{{ $route.query.question }}</h1>
            <div class="btn-container">
                <button class="btnsecondary"> {{ $route.query.btnsecondary }}</button>
                <button class="btnprimary"> {{ $route.query.btnprimary }}</button>
            </div>
        </div>
</template>

<script>
/* eslint-disable */
export default {
    name: 'Description',
}

</script>

<style scoped>
.header {
    margin: 80px 0 40px 0;
    color: #222222;

}

h4{
    color: #757575;
     font-weight: 500;
     margin:0 0 20px 0 ;
}
h3{
    color: #222;
     font-weight: 500;
}

.question{
display: flex;
flex-direction: column;
align-items: center;
}


.btnprimary {
background-color: #E84E1E;
color:white ;
margin: 0 5px;
font-weight: 900;
border-radius: 12px;
border: none;
font-size: 24px;
padding: 16px 24px;
text-align: center;
width: auto;
}
.btnprimary:hover {
background-color: #F25C2D;
color: #FBFBFB;
}

.btnsecondary {
background-color: white;
margin: 0 5px;
color: black;
font-weight: 900;
border-radius: 12px;
border: 2px solid black;
font-size: 24px;
padding: 16px 24px;
text-align: center;
width: auto;
}
.btnsecondary:hover {
background-color: #F4F4F4;
color: black;
}
</style>