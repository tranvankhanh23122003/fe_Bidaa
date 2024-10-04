import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Default from './layout/wrapper/Master.vue'
import client from './layout/wrapper/User.vue'
import Toaster from "@meforma/vue-toaster";

const app = createApp(App)
app.use(router)
app.use(Toaster, {
    position: "top-right",
})
app.component("default-layout", Default); // Master page của admin
app.component("client-layout", client);  // Master page của client
app.mount("#app")
