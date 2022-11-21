<script setup>
import { ref, watch } from "vue"
import Item from "./Item.vue";
import { IonTextarea } from "@ionic/vue";
const props = defineProps({
    context: Object,
})

let value = ref(props.context.node.value);

watch(() => value.value, (val) => {
    props.context.node.input(val);
})

</script>

<template>
    <Item :context="context">
        <ion-textarea v-model="value" v-bind="context.attrs" />
    </Item>
</template>
