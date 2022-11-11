# formkit-ionic

## Setup

1. This plugin requires the [Ionic](https://ionicframework.com/docs/vue/quickstart) and [FormKit](https://formkit.com/)
2. Setup in main.ts
```typescript
const app = createApp(App);

import { plugin, defaultConfig } from '@formkit/vue'
import { createIonicPlugin } from "formkit-ionic";
app.use(plugin, defaultConfig({
    plugins: [createIonicPlugin()]
}))
```

## Usage

### Basic

```html 
<FormKit type="form" v-model="data">

    <FormKit type="ionInput" name="input1" label="input1" validation="required|email"
    placeholder="this is a placeholder" label-position="stacked" help="this is a help text" />

    <FormKit type="ionSelect" name="select1" label="ionSelect" validation="required" label-position="stacked"
    placeholder="Select one" help="this is a help text" :options="options">
    </FormKit>

    <FormKit type="ionTextarea" name="textarea1" label="ionTextarea" label-position="stacked" />

</FormKit>
```
