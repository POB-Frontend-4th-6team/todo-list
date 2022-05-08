import { createContext, useContext, useState } from 'react'

import PropTypes from 'prop-types'

const SideBarContext = createContext()

export const useSideBarStore = () => useContext(SideBarContext)

function SideBarContextProvider({ children }) {
  const [isSideOpen, setIsSideOpen] = useState(false)

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value = {
    isSideOpen,
    setIsSideOpen,
  }

  return <SideBarContext.Provider value={value}>{children}</SideBarContext.Provider>
}

export default SideBarContextProvider

SideBarContextProvider.propTypes = {
  children: PropTypes.node,
}
