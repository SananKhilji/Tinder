import React from 'react'
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';
import "./Header.css";

function Header() {
    return (
        <div className='header'>
        <IconButton fontSize='large' className='header-icons'>    
        <PersonIcon fontSize='large' className='header-icons'/>
        </IconButton>

        <img 
        className='header-logo'
        src="https://download.logo.wine/logo/Tinder_(app)/Tinder_(app)-Flame-Logo.wine.png"
        alt=''
        />

        <IconButton fontSize='large' className='header-icons'>    
        <ForumIcon fontSize='large' className='header-icons'/>
        </IconButton>
        </div>
    )
}
export default Header
