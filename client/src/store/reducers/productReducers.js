import { GET_PRODUCTS,GET_PRODUCT_BY_ID, GET_PRODUCT_CATEGORIES, FILTER_PRODUCTS_BY_CATEGORY, ORDER_PRODUCTS_BY_PRICE } from "../actions/productActions";

const initState = {
    products: [],
    categories: [],
	items: [], 
	filteredItems: [], 
	category: "", 
	sort: "" 
}


const productReducers = (state = initState, action) => {
    switch(action.type){
        case GET_PRODUCTS:
            state = {
                ...state,
                products: action.products
            }
            break;
        case GET_PRODUCT_BY_ID:
            state = {
                ...state,
                products: action.products
            } 
            break;  
        case GET_PRODUCT_CATEGORIES:
            state = {
                ...state,
                categories: action.categories
            }
            break;
		case FILTER_PRODUCTS_BY_CATEGORY:
        state = {
          ...state,
          filteredItems: action.payload.items,
          category: action.payload.category,
        };
        break;
      case ORDER_PRODUCTS_BY_PRICE:
        state = {
          ...state,
          filteredItems: action.payload.items,
          sort: action.payload.sort,
        };	
        break;
        default:
            
    }

    return state;

}

export default productReducers;