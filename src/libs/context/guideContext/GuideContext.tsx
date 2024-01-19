'use client'
import { createContext, useContext, useState } from "react"


type GuideContextProviderProps = { children: React.ReactNode }

type GuideContext = {
    showGuide: boolean,
    setShowGuide : React.Dispatch<React.SetStateAction<boolean>>
}

const GuideContext = createContext<GuideContext | null>(null)

export const GuideContextProvider = ({ children }: GuideContextProviderProps) => {
    const [showGuide, setShowGuide] = useState<boolean>(false)
    return (
        <GuideContext.Provider value={{ showGuide, setShowGuide }}>
            {children}
        </GuideContext.Provider>
    )
}

export const useGuideContext = () => {
    const context = useContext(GuideContext)
    if (!context) {
        throw new Error('context must be within provider')
    }
    return context
}
