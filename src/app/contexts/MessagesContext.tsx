'use client'
import react, { createContext, useContext, useState } from "react"
import { MessageType } from "../types/types"
import { MessagesList } from "../constants/constants"

type MessageContextType = {
    messages: MessageType[]
    setMessages: React.Dispatch<React.SetStateAction<MessageType[]>>
}

const MessagesContext = createContext<MessageContextType | undefined>(undefined);

export const useMessages = () => {
    const context = useContext(MessagesContext);

    if(!context) {
        throw new Error('useMessages must be within a MessagesProvider');
    }

    return context;
}

export const MessagesProvider = ({ children } : { children: react.ReactNode}) => {
    const [messages, setMessages] = useState<MessageType[]>(MessagesList);

    return(
        <MessagesContext.Provider value={{ messages, setMessages }}>
            {children}
        </MessagesContext.Provider>
    )
}