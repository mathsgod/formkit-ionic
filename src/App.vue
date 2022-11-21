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

let onSubmit = () => {
  console.log(data.value);
};
</script>

<template>
  <div>
    <pre wrap>{{ data }}</pre>

    <FormKit type="form" v-model="data" :actions="false" @submit="onSubmit">


      <FormKit type="ionInput" name="input1" label="input1" validation="required|email"
        placeholder="this is a placeholder" label-position="stacked" help="this is a help text" clear-input />

      <FormKit type="ionInput" input-type="password" name="input1" label="Password" validation="required"
        placeholder="this is a placeholder" label-position="stacked" help="this is a help text" clear-input />


      <FormKit type="ionSelect" name="select1" label="ionSelect" validation="required" label-position="stacked"
        placeholder="Select one" help="this is a help text" :options="options">
      </FormKit>

      <FormKit type="ionTextarea" name="textarea1" label="ionTextarea" label-position="stacked" />
      
      <ion-row>
        <ion-col>
          <ion-button type="submit" color="danger" expand="block">Sign In</ion-button>
        </ion-col>
      </ion-row>
    </FormKit>




  </div>

</template>
