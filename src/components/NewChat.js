import React, {useState, useEffect} from 'react'
import './NewChat.css';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Api from '../Api';

function NewChat({user, chatlist, show, setShow}) {

  const [list, setList] = useState([

  ]);

  useEffect(() => {
    const getList = async () => {
      if(user !== null) {
        let results = await Api.getContactList(user.id);
        setList(results);
      }
    }
    getList();
  }, [user])

  const addNewChat = async (user2) => {
    await Api.addNewChat(user, user2);

    handleClose();
  }

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
                <div className="newChat--item" onClick={()=> addNewChat(item)} key={key}>
                    <img className='newChat--itemavatar' src={item.avatar} alt="" />
                    <div className="newChat--itemname">{item.name}</div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default NewChat