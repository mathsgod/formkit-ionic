<script setup >
import { ref } from "vue";
let data = ref({})

let options = {
  bacon: 'Bacon',
  sausage: 'Sausage',
  egg: 'Egg',
  cheese: 'Cheese',
  tomato: 'Tomato',
  mushroom: 'Mushroom',
  onion: 'Onion',
  pepper: 'Pepper',
  lettuce: 'Lettuce',
  avocado: 'Avocado',
  olive: 'Olive',
  corn: 'Corn',
  carrot: 'Carrot',
  cucumber: 'Cucumber',
};
</script>

<template>
  <div>
    <pre wrap>{{ data }}</pre>

    <FormKit type="form" v-model="data">
    
      <FormKit type="ionInput" name="input1" label="input1" validation="required|email"
        placeholder="this is a placeholder" label-position="stacked" help="this is a help text" />

      <FormKit type="ionSelect" name="select1" label="ionSelect" validation="required" label-position="stacked"
        placeholder="Select one" help="this is a help text" :options="options">
      </FormKit>

      <FormKit type="ionTextarea" name="textarea1" label="ionTextarea" label-position="stacked" />

    </FormKit>
    
  </div>

</template>
