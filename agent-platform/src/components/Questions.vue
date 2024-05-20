<template>
    <div class="header">
        <h1>{{ data.title }}</h1>
        <h4>{{ data.subTitle }}</h4>
        <h3 v-if="action"><span style="font-weight: bold; color: #E84E1E;">Action: </span> {{ action }}</h3>
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

<script>
import Solutions from './Solutions.vue';

/* eslint-disable */
export default {
    name: "Questions",
    components: {
        Solutions
    },
    data() {
        return {
            data: {
                "title": "Low resolution",
                "subTitle": "The quality can be bad because the quality of the file is also bad.",
                "action": "Compare the customer's photo with the CPDF associated with their order by running Preflight 'HelloCheck'",
                "question": {
                    "text": "cPDF is high res?",
                    "options": [
                        {
                            "class": "btnsecondary",
                            "text": "No",
                            "question": {
                                "text": "Automatic art work check?",
                                "action": "",
                                "options": [
                                    {
                                        "class": "btnsecondary",
                                        "text": "No",
                                        "question": {
                                            "text": "Low resolution warning sent?",
                                            "action": "Open the DTP Tab in presta & check “AutoCheck Artwork”box",
                                            "options": [
                                                {
                                                    "class": "btnsecondary",
                                                    "text": "No",
                                                    "question": {},
                                                    "solution": {}
                                                },
                                                {
                                                    "class": "btnprimary",
                                                    "text": "Yes",
                                                    "question": {},
                                                    "solution": {}
                                                }
                                            ]
                                        },
                                    },
                                    {
                                        "class": "btnprimary",
                                        "text": "Yes",
                                        "action": "Open the DTP Tab in presta & check “AutoCheck Artwork”box",
                                        "question": {
                                            "text": "Low resolution warning sent?",
                                            "options": [
                                                {
                                                    "class": "btnsecondary",
                                                    "text": "No",
                                                    "question": {},
                                                    "solution": {}
                                                },
                                                {
                                                    "class": "btnprimary",
                                                    "text": "Yes",
                                                    "question": {},
                                                    "solution": {}
                                                }
                                            ]
                                        },
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
                                "action": "File the complaint in presta",
                                "validComplaint": true,
                                "questions": [
                                    {
                                        "title": "Is the DPI of the file too low?",
                                        "isValid": true
                                    },
                                    {
                                        "title": "Automatic art work check?",
                                        "isValid": false
                                    },
                                    {
                                        "title": "Did we send a low resolution warning to the customer before printing the order?",
                                        "isValid": false
                                    }

                                ],
                                "sumaries": [
                                    {
                                        "title": "Solution 1",
                                        "description": "In consideration of the inconvenience caused, we can offer the customer a 10% discount code that can be applied to their next order. This discount serves as a gesture of goodwill to express our commitment to customer satisfaction."
                                    },
                                    {
                                        "title": "What to say to the customer",
                                        "description": "I am sorry but you approved the proof despite being informed about the potential risk of poor print quality. We warned you via email that there is a risk that it will be printed badly. In consideration of the inconvenience caused, we can offer you a 10% discount code that can be applied to the next order. This discount serves as a gesture of goodwill to express our commitment to customer satisfaction."
                                    }
                                ]
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