import Vue from 'vue';
import Router from 'vue-router';

import Home from '../components/Home';
import Contact from '../components/Contact';
import ECommerce from '../components/ECommerce';
import Shopping from '../components/Shopping';
// import NavBar from '../components/NavBar';

Vue.use(Router);

export default new Router({
    routes: [{
            path: '/home',
            name: 'Home',
            component: Home
        },
        {
            path: '/contact',
            name: 'Contact',
            component: Contact
        },
        {
            path: '/ecommerce',
            name: 'ECommerce',
            component: ECommerce
        },
        {
            path: '/shopping',
            name: 'Shopping',
            component: Shopping
        },
        {
            path: '',
            name: 'Home',
            component: Home
        }
    ],
    component: {
        // NavBar
    }
});