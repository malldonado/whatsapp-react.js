import { async } from '@firebase/util';
import React from 'react';
import './Login.css';

const handleFacebookLogin = async () => {
    let result = await Api.fbPopup();
    if(result) {

    }
    else {alert('erro');}
}

function Login() {
  return (
    <div className='login'>
        <button onClick={handleFacebookLogin}>Logar com facebook</button>
    </div>
  )
}

export default Login