<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
  msg: string
}>()

const activityLevel = ref("")
const height = ref("")
const weight = ref("")
const gender = ref("")
const age = ref("")

console.log(gender, "<--- gender");

</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      This is with for description of seekshape and hopefully call to actions.
    </h3>

    <p> Gender </p>
    <input type="radio" v-model="gender" id=male value="male">
    <label for="jack">Male</label>

    <input type="radio" v-model="gender" id="female" value="female">
    <label for="jack">Female</label>

    <p> What is your age? </p>
    <input v-model="age" placeholder="Your Age" />

    <p> Weight </p>
    <input v-model="weight" placeholder="Your Weight" />


    <p> Height </p>
    <input v-model="height" placeholder="Your Height" />

    <p> Activity Level </p>
    <input type="checkbox" id="jack" value="Jack">
    <label for="jack">Jack</label>

    <input v-model="activityLevel" type="checkbox" id="john" value="John">
    <label for="john">John</label>

    <input type="checkbox" id="mike" value="Mike">
    <label for="mike">Mike</label>

    <p> Goal </p>
    <input type="checkbox" id="jack" value="Jack">
    <label for="jack">Lose Weight</label>

    <input type="checkbox" id="jack" value="Jack">
    <label for="jack">Gain Weight</label>

    <input type="checkbox" id="jack" value="Jack">
    <label for="jack">Maintain</label>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
