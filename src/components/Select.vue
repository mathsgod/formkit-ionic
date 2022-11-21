<script setup>
import { ref, watch } from "vue"
import Item from "./Item.vue";
import { normalizeOptions } from "@formkit/inputs";
import { IonSelect } from "@ionic/vue";

const props = defineProps({
    context: Object,
})


let value = ref(props.context.node.value);

watch(() => value.value, (val) => {
    props.context.node.input(val);
})

let options = normalizeOptions(props.context.node.props.options ?? []);

</script>

<template>
    <Item :context="context">
        <ion-select v-model="value" v-bind="context.attrs" @ionBlur="context.handlers.blur">
            <ion-select-option v-for="option in options" :value="option.value" :key="option.value"
                v-text="option.label"></ion-select-option>
        </ion-select>

    </Item>
</template>
