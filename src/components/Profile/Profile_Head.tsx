import avatar from '../../img/avatar.png'
const Profile_head = () => {
    return (
        <div className="profile_head">
            <div className="head_overlay"></div>
            <div className="head">
                <img className="head_avatar" src={avatar} alt="" />
                <div className="head_content">
                    <div className="content_title">Mr.Nosik Super</div>
                    <div className="content_about">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque cupiditate suscipit delectus sapiente enim velit placeat aspernatur optio quibusdam numquam rem.</div>
                </div>
            </div>
        </div>
    )
}
export default Profile_head;