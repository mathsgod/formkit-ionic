<script setup>
import { ref, watch } from "vue"
import { normalizeOptions } from "@formkit/inputs";
const props = defineProps({
    context: Object,
})

console.log(props.context);

let value = ref(props.context.node.value);

watch(() => value.value, (val) => {
    props.context.node.input(val);
})

let error = ref(null);
let showErrorMessage = () => {
    let messagesArray = Object.entries(props.context.messages);
    error.value = messagesArray.length > 0 ? messagesArray[0][1].value : null;
}

props.context.node.on("message-added", showErrorMessage)
props.context.node.on("message-updated", showErrorMessage)
props.context.node.on("message-removed", showErrorMessage)

let options = normalizeOptions(props.context.node.props.options ?? []);


</script>

<template>
    <ion-item :class="{ 'ion-invalid': error }">
        <ion-label :position="context.labelPosition">{{ context.label }}</ion-label>
        <ion-select v-model="value" v-bind="context.attrs" @ionBlur="context.handlers.blur">
            <ion-select-option v-for="option in options" :value="option.value" :key="option.value"
                v-text="option.label"></ion-select-option>
        </ion-select>
        <ion-note slot="helper" v-text="context.help"></ion-note>
        <ion-note slot="error" v-text="error"></ion-note>
    </ion-item>
</template>
