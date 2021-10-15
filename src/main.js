import { createApp } from "vue";
import { router } from './router'; // 라우터 추가하고 
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from "./App.vue";


// Create Vue Instance
const app = createApp(App)
app.use(VueAxios, axios)
app.use(router); // 사용 설정 하기
app.mount('#app');


