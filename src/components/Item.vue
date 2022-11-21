<script setup>
import { ref, watch } from "vue"
const props = defineProps({
    context: Object,
})

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

</script>

<template>
    <ion-item :class="{ 'ion-invalid': error }" v-bind="context.attrs">
        <ion-label :position="context.labelPosition">{{ context.label }}</ion-label>
        <slot></slot>
        <ion-note slot="helper" v-text="context.help"></ion-note>
        <ion-note slot="error" v-text="error"></ion-note>
    </ion-item>
</template>
