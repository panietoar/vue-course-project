import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Portfolio from './components/portfolio/Portfolio.vue'
import Stocks from './components/stocks/Stocks.vue'
import store from './store/store'
import VueResource from 'vue-resource'

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = 'https://vue-stock-trader-56ef4.firebaseio.com/';

const routes = [
    { path: '/', component: Home },
    { path: '/portfolio', component: Portfolio },
    { path: '/stocks', component: Stocks }
]

const router = new VueRouter({
    routes
});

Vue.filter('currency', value => {
    return '$' + value.toLocaleString();
});

new Vue({
    el: '#app',
    render: h => h(App),
    router,
    store
});