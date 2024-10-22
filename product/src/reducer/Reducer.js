const initalState = {
    cart: []
}
const Reducer = (state = initalState, action) => {
    console.log(action);
    switch (action.type) {
        case 'ADD_TO_CART':
            const existEle = state.cart.find((item) => {
                return item.id === action.payload.id
            })
            if (existEle) {
                console.log(existEle, "ExisEle")
                console.log(state, "state")
                return {
                    ...state, cart: state.cart.map((item) => item.id === action.payload.id ? { ...item, quantity: item.quantity + 1, totalprice: item.totalprice + item.price } : item)
                }
            }
            else {
                return {
                    ...state, cart: [...state.cart, { ...action.payload, quantity: 1, totalprice: action.payload.price }]
                }
            }
        case 'PLUS':
            return {
                ...state, cart: [...state.cart.map(item => item.id === action.payload ? { ...item, quantity: item.quantity + 1, totalprice: item.totalprice + (item.totalprice / item.quantity) } : item)]
            }

        case 'MINUS':
            return {
                ...state, cart: [...state.cart.map(item => item.id === action.payload && item.quantity > 1 ? { ...item, quantity: item.quantity - 1, totalprice: item.totalprice - (item.totalprice / item.quantity) } : item)]
            }
        case 'REMOVE':
            return {
                ...state, cart: [...state.cart.filter(item => item.id !== action.payload)]
            }
        default:
            return state;
    }
}
export default Reducer
