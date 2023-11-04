<script setup lang="ts">
defineProps<{
  msg: string
}>()

// export default {
//   data() {
//     return {
//       message: ''
//     }
//   }
// }
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      This is with for description of seekshape and hopefully call to actions.
    </h3>

    <p> What is your age? </p>
    <input placeholder="edit me" />

    <p> Weight </p>
    <input placeholder="edit me" />


    <p> Height </p>
    <input placeholder="edit me" />

    <p> Activity Level </p>
    <input type="checkbox" id="jack" value="Jack">
    <label for="jack">Jack</label>

    <input type="checkbox" id="john" value="John">
    <label for="john">John</label>

    <input type="checkbox" id="mike" value="Mike">
    <label for="mike">Mike</label>

    <p> Gender </p>
    <input type="checkbox" id="jack" value="Jack">
    <label for="jack">Male</label>

    <input type="checkbox" id="jack" value="Jack">
    <label for="jack">Female</label>


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
