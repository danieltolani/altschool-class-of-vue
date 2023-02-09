import { ref } from "@vue/reactivity";

const colorPicker = ()=>{
    const colors = ["green", "red", "blue", "purple"];
    let message = ref("Select a color...");
const matchColor = (value) => {
    
    const randomNumber = Math.floor(Math.random() * 3) + 1; 
    if (colors[randomNumber] === value) {
      return;
    }

    message.value = `You lose [answer: ${colors[randomNumber]}]`;
  };

  return { colors, message, matchColor,  };
}
  export default colorPicker