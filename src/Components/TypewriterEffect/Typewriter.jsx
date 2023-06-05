import React from 'react'
import Typewriter from 'typewriter-effect';


const TypewriterComp = ({arr}) => {
  return (
   
<Typewriter
  options={{
    strings: arr,
    autoStart: true,
    loop: true,
  }}
/>
  )
}

export default TypewriterComp