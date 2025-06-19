import React from 'react'
import { RolesList } from '../constants/constants';

import RoleCard from '../components/RoleCard';

const RolesPage = () => {

  return (
    <div className='h-full flex-1 flex flex-col justify-start items-center gap-4 pt-8'>
      {RolesList.length >0 && RolesList.map((role, index) => (
        <RoleCard 
        key={index}
        name={role.name}
        color={role.color}
        isActive={role.isActive}
      />
      ))}
    </div>
  )
}

export default RolesPage