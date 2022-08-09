import React, {useState} from 'react'
import './NewChat.css';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

function NewChat({user, chatlist, show, setShow}) {

  const [list, setList] = useState([
    {id: 123, avatar: 'https://www.w3schools.com/howto/img_avatar2.png', name: 'Matheus Maldonado'},
    {id: 123, avatar: 'https://www.w3schools.com/howto/img_avatar2.png', name: 'Matheus Maldonado'},
    {id: 123, avatar: 'https://www.w3schools.com/howto/img_avatar2.png', name: 'Matheus Maldonado'},
    {id: 123, avatar: 'https://www.w3schools.com/howto/img_avatar2.png', name: 'Matheus Maldonado'}
  ]);

  const handleClose = () => {
    setShow(false);
  }

  return (
    <div className='newChat' style={{left: show ? 0 : -415}}>
        <div className="newChat--head">
            <div onClick={handleClose} className="newChat--backButton">
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