
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';
import React, {useRef} from 'react'



const DialogItem = (props) => {
    return (
       <NavLink to={`/dialogs/${props.id}`}>
            <div className={s.dialog}>
                {props.name}
            </div>
        </NavLink> 
    )
}
const Message = (props) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}

const Textarea = (props) => {
    const textareaItem = useRef()

    const sendTextareaUpdate = () => {
        let text = textareaItem.current.value
        props.dispatch({
            type: 'UPDATE-MESSAGE',
            text: text
        })

    }
    const addText = () =>  {
        props.dispatch({
            type: 'ADD-MESSAGE'
        })
    }
    
    return (
        <div>
            <textarea onChange={sendTextareaUpdate} ref={textareaItem} className={s.textarea} value={props.textareaMessages}></textarea>
            <button onClick={addText} className={s.button}>Отправить</button>
        </div>
    )
}

const Dialogs = (props) => {
    
    let dialogsElements = props.dialogPage.dialogs.map(function(item){
        return (<DialogItem id={item.id} name={item.name} />)
    })

    let messagesElements = props.dialogPage.messages.map(function(item){
        return  <Message sideId={item.sideId} message={item.message} />
    })
    /////////////..........................................................
    let dialogsElement = useRef()
    let dialogsElementFuncPlus = () => {
        dialogsElement.current.className = 'Dialogs_dialogs__oJo4z Dialogs_active__KU5G8'
    }   
    let dialogsElementFuncMinus = () => {
        dialogsElement.current.className = 'Dialogs_dialogs__oJo4z'
    } 
    ////// Достаю элемент и пытаюсь поменять класс при событии
    
    return (
        <div className={s.dialogs_wrapper}>
            <div ref={dialogsElement} className={`${s.dialogs} ${s.active}`}>
               {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div className={s.div_textarea}>
                <Textarea
                    textareaMessages={props.dialogPage.textareaMessages}
                    dispatch={props.dispatch}
                 />
            </div>
        </div>
    )
}

export default Dialogs;



