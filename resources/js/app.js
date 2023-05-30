require('./bootstrap');

//Entry point of vue.js
window.Vue = require('vue')
import router from './router'
import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.use(iView);

Vue.component('mainapp',require('./components/mainapp.vue').default)
const app = new Vue({
    el: '#app',
    router
})