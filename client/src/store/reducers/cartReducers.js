import { ADD_TO_CART, GET_CART_DETAILS, UPDATE_CART,REMOVE, CLEAR_CART } from "../actions/cartActions"

const initState = {
    cartItem: [],
    totalAmount: 0,
    cartCount: 0,
	showCart: false
}

const cartReducers = (state = initState, actions) => {
    switch(actions.type){
        case ADD_TO_CART:
            const cartItem = state.cartItem;
            let updatedCartItem = [];
            let totalAmount=0;

            const itemCount = state.cartItem.filter(item => item.product === actions.cartItem.product);

            if(itemCount.length === 0){
                updatedCartItem = [
                    ...cartItem,
                    {
                        product: actions.cartItem.product,
                        name: actions.cartItem.name,
                        image: actions.cartItem.image,
                        price: actions.cartItem.price,
                        quantity: actions.cartItem.quantity,
                        total: actions.cartItem.quantity * actions.cartItem.price
                       // unhide:true
                    }
                ];
            }else{
                updatedCartItem = cartItem.map(item => 
                    item.product === actions.cartItem.product ?
                    {
                        ...item,
                        quantity: (item.quantity + actions.cartItem.quantity)>0 ? item.quantity + actions.cartItem.quantity :0 ,
                        total: (item.total + actions.cartItem.price)> 0 ? item.total + actions.cartItem.price :0
                    } : item
                    )
            }
            totalAmount = (state.totalAmount + actions.cartItem.price)> 0 ? state.totalAmount + actions.cartItem.price :0
            state = {...state,
                cartItem: updatedCartItem,
                totalAmount: totalAmount,
                cartCount: state.cartCount + 1,
			    showCart:true
            }
            break;

        case GET_CART_DETAILS:
            const cItem = actions.cartItems.cart;
            let totalAmt = 0;
            let quantityCount = 0;
            const updateCartItem = cItem.map(item => {
                totalAmt += item.total;
                quantityCount += item.quantity;
              return {					
                    product: item.product._id,
                    name: item.product.name,
                    image: item.product.productPic[0],
                    price: item.price,
                    quantity: item.quantity,
                    total: item.total
                   // unhide:true
                }
               
            })
          
            state = {...state,
                cartItem: updateCartItem,
                totalAmount: totalAmt,
                cartCount: quantityCount,
               			
            }
            break;
        case UPDATE_CART:
            const updateItem = actions.item;
            var x=state.cartItem;
            const cartItes = x.map(item => {
                //if (state.showCart) 
                return (item.product === updateItem.productId ? 
                    {
                        ...item,
                        quantity: item.quantity+updateItem.quantity,
                        total: item.total+updateItem.total
                    } : item)
                });
                state = {...state,
                    cartItem: cartItes,
                    // totalAmount: parseFloat(state.totalAmount) + parseFloat(updateItem.price * updateItem.quantity) >=0 ? parseFloat(state.totalAmount) + parseFloat(updateItem.price * updateItem.quantity) :parseFloat(state.totalAmount) ,
                    // cartCount: parseInt(state.cartCount,10) + parseInt(updateItem.quantity,10) >=0 ? parseInt(state.cartCount,10) + parseInt(updateItem.quantity,10) : parseInt(state.cartCount,10)
                    
                    totalAmount: parseFloat(state.totalAmount) + parseFloat(updateItem.price * updateItem.newQuantity) >=0 ? parseFloat(state.totalAmount) + parseFloat(updateItem.price * updateItem.newQuantity) :parseFloat(state.totalAmount) ,
                    cartCount: parseInt(state.cartCount,10) + parseInt(updateItem.newQuantity,10) >=0 ? parseInt(state.cartCount,10) + parseInt(updateItem.newQuantity,10) : parseInt(state.cartCount,10)
                
                }
                break;      
      
		case REMOVE:
           
            let indox=state.cartItem.findIndex(
                    item => item.product === actions.id
                  );
           if (indox>=0 && state.cartItem[indox].quantity) {
            
            
            let newCart=state.cartItem.filter(item => (item.product !== actions.id && item.quantity));
            let qtt=0;
            let ttt=0
            for (let el of newCart) {
             qtt+= el.quantity;
             ttt+=el.total
            }
            return {
                ...state,
                cartItem: newCart,
                cartCount:  qtt,
                totalAmount:  ttt,
                showCart:false
                
              };
           }
           else return state;

              
        
         
        
        

        case CLEAR_CART: 
        //state=initState;
         const Ct= state.cartItem;
     
        // console.log("Citems... "+Citems)
        	/*for(item in Citems){
                var x=item={...item, item.quantity: 0, item.total:0
                }}*/
                 Ct.forEach(function(element, index, array) {
                        array[index].quantity=0;                      
                        array[index].total=0;
                        array[index].newQuantity=0;  
                    })
               // });
           state={
                ...state,
                cartItem:Ct,
                totalAmount: 0,
                cartCount: 0,
                showCart:false
            }
            return state;
        
            //break;
        default:
        
            break;
    }

    return state;
}

export default cartReducers;