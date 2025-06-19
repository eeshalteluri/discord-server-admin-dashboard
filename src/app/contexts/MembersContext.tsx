'use client'
import react, { createContext, useContext, useState } from "react"
import { MemberType } from "../types/types"
import { MembersList } from "../constants/constants"

type MemberContextType = {
    members: MemberType[]
    setMembers: React.Dispatch<React.SetStateAction<MemberType[]>>
}

const MembersContext = createContext<MemberContextType | undefined>(undefined);

export const useMembers = () => {
    const context = useContext(MembersContext);

    if(!context) {
        throw new Error('useMembers must be within a MemberProvider');
    }

    return context;
}

export const MembersProvider = ({ children } : { children: react.ReactNode}) => {
    const [members, setMembers] = useState<MemberType[]>(MembersList);

    return(
        <MembersContext.Provider value={{ members, setMembers }}>
            {children}
        </MembersContext.Provider>
    )
}