import image from '../../img/avatar.png'
import React, {useRef, RefObject} from 'react';

const Textarea = (props:any) => {

    const textareaElement:any = useRef();

    const testFunc = () => {
        props.dispatch({
            type: 'ADD-POST'
        })
    }

    let onPostChange = () => {
        let text = textareaElement.current.value
        props.dispatch({
            type: 'UPDATE-POST',
            text: text
        })
    }

    return (
        <div className='textarea_wrapper'>
                <textarea onChange={onPostChange} ref={textareaElement} className='textarea'  value={props.textareaPosts}  />
                <br />  
                <button onClick={testFunc}  className='textarea_button'>Add Post</button>
    
            </div>
    )
}

const Post = (props:any) => {
    return (
        <div>
            <div className='Post'>
                < img className='post_avatar' src={image} alt="" />
                <div className='post_content'>{props.value}</div>
                <div className='post_likes'>likes <div>{props.likesCount}</div></div>
            </div>
            
        </div>
        
    )
}

const posts = (props:any) => {

let postsRows = props.profilePage.posts.map(function(item:any){
    return <Post value={item.caption} likesCount={item.likesCount} />
})
    return (
        <div className="Posts">
            <Textarea 
                textareaPosts={props.profilePage.textareaPosts} 
                dispatch={props.dispatch}
            />
           {postsRows}
        
        </div>
    )
}

export default posts; 