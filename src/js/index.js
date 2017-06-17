import {ProductList,Product,AddProduct,ProductEdit,ProductDelete} from './product.js'

var router = new VueRouter({
  routes: [{path: '/', component: ProductList},
    {path: '/product/:product_id', component: Product, name: 'product'},
    {path: '/add-product', component: AddProduct},
    {path: '/product/:product_id/edit', component: ProductEdit, name: 'product-edit'},
  {path:   '/product/:product_id/delete', component: ProductDelete, name: 'product-delete'}
]});

new Vue({
  el: '#app',
  router: router,
  template: '<router-view></router-view>'
});
