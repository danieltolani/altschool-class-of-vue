<template>
  <main class="main-heading">
    <h1 class="heading">Color Picker Game</h1>

    <div class="message">{{ message }}</div>
  </main>
  <div></div>


<button v-for="color in colors" :key="color" :class="color"  @click="matchColor(color)">
{{ color }}
</button>

</template>

<script>
import colorPicker from "../composables/color-picker";

export default {
setup() {
  const  {colors, message, matchColor, }=colorPicker()
  const theColor = Math.floor(Math.random() * 3) + 1;
  return { colors, message, matchColor, theColor };
},
};
</script>

<style>
/* *{
  text-align: center;
  border: 2px solid red;
} */

main.main-heading{
  margin-bottom: 2em;
}

.message{
  font-size: 1.2rem;
}
h1.heading{
  text-align: center;
}
/* 
.message{
  border: 2px solid red;
} */

button{
  color: white !important;
  border: none;
  padding: 1.2rem;
  margin: 0.2rem;
  border-radius: 6px;
  font-size: 1rem;
  text-transform: capitalize;
  cursor: pointer;


}

button:hover{
  opacity: 0.8;
}
.red {
background: red;
}
.blue {

background: blue;

}
.green {
background: green;
color : black;


}
.yellow {

background: yellow;


}
.purple {

background: purple;


}

</style>
