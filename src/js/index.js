import {ProductList,Product,AddProduct,ProductEdit,ProductDelete} from './product.js'
import {UserList,User,AddUser,UserEdit,UserDelete} from './user.js'

var router = new VueRouter({
  routes: [
    {path: '/', component: ProductList},
    {path: '/product/:product_id', component: Product, name: 'product'},
    {path: '/add-product', component: AddProduct},
    {path: '/product/:product_id/edit', component: ProductEdit, name: 'product-edit'},
    {path: '/product/:product_id/delete', component: ProductDelete, name: 'product-delete'},
    {path: '/user', component: ProductList},
    {path: '/user/:user_id', component: User, name: 'user'},
    {path: '/test', component: Test},
]});

var Test = Vue.extend({
  template: '#test',
  // data: function () {
  //   return {user: findUser(this.$route.params.user_id)};
  // }
});

new Vue({
  el: '#app',
  router: router,
  template: '<router-view></router-view>'
});
