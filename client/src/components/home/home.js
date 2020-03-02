import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import './home.css'

class Home extends Component {

    render() {
           return(
      var img = new Image();
var div = document.getElementById('x');
 
 
img.onload = function() {
 
  div.innerHTML += '<img src="'+img.src+'" />'; 
 
};
 
 
img.src = 'https://github.com/cs340-20/ModusVivendi/blob/master/client/src/images/MV_onlight.png';
               
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
