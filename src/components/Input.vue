<script setup>
import { ref, watch } from "vue"
import { IonInput } from "@ionic/vue";
import Item from "./Item.vue"
const props = defineProps({
    context: Object,
})

let value = ref(props.context.node.value);

watch(() => value.value, (val) => {
    props.context.node.input(val);
})

let type = props.context.inputType || 'text';

</script>

<template>
    <Item :context="context">
        <IonInput v-model="value" v-bind="context.attrs" @ionBlur="context.handlers.blur" :type="type" />
    </Item>
</template>
