import store from './store';
import { addToCart, updateCart, deleteFromCart } from './actions/cart-actions';
import {addToProduct} from './actions/products-action';

// console.log('initial state', store.getState());

let unsubscribe = store.subscribe(() => {
  console.log(store.getState());
})

store.dispatch(addToCart('Coffee 500gm', 1,250));
store.dispatch(addToProduct('test test', 10, 111))

store.dispatch(updateCart('Flour 1kg', 5, 110));

store.dispatch(deleteFromCart('Coffee 500gm'));
unsubscribe();
