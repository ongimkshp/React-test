import { ADD_ITEM, DEL_ITEM } from "../const"

const cart = [];


const handleCart =  (state = cart, action) => {

    const product = action.payload;
    
    switch(action.type) {
        case ADD_ITEM :
            const exits = state.find(x => x.id === product.id)
            if(exits){
                return state.map(item => {
                   return item.id === product.id ? {...item, qty: item.qty + 1} : item
                })
            }
            else{
                return [
                    ...state,
                    {
                        ...product,
                        qty: 1
                    }
                ]
            }

        case DEL_ITEM :
            const exits1 = state.find(x => x.id === product.id)

            if(exits1.qty === 1){
                return state.filter(x => x.id !== exits1.id)
            }
            else{
                return state.map(item => {
                    return  item.id === product.id ? {...item, qty: item.qty - 1} : item
                })
            }
        default : 
            return cart
    }   

}


export default handleCart