<script setup>
import { IonInput } from '@ionic/vue'
import { ref, watch } from "vue"
import Item from './Item.vue'
let props = defineProps({
    context: Object
});

let value = ref(props.context.node.value);
watch(() => value.value, (val) => {
    props.context.node.input(val);
})

let inputType = ref(props.context.inputType || 'text');

</script>
<template>
    <Item :context="context">
        <ion-input v-model="value" @ion-blur="context.handlers.blur" :type="inputType" />
    </Item>
</template>
