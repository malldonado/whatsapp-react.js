import React, {useState, useEffect, useRef} from 'react';
import EmojiPicker from 'emoji-picker-react';
import './ChatWindow.css';
import MensageItem from './MensageItem';
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVertSharp';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import CloseIcon from '@material-ui/icons/Close';
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';

export default ({user}) => {

  let recognition = null;

  let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if(SpeechRecognition !== undefined) {
    recognition = new SpeechRecognition();
  }

  const body = useRef();

  const [emojiOpen, setSmojiOpen] = useState(false)
  const [text, setText] = useState('');
  const [listening, setListening] = useState();
  const [list, setList] = useState([
    {author:123, body: 'bla bla bla bla'}, 
    {author: 1234, body: 'bla bla bla bla'}, 
    {author: 1234, body: 'bla bla bla bla'}, 
    {author: 1234, body: 'bla bla bla bla'},
    {author:123, body: 'bla bla bla bla'}, 
    {author: 1234, body: 'bla bla bla bla'}, 
    {author: 1234, body: 'bla bla bla bla'}, 
    {author: 1234, body: 'bla bla bla bla'},
    {author:123, body: 'bla bla bla bla'}, 
    {author: 1234, body: 'bla bla bla bla'}, 
    {author: 1234, body: 'bla bla bla bla'}, 
    {author: 1234, body: 'bla bla bla bla'},
    {author:123, body: 'bla bla bla bla'}, 
    {author: 1234, body: 'bla bla bla bla'}, 
    {author: 1234, body: 'bla bla bla bla'}, 
    {author: 1234, body: 'bla bla bla bla'},
    {author:123, body: 'bla bla bla bla'}, 
    {author: 1234, body: 'bla bla bla bla'}, 
    {author: 1234, body: 'bla bla bla bla'}, 
    {author: 1234, body: 'bla bla bla bla'},
    {author:123, body: 'bla bla bla bla'}, 
    {author: 1234, body: 'bla bla bla bla'}, 
    {author: 1234, body: 'bla bla bla bla'}, 
    {author: 1234, body: 'bla bla bla bla'}
  ]);

  useEffect(() => {
    if(body.current.scrollHeight > body.current.offsetHeight) {
      body.current.scrollTop = body.current.scrollHeight - body.current.offsetHeight;
    }
  }, [list]);

  const handleEmojiClick = (e, emojiObject) => {
    setText( text + emojiObject.emoji);
  }

  const handleOpenEmoji = () => {
    setSmojiOpen(true);
  }

  const handleCloseEmoji = () => {
    setSmojiOpen(false);
  }

  const handleMicClick = () => {
    if(recognition !== null) {

      recognition.onstart = () => {
        setListening(true);
      }

      recognition.onend = () => {
        setListening(false);
      }

      recognition.onresult = (e) => {
        setText( e.results[0][0].transcript );
      }

      recognition.start();

    }
  }

  const handleSendClick = () => {

  }
  
  return (
    <div className="chatWindow">
        <div className="chatWindow--header">
          <div className="chatWindow--headerinfo">
            <img className='chatWindow--avatar' src="https://www.w3schools.com/howto/img_avatar2.png" alt="" />
            <div className="chatWindow--name">Bonie lacerda</div>
          </div>

          <div className="chatWindow--headerbuttons">
            <div className="chatWindow--btn">
              <SearchIcon style={{color: '#919191'}} />
            </div>
            <div className="chatWindow--btn">
              <AttachFileIcon style={{color: '#919191'}} />
            </div>
            <div className="chatWindow--btn">
              <MoreVertIcon style={{color: '#919191'}} />
            </div>
          </div>
        </div>

        <div ref={body} className="chatWindow--body">
          {list.map((item, key)=>(
            <MensageItem 
            key={key}
            data={item}
            user={user}
            />
          ))}
        </div>

        <div className='chatWindow--emojiarea' style={{height: emojiOpen ? '200px' : '0'}}>
          <EmojiPicker onEmojiClick={handleEmojiClick}/>
        </div>

        <div className="chatWindow--footer">
          <div className="chatWindow--pre">
            <div className='chatWindow--btn' onClick={handleCloseEmoji} style={{width: emojiOpen ? 40 : 0}}>
              <CloseIcon style={{color: '#919191'}} />
            </div>
            <div className='chatWindow--btn' onClick={handleOpenEmoji}>
              <InsertEmoticonIcon style={{color: emojiOpen ? '#009688': '#919191'}} />
            </div>
          </div>
          <div className="chatWindow--inputarea">
            <input className='chatWindow--input' type="text" placeholder='Digite uma mensagem' value={text} onChange={e=>setText(e.target.value)} />
          </div>
          <div className="chatWindow--pos">

            {text === '' && 
              <div onClick={handleMicClick} className='chatWindow--btn'>
                <MicIcon style={{color: listening ? '#126ece' : '#919191'}} />
              </div>
            }
            {text !== '' &&  
              <div onClick={handleSendClick} className='chatWindow--btn'>
                <SendIcon style={{color: '#919191'}} />
              </div>
            }

          </div>
        </div>
    </div>
  )
}
