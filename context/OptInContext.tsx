'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

interface OptInContextType {
  isOpen: boolean
  openModal: () => void
  closeModal: () => void
}

const OptInContext = createContext<OptInContextType>({
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
})

export function OptInProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <OptInContext.Provider
      value={{
        isOpen,
        openModal: () => setIsOpen(true),
        closeModal: () => setIsOpen(false),
      }}
    >
      {children}
    </OptInContext.Provider>
  )
}

export function useOptIn() {
  return useContext(OptInContext)
}
