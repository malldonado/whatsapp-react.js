import { async } from '@firebase/util';
import React from 'react';
import './Login.css';
import Api from '../Api';

const handleFacebookLogin = async ({onReceive}) => {
    let result = await Api.fbPopup();
    if(result) {
      onReceive(result.user);
    }
    else {
      alert('erro');
    }
}

function Login() {
  return (
    <div className='login'>
        <button onClick={handleFacebookLogin}>Logar com facebook</button>
    </div>
  )
}

export default Login