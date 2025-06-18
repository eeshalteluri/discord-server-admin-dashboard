import React from 'react'

const MembersList = [
  {
    avatar: 'https://via.placeholder.com/40',
    username: 'eeshal',
    joinDate: '1-2-2025',
    role: 'member',
  },
]

// Define dynamic table headers
const tableHeaders = ['Avatar', 'Username', 'Join Date', 'Role']


const MembersPage = () => {
  return (
    <div className='p-4'>
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
          {MembersList.map((member) => (
            <tr key={member.username} className='hover:bg-gray-50'>
              <td className='border px-4 py-2'>
                <img
                  src={member.avatar}
                  alt='avatar'
                  className='w-8 h-8 rounded-full'
                />
              </td>
              <td className='border px-4 py-2'>{member.username}</td>
              <td className='border px-4 py-2'>{member.joinDate}</td>
              <td className='border px-4 py-2'>{member.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default MembersPage