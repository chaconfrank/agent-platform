<template>
    <div class="header">
        <h1>{{ data.title }}</h1>
        <h4>{{ data.subTitle }}</h4>
        <h3 v-if="this.action"><span style="font-weight: bold; color: #222222;">Action: </span> {{ this.action }}</h3>
    </div>
    <div class="question">
        <h1 class="question">{{ question.text }}</h1>
        <div class="btn-container">
            <button :class="option.class" v-for="option in this.question.options" :key="option.id"
                @click="answerQuestion(option)">
                {{ option.text }}
            </button>
        </div>
    </div>
</template>

<script>
import Solutions from './Solutions.vue';
import data from '@/assets/low-resolution.json';

/* eslint-disable */
export default {
    name: "Questions",
    components: {
        Solutions
    },
    data() {
        return {
            questionId: null,
            data: {},
            action: "",
            question: {}
        };
    },
    created() {
        this.loadData('low-resolution')
            .then(data => {
                this.data = data;
                this.action = this.data.action;
                this.question = this.data.question;
            })
            .catch(error => {
                console.error('Error loading JSON:', error);
            });
    },
    methods: {
        loadData(fileName) {
            return import(`@/assets/${fileName}.json`)
                .then(module => {
                    return module.default;
                })
                .catch(error => {
                    console.error(`Error loading ${fileName}:`, error);
                    throw error;
                });
        },
        answerQuestion(option) {
            this.question = option.question || {};
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