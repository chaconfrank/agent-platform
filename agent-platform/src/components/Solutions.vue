<template>

    <head>
    </head>

    <body>
        <div class="container">
            <div class="column">
                <h1>{{ dato }}</h1>
                <h2><span style="font-weight: bold; color: #E84E1E;">Action: </span> File the complaint in presta</h2>
                <h2 class="valid-complaint-status">Valid complaint</h2>
            </div>
            <div class="column">
                <h3> Summary of questions</h3>
                <h4>Is the DPI of the file too low? -<span style="font-weight: bold; color: #73C15A;"> Yes</span> </h4>
                <h4>Automatic art work check? -<span style="font-weight: bold; color: #F11A1A;"> No</span> </h4>
                <h4>Did we send a low resolution warning to the customer before printing the order? -
                    <span style="font-weight: bold; color: #73C15A;"> Yes</span>
                </h4>
            </div>
        </div>
        <h3> Summary of questions</h3>
        <div class="solutions">
            <p><span style="font-weight: bold; color: #222222;">Solution 1 </span></p>
            <p>In consideration of the inconvenience caused, we can offer the customer a
                10% discount code that can be applied to their next order. This discount serves
                as a gesture of goodwill to express our commitment to customer satisfaction.</p>
        </div>
        <div class="solutions">
            <p><span style="font-weight: bold; color: #222222;">What to say to the customer </span></p>
            <p>I am sorry but you approved the proof despite being informed about the potential
                risk of poor print quality. We warned you via email that there is a risk that it
                will be printed badly. In consideration of the inconvenience caused,
                we can offer you a 10% discount code that can be applied to the next order.
                This discount serves as a gesture of goodwill to express our commitment to customer satisfaction.</p>
        </div>
        <div>
            <div class="button-container">
                <button class="btnprimary"> Back to homepage</button>
            </div>
        </div>
        <div class="container">
            <div class="progress-container">
                <div class="progress" id="progress">
                    <div class="circle active"><i class="fab fa-html5"></i></div>
                    <div class="circle active"><i class="fab fa-css3-alt"></i></div>
                    <div class="circle active"><i class="fab fa-js"></i></div>
                </div>
            </div>
        </div>
    </body>
</template>

<script>
/* eslint-disable */
export default {
    name: "solutions",
    props: {
        dato: String,
    }
}

</script>
<style scoped>
h1 {
    color: #222222;
    font-size: 46px;
    font-weight: 400;
    margin: 0;
}

h2 {
    color: #222222;
    font-size: 18px;
    font-weight: 500;
}

h3 {
    color: #222222;
    font-weight: 700;
}

h4 {
    color: #222222;
    font-weight: 500;
    margin: 0 0 20px 0;
    max-width: 400px;
}

.container {
    margin: 80px 0 40px 0;
    color: #222222;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
}

.column {
    flex: 1;
    margin: 0 10px;
}

.solutions {
    flex: 1;
    background-color: #F8F8F8;
    padding: 32px;
    margin: 20px 0 20px 0;
    border-radius: 12px;
}

.valid-complaint-status {
    background-color: #EAF6E6;
    margin-top: 0;
    color: #73C15A;
    font-weight: 700;
    border-radius: 12px;
    border: none;
    padding: 6px 12px;
    text-align: center;
    display: inline-block;
}

.invalid-complaint-status {
    background-color: #FFF1F1;
    margin-top: 0;
    color: #F11A1A;
    font-weight: 700;
    border-radius: 12px;
    border: none;
    padding: 6px 12px;
    text-align: center;
    display: inline-block;
}

.button-container {
    text-align: center;
    margin: 40px 0px;

}

.btnprimary {
    background-color: #E84E1E;
    color: white;
    margin: 0 5px;
    font-weight: 900;
    border-radius: 12px;
    border: none;
    font-size: 16px;
    padding: 16px 24px;
    text-align: center;
    width: auto;
}
</style>