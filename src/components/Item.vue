<script setup>
import { ref } from 'vue';
let props = defineProps({
    context: Object
});

let error = ref("");
let showErrorMessage = () => {
    let messagesArray = Object.entries(props.context.messages);
    error.value = messagesArray.length > 0 ? messagesArray[0][1].value : null;
}

props.context.node.on("message-added", showErrorMessage)
props.context.node.on("message-updated", showErrorMessage)
props.context.node.on("message-removed", showErrorMessage)

</script>

<template>
    <ion-item>
        <ion-label>{{ context.label }}</ion-label>
        <slot></slot>
        <ion-note slot="helper">{{ context.help }}</ion-note>
    </ion-item>
</template>