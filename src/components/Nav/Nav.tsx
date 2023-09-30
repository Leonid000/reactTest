import {NavLink} from 'react-router-dom'




const Nav = ()=> {

    return (
         <nav className="nav">
                <NavLink to='/' ><div className="item">Profile</div></NavLink> 
                <NavLink  to='/dialogs' > <div className="item"> Dialogs </div> </NavLink>
                <NavLink  to='/news'><div className="item"> News  </div></NavLink>
                <div  className="item" >Music</div>
                <div className="nav_settings">Settings</div>
                <div> 
                    
                    
                </div>
            </nav>
    )
}

export default Nav; 