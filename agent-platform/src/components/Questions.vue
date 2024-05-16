<template>
    <div>
        <h1>{{ data.title }}</h1>
        <h2>{{ data.subTitle }}</h2>
        <p v-if="action">Action: {{ action }}</p>
        <p>{{ currentQuestion.text }}</p>
        <div v-if="!solution">
            <button v-for="option in currentQuestion.options" :key="option.id" @click="answerQuestion(option)">
                {{ option.text }}
            </button>
        </div>
        <p v-if="solution">Solución: {{ solution }}</p>
    </div>
</template>

<script>
/* eslint-disable */
export default {
    name: 'Questions',
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
                            "text": "No",
                            "question": {
                                "text": "Automatic art work check?",
                                "action": "",
                                "options": [
                                    {
                                        "text": "No",
                                        "question": {
                                            "id": 4,
                                            "text": "Low resolution warning sent?",
                                            "action": "Open the DTP Tab in presta & check “AutoCheck Artwork”box",
                                            "options": [
                                                {
                                                    "text": "No",
                                                    "question": {}
                                                },
                                                {
                                                    "text": "Yes",
                                                    "question": {}
                                                }
                                            ]
                                        },
                                    },
                                    {
                                        "text": "Yes",
                                        "action": "Open the DTP Tab in presta & check “AutoCheck Artwork”box",
                                        "question": {
                                            "text": "Low resolution warning sent?",
                                            "options": [
                                                {
                                                    "text": "No",
                                                    "question": {}
                                                },
                                                {
                                                    "text": "Yes",
                                                    "question": {}
                                                }
                                            ]
                                        },
                                    }
                                ]
                            }
                        },
                        {
                            "text": "Yes",
                            "question": {},
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
                this.$router.push({ name: "Solutions" });
            }
        }
    }
};
</script>
