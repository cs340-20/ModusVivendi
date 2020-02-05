import React, { components, useState } from 'react'
import "./login.css"

export default function login(props){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function vaildateFrom(){
        return email.lenght > 0 && password.lenght > 0;
    }

return(
    <div className = "Login">
        <form onSubmit={handleSubmit}>
            <FromGroup controlId = "email" bsSize="large">
                <ControlLabel> Email </ControlLabel>
                <FromControl
                    autoFocus
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />   
            </FromGroup>
            <Button block bsSize="large" disable={!vaildateFrom()} type = "submit">
                login
            </Button>
        </form>
    </div>   
);
}