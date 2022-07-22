import React from 'react'

const Appcontext = React.createContext()
const AppProvider = ({children}) => {
    const [modal, setModal] = React.useState(false)
    const [sidebar, setSidebar] = React.useState(false)

    function openModal () {
        setModal(true)
    }

    function closeModal () {
        setModal(false)
    }

    function openSidebar () {
        setSidebar(true)
    }

    function closeSidebar () {
        setSidebar(false)
    }

    return <Appcontext.Provider 
        value={{
            modal, 
            sidebar, 
            openModal, 
            openSidebar,
            closeModal, 
            closeSidebar
        }}>
        {children}
    </Appcontext.Provider>
}

export const useGlobalContext = () => {
    return React.useContext(Appcontext)
}

export {Appcontext, AppProvider}