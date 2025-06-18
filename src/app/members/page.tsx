'use client'
import { ArrowDown01, ArrowDownAZ, ArrowUp01, ArrowUpAZ, ArrowUpDown, MoveDown, MoveUp } from 'lucide-react';
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
    joinDate: '2025-06-20',
    role: 'member',
  },
  {
    avatar: 'https://via.placeholder.com/41',
    username: 'sai',
    joinDate: '2025-06-19',
    role: 'admin',
  },
  {
    avatar: 'https://via.placeholder.com/41',
    username: 'alex',
    joinDate: '2025-06-21',
    role: 'moderator',
  },
]

const tableHeaders = ['Avatar', 'Username', 'Join Date', 'Role'];
const uniqueRoles = Array.from(new Set(MembersList.map((m) => m.role)))


const MembersPage = () => {
  const [filterUsernameValue, setFilterUsernameValue] = useState<string>('');
  const [filterRoleValue, setFilterRoleValue] = useState<string>('');
  const [filterJoiningDateValue, setFilterJoiningDateValue] = useState<string>('');

  const [sortingOrder, setSortingOrder] = useState<'ascending' | 'descending' | ''>('');
  const [sortingColumn, setSortingColumn] = useState<'username' | 'joinDate' | ''>('')


  const filteredMembers = MembersList.filter((member) => 
  {
    const matchedUsernameMembers = member.username.toLowerCase().includes(filterUsernameValue?.toLocaleLowerCase());

    const matchedRoleMembers = member.role.includes(filterRoleValue);

    const matchedJoingDateMembers = member.joinDate.includes(filterJoiningDateValue);

    return matchedUsernameMembers && matchedRoleMembers && matchedJoingDateMembers;
  });
  
   const sortedMembers = [...filteredMembers]?.sort((a, b) => {

    if(sortingColumn == 'username') {
      if(sortingOrder === 'ascending') 
      {
        return a.username?.localeCompare(b.username);

      }else if(sortingOrder === 'descending'){

        return b.username.localeCompare(a.username);

      }else{

        return 0;

      }
    }else if(sortingColumn === 'joinDate'){
          if(sortingOrder === 'ascending') 
      {
        return new Date(a.joinDate).getTime() - new Date(b.joinDate).getTime();

      }else if(sortingOrder === 'descending'){

        return new Date(b.joinDate).getTime() - new Date(a.joinDate).getTime();

      }else{

        return 0;

      }
    }else{
        return 0
      }
  })

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
            {tableHeaders.map((header) => {
              const column = header === 'Username' ? 'username' :
                            header === 'Join Date' ? 'joinDate' : '';

              const isSortable = column !== '';

              const icon = sortingColumn === column
                ? sortingOrder === 'ascending'
                  ? (column === 'username' ? <ArrowUpAZ /> : <MoveUp />)
                  : sortingOrder === 'descending'
                  ? (column === 'username' ? <ArrowDownAZ /> : <MoveDown />)
                  : <ArrowUpDown />
                : <ArrowUpDown />;

  return (
    <th
      key={header}
      onClick={() => {
        if (!isSortable) return;

        if (sortingColumn !== column) {
          setSortingColumn(column as 'username' | 'joinDate');
          setSortingOrder('ascending');
        } else {
          setSortingOrder(prev =>
            prev === 'ascending' ? 'descending' :
            prev === 'descending' ? '' : 'ascending'
          );
        }
      }}
      className='border px-4 py-2 text-left cursor-pointer select-none'
    >
      <div className='flex justify-between items-center'>
        {header}
        {isSortable && icon}
      </div>
    </th>
  );
})}

          </tr>
        </thead>
        <tbody>
          {sortedMembers?.length > 0 ? sortedMembers.map((member) => (
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
          )) :
          <tr className='text-center'>
            <td>No members found</td>
          </tr>
          }
        </tbody>
      </table>
    </div>
  )
}

export default MembersPage