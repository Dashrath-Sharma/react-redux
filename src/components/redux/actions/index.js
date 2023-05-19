import * as Actions from "../constants"

export const setCategories = (categories) => {
    return {
        type: Actions.GET_CATEGORIES,
        payload: categories
    }
}

export const setProducts = (products) => {
    return {
        type: Actions.GET_PRODUCTS,
        payload: products
    }
}

export const AddToCart = (cartItem) => {
    return {
        type: Actions.ADD_TO_CART,
        payload: cartItem
    }
}