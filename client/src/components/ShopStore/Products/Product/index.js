import React from 'react';
import { Link, withRouter } from 'react-router-dom';
//import Flippy, { FrontSide, BackSide } from 'react-flippy';
//import Like from "../Like/Like";
//import Rate from "../Rate/Rate";
//import Description from "../Description/Description";
const Product = props => {

    const url = props.match.url === '/' ? '/products/all' : props.match.url;

    return (
        <div className="Product">        
		<div className="flip-card" key={(props.id)}>
  <div className="flip-card-inner">
    {/* <div className="Product_rating">
    <h3 >rate:</h3>
    <Rate rating={props.rating} key={(props.id)} />
     </div>  */}
    </div> 
         <div className="flip-card-front container">	
           <div className="thumbnail text-center">
           <Link to={`${url}/${props.slug}`}>
                    <p>{props.name}</p>
		         <div className="ProductImage">
                 <img alt="" src={props.productPic[0]} height='250px' width='200px' />
                </div>
                </Link>
                <p>${props.price}</p>
                </div> 
                {/* <div className="ProductDetails"></div> */}        
				{/* <div className="hearty">
				<Like  key={(props.id)} />
				</div> */}
                           
       </div>
       
          {/* <div className="flip-card-back container">     
            <Description product={props} key={props.id}/> 
        </div>  */}
        </div>       
        </div> 
    );
}

export default withRouter(Product);