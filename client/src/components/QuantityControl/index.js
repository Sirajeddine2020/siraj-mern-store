import React from 'react';
import './style.css';

let k=Math.random();
const QuantityControl = props => {
 
    return (
        props.quantity!==0 && 
          <div className= {props.quantity>5 ? "QtyControl pinko": "QtyControl altro" }key={k} >
            <button className='button1' key={k+1} onClick={(e) =>props.decreaseQuantity(e, props.productId)} >-</button>
                <input key={k+2}
                    type="text" 
                  // onChange={(e) => {props.changeQuantity(e, props.productId)}} 
                    name={props.name} 
                    value={props.quantity}
                    
                />
               
            <button className='button1' key={k+3} onClick={(e) => props.increaseQuantity(e, props.productId)}>+</button>
            {/* <button className='large' key={k+4} style={{width:'50px', height:'30px', color: '-moz-initial yellow', background:'lime'}} onClick={(e) => props.resetQuantity(e, props.productId)}>Reset</button> */}
            
        </div>
    );
}

export default QuantityControl;