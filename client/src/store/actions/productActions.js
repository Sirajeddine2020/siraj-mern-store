import { base_url } from "../../constants";
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const GET_PRODUCT_BY_ID= 'GET_PRODUCT_BY_ID';
export const GET_PRODUCT_CATEGORIES = 'GET_PRODUCT_CATEGORIES';
export const FILTER_PRODUCTS_BY_CATEGORY = 'FILTER_PRODUCTS_BY_CATEGORY';
export const ORDER_PRODUCTS_BY_PRICE ='ORDER_PRODUCTS_BY_PRICE'


export const fetchProducts = () => (dispatch) => {
    return async dispatch => {

        try{
             const response = fetch(`${base_url}/products/`)
           
            const jsonResponse =  response.json();
            if(response.status === 200){
                dispatch({
                    type: FETCH_PRODUCTS,
                    products: jsonResponse.message
                });
            }

            return jsonResponse;

        }catch(error){
            console.log(error);
        }

    }
}

export const getProducts = (categoryCATEGORY = '', filter) => {
    return async dispatch => {

        try{

            categoryCATEGORY = (categoryCATEGORY === 'all') ? '' : categoryCATEGORY;

            let query = '';
            if(filter){
                query = '?filter=1&'
                for(let prop in filter){
                    query += `${prop}=${filter[prop]}&`
                }
                query = query.substring(0, query.length-1);
            }

            const response = await fetch(`${base_url}/products/${categoryCATEGORY}${query}`);
            const jsonResponse = await response.json();
            if(response.status === 200){
                dispatch({
                    type: GET_PRODUCTS,
                    products: jsonResponse.message
                });
            }

            return jsonResponse;

        }catch(error){
            console.log(error);
        }

    }
}

export const getCategories =  () => async (dispatch) => {
         fetch(`${base_url}/category`, {
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        .then(response => response.json())
        .then(jsonResponse => {
            dispatch({
                type: GET_PRODUCT_CATEGORIES,
                categories: jsonResponse.message
            });
        })
        .catch(error => {
            console.log(error);
        });
    }


export const getProductById = (productId) => {
    return async dispatch => {
        try{

            const response =  fetch(`${base_url}/products/${productId}`);
            const jsonResponse =  response.json();
            if(response.status === 200){

               dispatch({
                    type: GET_PRODUCT_BY_ID,
                    products: jsonResponse.message

            })


        }
        }
		catch(error){
            console.log(error);
    }
}
}

export const filterProducts = (products, category) => (dispatch) => {
    dispatch({
      type: FILTER_PRODUCTS_BY_CATEGORY,
      payload: {
        category: category,
        items:
          category === ""
            ? products
            : products.filter(
                (x) => x.category===category
              ),
      },
    });
  };
  
  export const sortProducts = (items, sort) => async(dispatch) => {
    const products = items;
    if (sort !== "") {
       
      products.sort((a, b) =>
        sort === "lowestprice"  
          ?a.price < b.price
            ? -1
            : 1
          : a.price < b.price
          ? 1
          : -1
      );
     
    } else {
      products.sort((a, b) => (parseInt(a.id,10) > parseInt(b.id,10) ? 1 : -1));
    }
    dispatch({
      type: ORDER_PRODUCTS_BY_PRICE,
      payload: {
        sort: sort,
        items: products,
      },
    });
  };

