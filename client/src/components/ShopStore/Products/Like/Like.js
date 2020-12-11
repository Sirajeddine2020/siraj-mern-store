import React from "react";
import { FontAwesomeIcon } from "./Icons/react-fontawesome";
import { faHeart } from './Icons/faHeart';
import './Like.css';


class Like extends React.Component {
    
    constructor(props) {
        super(props);
        this.state={ liked: false  };
      }
     
     render() {
        return (         

     <div>
         <div className="heart">
         {this.state.liked ? <h4 style= {{color: 'red', fontSize:'25px', backgroundColor:'limegreen'}}> You liked it!</h4> : <h4 style= {{color: 'white', fontSize:'25px'}}> Click to like</h4>}
         <FontAwesomeIcon icon={faHeart} size="2x"  color={this.state.liked ? "red" : "gray"} onClick={(e)=>{this.setState({liked:!this.state.liked})}} ></FontAwesomeIcon>
     </div>
     </div>
    )
  }

};

 


export default Like;