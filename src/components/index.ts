import Input from './Input.vue';
import Select from './Select.vue';
import Textarea from './Textarea.vue';
import { FormKitPlugin } from '@formkit/core';

export const createIonicPlugin = (): FormKitPlugin => {
    return (node) => {
        if (node.props.type === 'ionInput') {

            node.define({
                type: "input",
                component: Input,
                props: ["labelPosition"]
            })
            return;
        }

        if (node.props.type === "ionSelect") {
            node.define({
                type: "input",
                component: Select,
                props: ["labelPosition", "options"]
            })
            return;
        }


        if (node.props.type === "ionTextarea") {
            node.define({
                type: "input",
                component: Textarea,
                props: ["labelPosition"]
            })
            return;
        }
    };
};