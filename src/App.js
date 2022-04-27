import React from 'react';
import './App.css';

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';

export default() => {
  return (
    <div className='app-window'>
      <div className='sidebar'>
        <header>
          <img className='header--avatar' src="https://www.w3schools.com/howto/img_avatar2.png"/>
          <div className='header--buttons'>
            <div className='header--btn'>
              <DonutLargeIcon style={{color: '#919191'}}></DonutLargeIcon>
            </div>
            <div className='header--btn'>
              <ChatIcon style={{color: '#919191'}}></ChatIcon>
            </div>
            <div className='header--btn'>
              <MoreVertIcon style={{color: '#919191'}}></MoreVertIcon>
            </div>
          </div>
        </header>
        <div className='search'>
          <div className='search--input'>
            <SearchIcon fontSize='small' style={{color: '#919191'}}></SearchIcon>
            <input type="search" placeholder='Procurar ou começar uma nova converça'/>
          </div>
        </div>
        <div className='chatlist'>...</div>
      </div>
      <div className='contentArea'>
        ...
      </div>
    </div>
  );
}