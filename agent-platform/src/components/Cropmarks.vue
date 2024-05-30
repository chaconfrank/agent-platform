<template>
    <div class="header">
        <h1>{{ data.title }}</h1>
        <h4>{{ data.subTitle }}</h4>
        <h3 v-if="action"><span style="font-weight: bold; color: #222222;">Action: </span> {{ action }}</h3>
    </div>
    <div class="question">
        <h1 class="question">{{ currentQuestion.text }}</h1>
        <div v-if="!solution">
            <div class="btn-container">
                <button :class="option.class" v-for="option in currentQuestion.options" :key="option.id"
                    @click="answerQuestion(option)">
                    {{ option.text }}
                </button>
            </div>
        </div>
    </div>
</template>

<script>import Solutions from './Solutions.vue';

/* eslint-disable */
export default {
    name: "Questions",
    components: {
        Solutions
    },
    data() {
        return {
            data: {
                "title": "Cropmarks",
                "subTitle": "Sometimes crop marks can be seen on the end product. The issue could be coming from us or from our suppliers. Most of the time, this issue coes from a double set of cropmarks that was delivered in the print file.",
                "action": "Compare the customer's photo with the CPDF associated with their order by running Preflight 'HelloCheck'",
                "question": {
                    "text": "Customer uploaded cropmarks?",
                    "options": [
                        {
                            "class": "btnprimary",
                            "text": "Yes",
                            "question": {
                                "text": "Customer uploaded cropmarks?",
                                "options": [
                                    {
                                        "class": "btnprimary",
                                        "text": "Yes",
                                        "question": {
                                            "text": "Automatic art work check?",
                                            "action": "Open the DTP Tab in Presta & check 'AutoCheck Artwork' box. ",
                                            "options": [
                                                {
                                                    "class": "btnsecondary",
                                                    "text": "No",
                                                    "question": {},
                                                    "solution": {
                                                        "title": "Low resolution",
                                                        "action": "File the complaint in presta",
                                                        "validComplaint": true,
                                                        "questions": [
                                                            {
                                                                "title": "cPDF is high res?",
                                                                "isValid": false
                                                            },
                                                            {
                                                                "title": "Automatic art work check?",
                                                                "isValid": false
                                                            },
                                                            {
                                                                "title": "Low resolution warning sent?",
                                                                "isValid": false
                                                            }
                                                        ],
                                                        "sumaries": [
                                                            {
                                                                "title": "Solution",
                                                                "description": "Since it's our fault we didn't sent a warning, we have to make up with it by offering a reprint or a refund."
                                                            },
                                                            {
                                                                "title": "What to say to the customer",
                                                                "description": "I see the file you uploaded has a low resolution. Our team should have sent you an email about the risk. For the inconvenience, I would like to offer you a reprint of the order. In this case, we will need a good file from you with good resolution. Could you provide us with a file that meets the necessary resolution requirements? If you can't use the reprint because it will be too late, I can offer you a refund on this order. Turn on screen reader support"
                                                                // Agregar espaciado
                                                            },
                                                            {
                                                                "title": "Log in Presta",
                                                                "description": "Artwork - Manual Checked, No Warning Sent"
                                                                // Agregar espaciado
                                                            }
                                                        ]
                                                    }
                                                },
                                                {
                                                    "class": "btnprimary",
                                                    "text": "Yes",
                                                    "question": {},
                                                    // No hace falta mostrar la acción, se sigue mostrando
                                                    "solution": {
                                                        "title": "Low resolution",
                                                        "validComplaint": false,
                                                        "questions": [
                                                            {
                                                                "title": "cPDF is high res?",
                                                                "isValid": false
                                                            },
                                                            {
                                                                "title": "Automatic art work check?",
                                                                "isValid": false
                                                            },
                                                            {
                                                                "title": "Low resolution warning sent?",
                                                                "isValid": true
                                                            }
                                                        ],
                                                        "sumaries": [
                                                            {
                                                                "title": "Solution",
                                                                "description": "The customer approved the file even when we stated there was a risk that the quality of the print is going to be bad."
                                                            },
                                                            {// Agregar color al first time
                                                                "title": "What to say to the customer - First time CMR or cheap order",
                                                                "description": "As a special consideration for being a first-time customer, we understand that you may not have been fully aware of our processes. As an exception, we would like to offer you a free reprint of your order. However, we kindly request that you provide us with a new design that does not include low resolution. This gesture is intended to ensure your satisfaction and demonstrate our commitment to delivering the best possible product."

                                                            },
                                                            {
                                                                "title": "What to say to the customer",
                                                                "description": "I am sorry but you approved the proof despite being informed about the potential risk of poor print quality. We warned you via email that there is a risk that it will be printed badly. In consideration of the inconvenience caused, we can offer you a 10% discount code that can be applied to the next order. This discount serves as a gesture of goodwill to express our commitment to customer satisfaction."

                                                            }
                                                        ]
                                                    }
                                                }
                                            ]
                                        },
                                    },
                                    {
                                        "class": "btnprimary",
                                        "text": "Yes",
                                        "action": "Open the DTP Tab in presta & check “AutoCheck Artwork” box",
                                        "question": {
                                            "text": "Low resolution warning sent?",
                                            "options": [
                                                {
                                                    "class": "btnsecondary",
                                                    "text": "No",
                                                    "question": {},
                                                    "solution": {
                                                        "title": "Low resolution",
                                                        "action": "File the complaint in presta",
                                                        "validComplaint": true,
                                                        "questions": [
                                                            {
                                                                "title": "cPDF is high res?",
                                                                "isValid": false
                                                            },
                                                            {
                                                                "title": "Automatic art work check?",
                                                                "isValid": true
                                                            },
                                                            {
                                                                "title": "Did we send a low resolution warning to the customer before printing the order?",
                                                                "isValid": false
                                                            }
                                                        ],
                                                        "sumaries": [
                                                            {
                                                                "title": "Solution",
                                                                "description": "since it's our fault we didn't sent a warning, we have to make up with it by offering a reprint or a refund."
                                                            },
                                                            {
                                                                "title": "What to say to the customer",
                                                                "description": "I see the file you uploaded has a low resolution. Our autocheck should have sent you an email about the risk. For the inconvenience, I would like to offer you a reprint of the order. In this case, we will need a good file from you with good resolution. Could you provide us with a file that meets the necessary resolution requirements? If you can't use the reprint because it will be too late, I can offer you a refund on this order."
                                                                // Agregar espaciado
                                                            },
                                                            {
                                                                "title": "Log in Presta",
                                                                "description": "Artwork - Automatic Checked, Autocheck - No Warning Given"
                                                            }
                                                        ]
                                                    }
                                                },
                                                {
                                                    "class": "btnprimary",
                                                    "text": "Yes",
                                                    "question": {},
                                                    "solution": {
                                                        "title": "Low resolution",
                                                        "validComplaint": false,
                                                        "questions": [
                                                            {
                                                                "title": "cPDF is high res?",
                                                                "isValid": false
                                                            },
                                                            {
                                                                "title": "Automatic art work check?",
                                                                "isValid": true
                                                            },
                                                            {
                                                                "title": "Did we send a low resolution warning to the customer before printing the order?",
                                                                "isValid": true
                                                            }
                                                        ],
                                                        "sumaries": [
                                                            {
                                                                "title": "Solution",
                                                                "description": "The customer approved the file even when we stated there was a risk that the quality of the print is going to be bad."
                                                            },
                                                            {// Agregar color al first time
                                                                "title": "What to say to the customer - First time CMR or cheap order",
                                                                "description": "As a special consideration for being a first-time customer, we understand that you may not have been fully aware of our processes. As an exception, we would like to offer you a free reprint of your order. However, we kindly request that you provide us with a new design that does not include low resolution. This gesture is intended to ensure your satisfaction and demonstrate our commitment to delivering the best possible product."
                                                            },
                                                            {
                                                                "title": "What to say to the customer",
                                                                "description": "I am sorry but you approved the proof despite being informed about the potential risk of poor print quality. We warned you via email that there is a risk that it will be printed badly. In consideration of the inconvenience caused, we can offer you a 10% discount code that can be applied to the next order. This discount serves as a gesture of goodwill to express our commitment to customer satisfaction."
                                                                // Agregar espaciado
                                                            },

                                                        ]
                                                    }
                                                }
                                            ]
                                        },
                                    }
                                ]
                            }
                        },
                        {
                            "class": "btnsecondary",
                            "text": "No",
                            "question": {
                                "text": "",
                                "options": 
                                {  

                                },

                            }
                        }
                    ]
                }
            },
            solution: "",
            action: "Compare the customer's photo with the CPDF associated with their order by running Preflight 'HelloCheck'"
        };
    },
    computed: {
        currentQuestion() {
            return this.data.question;
        }
    },
    methods: {
        answerQuestion(option) {
            this.data.question = option.question || {};
            this.action = option.action !== "" ? option.action : "";


            if (Object.keys(option.question).length === 0) {
                console.info(JSON.stringify(option.solution))
                this.$router.push({
                    name: "Solutions",
                    query: {
                        solutionInformation: JSON.stringify(option.solution)
                    }
                });
            }
        },
    }
};
</script>

<style scoped>
.header {
    margin: 80px 0 40px 0;
    color: #222222;

}

h4 {
    color: #757575;
    font-weight: 500;
    margin: 0 0 20px 0;
}

h3 {
    color: #222;
    font-weight: 500;
}

.question {
    display: flex;
    flex-direction: column;
    align-items: center;
}


.btnprimary {
    background-color: #E84E1E;
    color: white;
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