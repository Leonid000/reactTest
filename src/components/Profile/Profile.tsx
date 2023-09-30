import fon from '../../img/fon.jpg'
import Profile_head from './Profile_Head';
import Posts from './Posts'

const Profile = (props:any)=> {
    return (
        
        <div className="content">
                
                <Profile_head/>
                <Posts 
                    profilePage={props.profilePage}
                    dispatch={props.dispatch}
                 />
                
                
         </div>
    )
}

export default Profile;