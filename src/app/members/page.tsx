'use client'
import { ArrowDownAZ, ArrowUpAZ, ArrowUpDown, MoveDown, MoveUp } from 'lucide-react';
import React, { useState } from 'react'
import { useAddMemberModal } from '../contexts/addMemberModalContext';
import AddMemberModal from '../components/Modals/AddMemberModal';
import { useMembers } from '../contexts/MembersContext';

const MembersPage = () => {
  const { members } = useMembers()
  const { isOpen, onOpen } = useAddMemberModal();
  const [filterUsernameValue, setFilterUsernameValue] = useState<string>('');
  const [filterRoleValue, setFilterRoleValue] = useState<string>('');
  const [filterJoiningDateValue, setFilterJoiningDateValue] = useState<string>('');

  const [sortingOrder, setSortingOrder] = useState<'ascending' | 'descending' | ''>('');
  const [sortingColumn, setSortingColumn] = useState<'username' | 'joinDate' | ''>('');

  const tableHeaders = ['Avatar', 'Username', 'Join Date', 'Role'];
  const uniqueRoles = Array.from(new Set(members.map((m) => m.role)))

  const filteredMembers = members.filter((member) => 
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

  const [currentPage, setCurrentPage ] = useState<number>(1);
  const membersPerPage = 2;

  const startIndex = (currentPage - 1) * membersPerPage;
  const endIndex = startIndex + membersPerPage;

  const paginatedMembers = sortedMembers.slice(startIndex, endIndex);

  const totalPages = Math.ceil(sortedMembers?.length/membersPerPage);

  return (
    <div className='flex flex-col gap-2 p-4'>
      <div className='flex justify-between items-center'>
        <div className='flex justify-center gap-2'>

        {/*Filter by username*/}
        <input
        name='usernameFilter'
        type="text" 
        className='border-secondary border-1 p-1 rounded-md'
        onChange={(event) => setFilterUsernameValue(event.target.value)}/>

        {/*Filter by role*/}
        <select 
          name="roleFilter" 
          id="roleFilter"
          className='border-secondary border-1 p-1 rounded-md'
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

        <button
          onClick={() => onOpen()}
          className='border-1 p-1 rounded-md hover:opacity-70 cursor-pointer'
        >Add Member</button>
      </div>
      
      {isOpen && 
        <AddMemberModal />
      }

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
          {paginatedMembers?.length > 0 ? paginatedMembers.map((member) => (
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

      <div className='flex justify-center gap-2'>
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev-1, 1))}
          disabled={currentPage === 1}
          className='p-2 border-1 border-secondary rounded-md cursor-pointer disabled:cursor-not-allowed disabled:opacity-80'
        >
          Previous
        </button>

        {totalPages > 0 && Array.from({length: totalPages}, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage((prev) => index+1)}
            className={`p-2 border-1 border-secondary rounded-md cursor-pointer disabled:cursor-not-allowed disabled:opacity-80 ${currentPage === index + 1 ? 'bg-gray-200' : ''}`}
          >
            {index + 1}
          </button>
        )) }

        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev+1, totalPages))}
          disabled={currentPage === totalPages}
          className='p-2 border-1 border-secondary rounded-md cursor-pointer disabled:cursor-not-allowed disabled:opacity-80'
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default MembersPage