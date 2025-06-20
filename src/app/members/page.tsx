'use client'
import { ArrowDownAZ, ArrowUpAZ, ArrowUpDown, MoveDown, MoveUp } from 'lucide-react';
import React, { useState } from 'react'
import { useAddMemberModal } from '../contexts/addMemberModalContext';
import AddMemberModal from '../components/Modals/AddMemberModal';
import { useMembers } from '../contexts/MembersContext';
import Image from 'next/image';

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
    <div className="flex flex-col gap-6 p-6 bg-white dark:bg-zinc-900 rounded-xl shadow-md">
      {/* Filters and Button */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-col sm:flex-row flex-wrap gap-3">
          <input
            name="usernameFilter"
            type="text"
            placeholder="Filter by username"
            className="text-white border border-zinc-400 dark:border-zinc-700 bg-transparent px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            onChange={(e) => setFilterUsernameValue(e.target.value)}
          />

          <select
            name="roleFilter"
            className="text-white border border-zinc-400 dark:border-zinc-700 bg-transparent px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            onChange={(e) => setFilterRoleValue(e.target.value)}
          >
            <option value="" className='text-white bg-zinc-700'>All Roles</option>
            {uniqueRoles.map((role) => (
              <option key={role} value={role} className='text-white bg-zinc-700'>
                {role.charAt(0).toUpperCase() + role.slice(1)}
              </option>
            ))}
          </select>

          <input
            type="date"
            name="filterJoiningDate"
            className="text-white border border-zinc-400 dark:border-zinc-700 bg-transparent px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            onChange={(e) => setFilterJoiningDateValue(e.target.value)}
          />
        </div>

        <button
          onClick={onOpen}
          className="bg-primary text-white dark:bg-zinc-700 dark:text-white px-4 py-2 rounded-md hover:opacity-80 transition-colors"
        >
          Add Member
        </button>
      </div>

      {isOpen && <AddMemberModal />}

      {/* Table */}
      <div className="overflow-x-auto rounded-lg border border-zinc-700">
        <table className="min-w-full table-auto text-sm">
          <thead className="bg-zinc-800 text-white">
            <tr>
              {tableHeaders.map((header) => {
                const column = header === 'Username' ? 'username' : header === 'Join Date' ? 'joinDate' : '';
                const isSortable = column !== '';
                const icon =
                  sortingColumn === column
                    ? sortingOrder === 'ascending'
                      ? column === 'username'
                        ? <ArrowUpAZ />
                        : <MoveUp />
                      : sortingOrder === 'descending'
                      ? column === 'username'
                        ? <ArrowDownAZ />
                        : <MoveDown />
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
                        setSortingOrder((prev) =>
                          prev === 'ascending' ? 'descending' : prev === 'descending' ? '' : 'ascending'
                        );
                      }
                    }}
                    className="px-6 py-3 border-b border-zinc-700 text-left cursor-pointer select-none hover:bg-zinc-700 transition"
                  >
                    <div className="flex items-center justify-between gap-2">
                      {header}
                      {isSortable && icon}
                    </div>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-700 bg-zinc-900 text-zinc-100">
            {paginatedMembers.length > 0 ? (
              paginatedMembers.map((member, index) => (
                <tr
                  key={member.username}
                  className={index % 2 === 0 ? 'bg-zinc-900' : 'bg-zinc-800 hover:bg-zinc-700 transition'}
                >
                  <td className="px-6 py-4">
                    <Image
                      src={member.avatar}
                      alt="avatar"
                      width={32}
                      height={32}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                  </td>
                  <td className="px-6 py-4">{member.username}</td>
                  <td className="px-6 py-4">{member.joinDate}</td>
                  <td className="px-6 py-4 capitalize">{member.role}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="text-center py-6 text-zinc-400">
                  No members found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center flex-wrap gap-2 mt-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="text-white px-3 py-1 border border-zinc-500 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`text-white px-3 py-1 border border-zinc-500 rounded-md ${
              currentPage === index + 1 ? 'bg-zinc-300 dark:bg-zinc-600 text-black dark:text-white' : ''
            }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="text-white px-3 py-1 border border-zinc-500 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default MembersPage