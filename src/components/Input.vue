<script setup>
import { IonInput, IonLabel, IonItem } from '@ionic/vue'
let props = defineProps({
    context: Object
});
</script>
<template>
    <ion-item>
        <ion-label>{{ context.label }}</ion-label>
        <ion-input v-model="context.node.value" />
    </ion-item>
</template>
