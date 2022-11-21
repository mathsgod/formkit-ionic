<script setup>
import { IonInput } from '@ionic/vue'
import { ref, watch } from "vue"
import MyItem from './Item.vue'
let props = defineProps({
    context: Object
});

let value = ref(props.context.node.value);
watch(() => value.value, (val) => {
    props.context.node.input(val);
})


</script>
<template>
    <MyItem :context="context">
        <ion-input v-model="context.node.value" @ion-blur="context.handlers.blur" />
    </MyItem>
</template>
