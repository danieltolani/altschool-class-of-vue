<template>
  <h1>Color Picker Game</h1>

<div>{{ message }}</div>

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
button{
  color: white !important;
  border: none;
  padding: 1.2rem;
  margin: 0.2rem;
  border-radius: 6px;
  font-size: 1rem;
  text-transform: capitalize;

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
