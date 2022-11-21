import { h, defineComponent } from "vue"
import { normalizeOptions } from "@formkit/inputs";
import { IonSelect, IonSelectOption } from "@ionic/vue";
import Item from "./Item.vue"

export default defineComponent({
    props: ['context'],
    setup(props: any) {

        let options = normalizeOptions(props.context.node.props.options ?? []);

        let OptionComponents = options.map((option: any) => {
            return h(IonSelectOption, {
                value: option.value
            }, () => option.label);
        })

        return () => {

            return h(Item, {
                context: props.context
            }, () => h(IonSelect, {
                modelValue: props.context.node.value,
                "onUpdate:modelValue": (val: any) => {
                    props.context.node.input(val);
                },
                onIonBlur() {
                    props.context.handlers.blur()
                },
                ...props.context.attrs
            }, () => OptionComponents));
        }
    }
})

/* 

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

    < template >
    <Item : context = "context" >
        <ion-select v - model="value" v - bind="context.attrs" @ionBlur="context.handlers.blur" >
            <ion-select - option v -for= "option in options" : value = "option.value" : key = "option.value"
v - text="option.label" > </ion-select-option>
    < /ion-select>

    < /Item>
    < /template>
 */