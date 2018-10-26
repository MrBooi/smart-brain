import React from 'react';
import ProfileIcon from '../Profile/profileIcon';


const Navigation = ({ onRouteChange, isSignedIn ,toggleModal }) => {
    if (isSignedIn) {
      return (
        <div>
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
        <ProfileIcon onRouteChange={onRouteChange} toggleModal={toggleModal}/>
        </nav>
        </div>
      );
    } else {
      return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
          <p onClick={() => onRouteChange('signin')} className='f3 link dim black underline pa3 pointer'>Sign In</p>
          <p onClick={() => onRouteChange('register')} className='f3 link dim black underline pa3 pointer'>Register</p>
        </nav>
      );
    }
}

export default Navigation;