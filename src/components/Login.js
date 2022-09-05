// import { async } from '@firebase/util';
import React from 'react';
import './Login.css';
import Api from '../Api';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({onReceive}) => {

  const handleFacebookLogin = async () => {
      let result = await Api.fbPopup();
      if(result) {
        onReceive(result.user);
      } else {
        alert('Erro!');
      }
  }

    return (
      <div className='login'>
          <button onClick={handleFacebookLogin}>Logar com facebook</button>
      </div>
    )

}


