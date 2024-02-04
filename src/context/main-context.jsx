import React, { createContext, useContext, useState } from 'react'

const Main = createContext()

export const useMain = () => {
    return useContext(Main)
}

const MainContext = ({children}) => {

  const [modal , setModal] = useState(false)
  const openModal = () => {
    setModal(true)
    window.scrollTo(0, 0);
    document.querySelector('body').style.overflow = 'hidden'
  }
  const closeModal = () => {
    setModal(false)
    document.querySelector('body').style.overflow = 'inherit'

  }
  return (
    <>
        <Main.Provider value={{
            modal,
            setModal,
            openModal,
            closeModal
        }}>
            {children}
        </Main.Provider>
    
    </>
    )
}

export default MainContext