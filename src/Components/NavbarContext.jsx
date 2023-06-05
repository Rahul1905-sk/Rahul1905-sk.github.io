import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'

let NavbarContext = React.createContext()

export const useNavbarData = () => {

    return useContext(NavbarContext) 
}

const NavbarContextProvider = ({children}) => {

const [linkName, setLinkName] = useState('')
  return (
    <NavbarContext.Provider value={[linkName, setLinkName]} >
    {children}
    </NavbarContext.Provider>
  )
}

export default NavbarContextProvider