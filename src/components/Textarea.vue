<script setup>
import { IonTextarea } from '@ionic/vue'
import { ref, watch } from "vue"
import Item from './Item.vue'
let props = defineProps({
    context: Object
});

let value = ref(props.context.node.value);
watch(() => value.value, (val) => {
    props.context.node.input(val);
})


</script>
<template>
    <Item :context="context">
        <IonTextarea v-model="value" @ion-blur="context.handlers.blur" />
    </Item>
</template>
