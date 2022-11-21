import { h, defineComponent } from "vue"
import { IonTextarea } from "@ionic/vue";
import Item from "./Item.vue"

export default defineComponent({
    props: ['context'],
    setup(props: any) {

        return () => {
            return h(Item, {
                context: props.context
            }, () => h(IonTextarea, {
                modelValue: props.context.node.value,
                "onUpdate:modelValue": (val: any) => {
                    props.context.node.input(val);
                },
                onIonBlur() {
                    props.context.handlers.blur()
                },
                ...props.context.attrs
            }));
        }
    }
})