import React, { useState } from 'react';
import QuantityControl from '../../../components/QuantityControl';
import {clCart} from '../../../store/actions/cartActions';
//import * as cartActions from '../../../store/actions/cartActions';
// import * as authActions from '../../store/actions/authActions';
import { connect } from 'react-redux';
import './style.css';
let k=Math.random();
const CartItem = props => {
    const [hide, setHide] = useState(false);
  const handleClose = () => {
    setHide(true);
  };
    return (
       // props.unhide &&
       !hide &&  props.quantity!==0 && 
        <div className="SingleItem" key={props.productId}>
            <div className="ItemWrapper">
                <div className="ItemImage" style={{width: '80px', height: '80px', overflow: 'hidden', position: 'relative'}}>
                    <img style={{maxWidth: '100%', maxHeight: '100%', position: 'absolute', left: '50%', transform: 'translateX(-50%)'}} src={props.image} alt="" />
                </div>
                <div className="ItemDetails">
                    <p className="ItemName">{props.name}</p>
                    <p className="ItemPrice">${props.total}</p>
                </div>
            </div>
         
            <div className="CartActionButtons">
              <QuantityControl
                    productId={props.productId}
                    key={Math.random()}
                    name={props.name} 
                    quantity={props.quantity}
                    unhide={props.unhide}             
                    //changeQuantity={props.changeQuantity}
                    increaseQuantity={props.increaseQuantity}
                    decreaseQuantity={props.decreaseQuantity}
                    resetQuantity={props.resetQuantity}
                    clCart={props.clCart}
                />
            <button key={k+5}
										style={{ float: "center" , height:'30px'}}
										className="btn btn-danger btn-xs" 
                                        onClick={(e)=>{  handleClose(e);
                                                        props.clCart(props.productId)
                                                      }
                                                }	
									>
										X
									</button> 
               
             
            </div>
        </div>
    )
}
  const mapDispatchToProps = dispatch => {
     return {
              clCart: (id) => dispatch(clCart(id)),
//            removeFromCart: (id) => dispatch(removeFromCart(id)),
         }
      
 }
 const mapStateToProps = state => {
    return {
        auth: state.auth,
        cart: state.cart
     //   cart: state.cartReducers
    }
}
//export default CartItem;
export default connect(mapStateToProps,mapDispatchToProps) (CartItem);