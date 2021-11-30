import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import PrimeVue from 'primevue/config'

import ToastService from 'primevue/toastservice';
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Toast from 'primevue/toast';
import TabMenu from 'primevue/tabmenu';
import Dropdown from 'primevue/dropdown';


import 'primevue/resources/themes/saga-blue/theme.css'      //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons

const app = createApp(App);
app.use(store);
app.use(PrimeVue);
app.use(ToastService);
app.component('InputText',InputText);
app.component('Button',Button);
app.component('Toast',Toast);
app.component('TabMenu',TabMenu);
app.component('Dropdown',Dropdown)
app.use(router);
app.mount('#app');
