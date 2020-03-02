import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import './home.css'

class Home extends Component {

    render() {
   
     return(
        // <img id="myImg" src="https://github.com/cs340-20/ModusVivendi/blob/master/client/src/images/MV_onlight.png" alt="" width="304" height="228">        
          var filename = "https://github.com/cs340-20/ModusVivendi/blob/master/client/src/images/MV_onlight.png";element.innerHTML = "<img src='" + filename + "'>"
         
         <div>
             <div className="heading">
                WELCOME TO MODUS VIVENDI
            </div>
             <div className="paragraph">
                 Are you ready to lose some wieght or gain some muscle mass? You are in the right place. 
            </div>       
          
         </div>
   
    );
    }
}
export default Home;
