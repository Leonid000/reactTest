let store = {
    _state: {
        profilePage: {
            posts: [
                {
                    id: 1,
                    caption: 'How are you?',
                    likesCount: 11,
                },
                {
                    id: 2,
                    caption: 'Надпись 2',
                    likesCount: 7,
                },
                {
                    id: 2,
                    caption: 'надпись 3',
                    likesCount: 4,
                },
            ],
            textareaPosts: ''
        },
        dialogPage: {
            messages: [
                { 
                    id: 1,
                    message: 'Hellow',
                    sideId: 1
                },
                {
                    id: 2,
                    message: 'how are you?',
                    sideId: 2
                },
                {
                    id: 3,
                    message: 'dafdsaf3',
                    sideId: 1
                }
            ],
            dialogs: [
                {
                    id: 1,
                    name: 'Valera'
                },
                {
                    id: 2,
                    name: 'Oleg'
                },
                {
                    id: 3,
                    name: 'Mihail'
                },
                {
                    id: 4,
                    name: 'Nosik'
                },
            ],
            textareaMessages: ''
        }
        
    },
    _postsIDcount: 4,
    _messagesIDcount: 3,
    getState(){
        return this._state
    },
    render(){},
    renderObserver(item){
        this.render = item
    },
    dispatch(action){
        if (action.type == 'ADD-POST'){
            let newPost = {
                id: function(){
                    this._postsIDcount++
                    return this._postsIDcount
                }.call(store),
                caption: this._state.profilePage.textareaPosts,
                likesCount: 0
            }
            this._state.profilePage.posts.unshift(newPost)
            this._state.profilePage.textareaPosts = '';
            this.render()
        } 
        else if (action.type == 'UPDATE-POST'){
            this._state.profilePage.textareaPosts = action.text
            this.render()
        } 
        else if (action.type == 'ADD-MESSAGE'){
            let newMessage = {
                id: function(){
                    this._messagesIDcount++
                    return this._messagesIDcount
                }.call(store),
                message: this._state.dialogPage.textareaMessages,
                sideId: 2,
            }
            this._state.dialogPage.messages.push(newMessage)
            this._state.dialogPage.textareaMessages = ''
            this.render()
        } 
        else if (action.type == 'UPDATE-MESSAGE'){
            this._state.dialogPage.textareaMessages = action.text
            this.render()
        }
    }
 
        
}
export default store;
 







