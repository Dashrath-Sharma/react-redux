import * as Actions from '../constants'

const initialState = {
    categories: [],
    products: [],
    cart: [],
    cartItems: 0,
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {

        case Actions.GET_CATEGORIES: {
            return {
                ...state,
                categories: action.payload
            }
        }

        case Actions.GET_PRODUCTS: {
            return {
                ...state,
                products: action.payload
            }
        }

        case Actions.ADD_TO_CART: {
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        }

        // case Actions.GET_CARTITEMS: 

        default:
            return state;

    }
}