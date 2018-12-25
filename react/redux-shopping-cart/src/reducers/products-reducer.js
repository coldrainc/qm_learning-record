import {ADD_TO_PRODUCT, UPDATE_PRODUCT, DELETE_FROM_PRODUCT} from '../actions/products-action';
const initialState = {
  product: [
    {
      product: 'first',
      quantity: 2,
      unitCost: 90
    },
    {
      product: 'two',
      quantity: 1,
      unitCost: 47
    }
  ]
}

export default function(state=initialState, action) {
  switch(action.type) {
    case ADD_TO_PRODUCT: {
      return {
        ...state,
        product: [...state.product, action.test]
      }
    }
    default:
      return state;
  }
}