const ModalState = {
    status: false
}

const ModalReducer = (Modal = ModalState, action) => {

    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...Modal, status: true
            }
        case 'REMOVE_MODAL':
            return {
                ...Modal, status: false
            }
        default: return Modal
    }
}
export default ModalReducer
