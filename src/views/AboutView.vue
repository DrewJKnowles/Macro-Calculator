<template>
  <div class="about">
    <h1>Macro Calculator</h1>
    <br>
    <p>To calculate your daily caloric needs and macro goals, fill out the information below! </p>
      <br>

      <p>This macrocalculator gives you an 
      estimated calorie intake based on the Mifflin St Jeor Equation and your provided values, 
      this should be used wisely. If you are not sure how to apply this information, seek advise from your healthcare professional.</p>
      
      <br>
      <label>Age </label>
      <input placeholder="edit me" />
      <br>

      <label>GENDER</label>
      <br>
      <input type="button" name="" value="Female"/>      
      <input type="button" name="" value="Male"/>
      <br>


      <label>Unit</label>
      <br>
      <input type="button" name="" value="Female"/>      
      <input type="button" name="" value="Male"/>
      <br>
      <br>
      <label>Age </label>
      <input placeholder="edit me" />

      <!-- If Unit will be Feet display two if Unit is cm then just one input fields -->
      <label>Hight </label>
      <input placeholder="edit me" />
      <input placeholder="edit me" />
      <br>

      <label>Activity Level</label>
      <br>
      <input type="button" name="" value="Female"/>      
      <input type="button" name="" value="Male"/>
      <br>

      <label>Goal</label>
      <br>
      <input type="button" name="" value="Female"/>      
      <input type="button" name="" value="Male"/>
      <br>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    /* display: flex; */
    align-items: center;
  }
}

.label {
padding-right: 30px;
}
</style>
