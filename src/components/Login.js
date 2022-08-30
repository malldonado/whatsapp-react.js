import { async } from '@firebase/util';
import {signInWithPopup, FacebookAuthProvider} from 'firebase/auth';
import { authentication } from '../firebase-config';
import React from 'react';
import './Login.css';
import Api from '../Api';

const signInWithFacebook = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(authentication, provider)
    .then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err);
    })
}

function Login() {
  return (
    <div className='login'>
        <button onClick={signInWithFacebook}>Logar com facebook</button>
    </div>
  )
}

export default Login