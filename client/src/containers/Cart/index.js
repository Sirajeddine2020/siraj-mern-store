import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import './style.css';
import CartItem from './CartItem';
import * as cartActions from '../../store/actions/cartActions';
import * as authActions from '../../store/actions/authActions';
import { connect } from 'react-redux';
import CartPrice from '../../components/CartPrice';

class Cart extends Component{

    state = {
        cartItems: [],
       
    }
    

    decreaseQuantity = (e, productId) => {
        this.updateCart(productId, -1);
    }

    increaseQuantity = (e, productId) => {
        this.updateCart(productId, 1);
    }

    // resetQuantity = (e, productId) => {
    //     this.updateCart(productId, 0);
    // }

    updateCart = async (productId, quantity) => {
        try{
            const auth = this.props.auth;
            let product = this.state.cartItems.find(item => item.product === productId);
            if(product.quantity > 0 || (product.quantity === 0 && quantity>0))
            
            {
                product = {
                productId: product.product,
                quantity: parseInt(product.quantity) + parseInt(quantity) >0 ? (parseInt(product.quantity) + parseInt(quantity)):0,
                newQuantity: quantity,
                price: product.price,
                total: parseFloat(product.total) + parseFloat( product.price * quantity )>0?parseFloat(product.total) + parseFloat( product.price * quantity ):0
            }
        
        
         
            // if(product.quantity < 0){
            //     return;
            // }
         const response = await this.props.updateCart(auth.token, auth.user.userId, product);
          if(response.ok === 1){
                const {cartItems} = this.state;
                this.setState({

                   
                       
               //     cartItems: cartItems.map(item => item.product === productId ? 
                //         {...item, quantity: item.quantity + quantity, total: item.total + (item.price * quantity)}: item)
                // }
               // ({
                    cartItems: cartItems.map(item => item.product === productId ? 
                        {...item, quantity: (item.quantity > 0 || (item.quantity === 0 && quantity>0)) ? item.quantity +quantity:item.quantity, 
						total: (item.quantity > 0 || (item.quantity === 0 && quantity>0)) ? (item.total +quantity*item.price):item.total}: item)
                })
               
            }}
        }catch(error){
            console.log(error);
        }
        
    }

    // changeQuantity = (e, productId) => {

    //     console.log(e.target.value);

    //     if(isNaN(e.target.value)){
    //         return;
    //     }

    //     const firstDigit = parseInt(e.target.value.split("")[0]);
    //     if(firstDigit === 0){
    //         return;
    //     }

    //     //alert(e.target.value);

    //     this.updateCart(productId, parseInt(e.target.value));
    // }

    componentDidMount() {
        if(!this.props.auth.isAuthenticated){
            this.props.getToken()
            .then(result => {
                if(result){
                    const cartItems = this.props.getCartItems(this.props.auth.token, this.props.auth.user.userId);
                    return cartItems;
                }
                return [];
            })
            .then(cartItems => {
                if(cartItems.cart.length > 0){
                    this.setState({
                        cartItems: this.props.cart.cartItem
                    })
                }
            })
            .catch(error => {
                console.log(error);
            })
        }else{
            this.setState({
                cartItems: this.props.cart.cartItem
              
            })
        }
      
    }

    render (){

        return (
            <React.Fragment>
                <Header />
                <div className="Content">
                    <div className="CartWrapper">
                        <div className="CartDetails">
                            {/* List cart items */}
                            <div className="CardTitle">
                                <h3>My Cart</h3>
                            </div>
                            <div className="CardBody">

                                {
                                    this.state.cartItems.map(product => 
                                       // product.unhide===true &&
                 product.quantity!==0 &&   <CartItem
                                            key={product.product}
                                            productId={product.product}
                                            name={product.name}
                                            image={product.image}
                                            price={product.price}
                                            quantity={product.quantity}
                                            total={product.total}
                                            unhide={product.unhide}
                                            //name="quantity" 
                                           // changeQuantity={this.changeQuantity}
                                            increaseQuantity={this.increaseQuantity}
                                            decreaseQuantity={this.decreaseQuantity}
                                            resetQuantity={this.resetQuantity}
                                    />)
                                  
                             
                                }
                               
                                

                                <div className="PlaceOrder">
                                    <button className="PlaceOrderButton" onClick={() => this.props.history.push('/place-order')}>Place Order</button>
                                
                                    <button className="btn btn-secondary float-right" 
                                            onClick={()=>{this.props.clearCart();
                                               // this.updateCart(this.props.product,0)
                                            }} 
                                            style={{ marginRight: "10px" }}>Clear Cart</button>                    
                                    
                                </div>

                            </div>
                        </div>
                        
                        <CartPrice
                                            //key={new Date()}                                           
                                           // cartCount={this.state.cartItems.reduce((acc,curr)=>acc+curr.quantity)}
                                            //totalAmount={this.props.cart.reduce((acc,curr)=>acc+curr.price)}
                                            />
                                
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth,
        cart: state.cart
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCartItems: (token, userId) => dispatch(cartActions.getCartItems(token, userId)),
        updateCart: (token, userId, product) => dispatch(cartActions.updateCart(token, userId, product)),
        getToken: () => dispatch(authActions.getToken()),
        clearCart: () => dispatch(cartActions.clearCart()),
       
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);