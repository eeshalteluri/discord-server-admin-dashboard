'use client'
import React, { useState } from 'react'

interface MemberType {
  avatar: string,
  username: string,
  joinDate: string,
  role: string
}

const MembersList: MemberType[] = [
  {
    avatar: 'https://via.placeholder.com/40',
    username: 'eeshal',
    joinDate: '2025-06-19',
    role: 'member',
  },
  {
    avatar: 'https://via.placeholder.com/41',
    username: 'sai',
    joinDate: '2025-06-20',
    role: 'admin',
  },
]

const tableHeaders = ['Avatar', 'Username', 'Join Date', 'Role'];
const uniqueRoles = Array.from(new Set(MembersList.map((m) => m.role)))


const MembersPage = () => {
  const [members, setMembers] = useState<MemberType[]>(MembersList)
  const [filterUsernameValue, setFilterUsernameValue] = useState<string>('');
  const [filterRoleValue, setFilterRoleValue] = useState<string>('');
  const [filterJoiningDateValue, setFilterJoiningDateValue] = useState<string>('');

  const filteredMembers = members.filter((member) => 
  {
    const matchedUsernameMembers = member.username.toLowerCase().includes(filterUsernameValue?.toLocaleLowerCase());

    const matchedRoleMembers = member.role.includes(filterRoleValue);

    const matchedJoingDateMembers = member.joinDate.includes(filterJoiningDateValue);

    return matchedUsernameMembers && matchedRoleMembers && matchedJoingDateMembers;
  });

  return (
    <div className='flex flex-col gap-2 p-4'>
      <div className='flex gap-2'>

        {/*Filter by username*/}
        <input
        name='usernameFilter'
        type="text" 
        className='border-secondary border-1 rounded-md'
        onChange={(event) => setFilterUsernameValue(event.target.value)}/>

        {/*Filter by role*/}
        <select 
          name="roleFilter" 
          id="roleFilter"
          className='border-secondary border-1 rounded-md'
          onChange={(event) => setFilterRoleValue(event.target.value)}
        >
          <option value="">All Roles</option>
          {uniqueRoles?.length > 0 && uniqueRoles.map((role) => (
            <option key={role} value={role}>{role.charAt(0).toUpperCase() + role.slice(1) }</option>
          ))}
        </select>

        {/*Filter by joining date*/}
        <input
          name='filterJoiningDate'
          type="date"
          className='border-secondary border-1 rounded-md'
          onChange={(event) => {
            console.log(event.target.value);
            setFilterJoiningDateValue(event.target.value)
          }} />
      </div>

      <table className='table-auto border-collapse border w-full'>
        <thead className=''>
          <tr>
            {tableHeaders.map((header) => (
              <th key={header} className='border px-4 py-2 text-left'>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredMembers?.length > 0 && filteredMembers.map((member) => (
            <tr key={member.username}>
              <td className='border px-4 py-2'>
                <img
                  src={member.avatar}
                  alt='avatar'
                  className='w-8 h-8 rounded-full'
                />
              </td>
              <td className='border px-4 py-2'>{member.username}</td>
              <td className='border px-4 py-2'>{member.joinDate}</td>
              <td className='border px-4 py-2'>{member.role.charAt(0).toUpperCase() + member.role.slice(1)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default MembersPage