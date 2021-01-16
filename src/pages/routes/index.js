import loadable from '@loadable/component';

const ProductDetails = loadable(() => import('./ProductDetails'));
const Cart = loadable(() => import('./Cart'));
const Checkout = loadable(() => import('./Checkout'));
const PageNotFound = loadable(() => import('./PageNotFound'));

var indexRoutes = [
  {
    path: '/cart',
    component: Cart,
    exact: true,
  },
  {
    path: '/checkout',
    component: Checkout,
    exact: true,
  },
  {
    path: '/shop/:slug',
    component: ProductDetails,
    exact: true,
  },
  {
    path: '*',
    component: PageNotFound,
  },
];

export default indexRoutes;
