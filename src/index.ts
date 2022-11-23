import Item from './components/Item.vue';
import Input from './components/Input.vue';
import Select from './components/Select.vue';
import Textarea from './components/Textarea.vue';

export const createIonicPlugin = () => {
    return (node: any) => {
        if (node.props.type === "ionItem") {
            node.define({
                type: "input",
                component: Item
            })
            return;
        }

        if (node.props.type === 'ionInput') {
            node.define({
                type: "input",
                component: Input,
                props: ["labelPosition", "inputType"]
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