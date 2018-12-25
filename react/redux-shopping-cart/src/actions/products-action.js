export const ADD_TO_PRODUCT = 'ADD_TO_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const DELETE_FROM_PRODUCT = 'DELETE_FROM_PRODUCT';

export function addToProduct(product, quantity, unitCost) {
  return {
    type: ADD_TO_PRODUCT,
    test: {product, quantity, unitCost}
  }
}