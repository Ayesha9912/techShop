export const AddtoCart = (id, price, name, img) => {
  return {
    type: 'ADD_TO_CART',
    payload: {
      id: id,
      price: price,
      name: name,
      img: img
    }
  }
}

export const Plus = (id)=>{
  return{
    type: "PLUS",
    payload: id
  }
}
export const Minus = (id)=>{
  return{
    type: "MINUS",
    payload: id
  }
}
export const Remove = (id)=>{
  return{
    type: "REMOVE",
    payload: id
  }
}
export const RemoveModal = ()=>{
  return{
    type: "REMOVE_MODAL",
  }
}