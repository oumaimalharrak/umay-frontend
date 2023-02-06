import React from 'react'
import Custumbutton from './Custumbutton'

const SocialSignUpBtn = () => {
    const onSignInFacebook = ()=>{

    }
  
    const onSignIngoogle=()=>{
  
    }
  return (
    <>
      <Custumbutton text="Sign In with Google" onPress={onSignIngoogle} type="TERTIARY" bgcolor="#fde1e2" fgcolor="#e56c6b"   />
      <Custumbutton text="Sign In with Facebook" onPress={onSignInFacebook} type="TERTIARY" fgcolor="#3c4e90" bgcolor="#eef1fd" />

    </>
  )
}

export default SocialSignUpBtn