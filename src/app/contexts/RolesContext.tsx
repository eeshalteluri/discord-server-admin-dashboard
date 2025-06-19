'use client'
import React, { createContext, useContext, useState } from "react"
import { RoleType } from "../types/types"
import { RolesList } from "../constants/constants"

type RoleContextType = {
    roles: RoleType[]
    setRoles: React.Dispatch<React.SetStateAction<RoleType[]>>
}

const RolesContext = createContext<RoleContextType | undefined>(undefined);

export const useRoles = () => {
    const context = useContext(RolesContext);

    if(!context) {
        throw new Error('useroles must be within a RolesProvider');
    }

    return context;
}

export const RolesProvider = ({ children } : { children: React.ReactNode}) => {
    const [roles, setRoles] = useState<RoleType[]>(RolesList);

    return(
        <RolesContext.Provider value={{ roles, setRoles }}>
            {children}
        </RolesContext.Provider>
    )
}