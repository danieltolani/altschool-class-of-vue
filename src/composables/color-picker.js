import { ref } from 'vue'

const useColorPicker = () => {
    const message = ref('Pick a color')
    const colors = ref(['green', 'red', 'blue', 'purple'])



    return { message, colors, matchColor }
}

export default useColorPicker
