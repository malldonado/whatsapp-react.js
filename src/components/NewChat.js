import React, {useState} from 'react'
import './NewChat.css';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

function NewChat() {

  const [list, setList] = useState([
    {id: 123, avatar: 'https://www.w3schools.com/howto/img_avatar2.png', name: 'Matheus Maldonado'},
    {id: 123, avatar: 'https://www.w3schools.com/howto/img_avatar2.png', name: 'Matheus Maldonado'},
    {id: 123, avatar: 'https://www.w3schools.com/howto/img_avatar2.png', name: 'Matheus Maldonado'},
    {id: 123, avatar: 'https://www.w3schools.com/howto/img_avatar2.png', name: 'Matheus Maldonado'}
  ]);

  return (
    <div className='newChat'>
        <div className="newChat--head">
            <div className="newChat--backButton">
                <ArrowBackIcon style={{color: '#fff'}} />
            </div>
            <div className="newChat--headtitle">Nova Conversa</div>
        </div>
        <div className="newChat--list">
            {list.map((item, key)=> (
                <div className="newChat--item" key={key}>
                    <img className='newChat--itemavatar' src={item.avatar} alt="" />
                    <div className="newChat--itemname">{item.name}</div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default NewChat