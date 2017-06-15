var Vue = require('vue');
// Vue Recource
var VueResource = require('vue-resource');
Vue.use(VueResource);
// Vue Router
var VueRouter = require('vue-router');
Vue.use(VueRouter)
// Vue Mement
var VueMoment = require('vue-moment');
Vue.use(VueMoment);


// Vue Recource init Headers With laravel csrf_token
Vue.http.headers.common['X-CSRF-TOKEN'] = document.getElementById('_token').getAttribute('value');






// Vue Router init

// Define some Components.
var AddServices = require('./components/services/addServices.vue');
var MyServices = require('./components/services/myServices.vue');
var ServicesDetails = require('./components/services/service_details.vue');
var IncomingOrders = require('./components/orders/incomingOrders.vue');
var singleOrder = require('./components/orders/singleOrder.vue');
var PurchaseOrders = require('./components/orders/purchaseOrders.vue');
var UserServices = require('./components/users/UserServices.vue');

// The router needs a root component to render.
// For demo purposes, we will just use an empty one
// because we are using the HTML as the app template.
// !! Note that the App is not a Vue instance.
var App = Vue.extend({});

// Create a router instance.
// You can pass in additional options here, but let's
// keep it simple for now.
var route = new VueRouter();


// Define some routes.
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// Vue.extend(), or just a component options object.
// We'll talk about nested routes later.
route.map({
    '/': {
        component: AddServices
    },
    '/AddServices': {
        component: AddServices
    },
    '/MyServices': {
        component: MyServices
    },
    '/IncomingOrders': {
        component: IncomingOrders
    },
    '/PurchaseOrders': {
        component: PurchaseOrders
    },
    '/ServicesDetails/:serviceId/:serviceName': {
        name: '/ServicesDetails',
        component: ServicesDetails
    },
    '/User/:userId/:userName': {
        name: '/User',
        component: UserServices
    },
    '/Order/:orderId': {
        name: '/Order',
        component: singleOrder
    },
});

// Now we can start the app!
// The router will create an instance of App and mount to
// the element matching the selector body.
route.start(App, 'body');