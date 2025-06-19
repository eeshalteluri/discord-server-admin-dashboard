'use client'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { useMembers } from '../contexts/MembersContext'
import { useRoles } from '../contexts/RolesContext'
import { useMessages } from '../contexts/MessagesContext'

export default function DashboardPage() {

  const { members } = useMembers();
  const { roles } = useRoles();
  const { messages } = useMessages()

  const totalMembers = members.length;
  const onlineUsers = members.filter((member)=> member.isOnline === true).length;
  const activeRoles = roles.filter((role) => role.isActive === true).length;
  const messagesToday = messages.filter((msg) => {
  const createdAt = new Date(msg.createdAt);
  const today = new Date();
  return (
    createdAt.getDate() === today.getDate() &&
    createdAt.getMonth() === today.getMonth() &&
    createdAt.getFullYear() === today.getFullYear()
  );
}).length;

  const metrics = [
    { label: 'Total Members', value: totalMembers },
    { label: 'Online Users',value: onlineUsers  },
    { label: 'Active Roles',value: activeRoles  },
    { label: 'Messages Today', value: messagesToday},
  ]

  //member growth data generation
  const sortedMembersByDate = [...members].sort((a, b) => new Date(a.joinDate).getTime() - new Date(b.joinDate).getTime());

  const membersJoinedOnParticulatDate: Record<string, number> = {};
  let cumulative = 0;

  sortedMembersByDate.forEach((member) => {
    const date = member.joinDate;
    cumulative +=1;
    membersJoinedOnParticulatDate[date] = cumulative;
  })

  const growthData = Object.entries(membersJoinedOnParticulatDate).map(([date, members]) => {
  const d = new Date(date)
  const formatted = d.toLocaleDateString('en-US', { month: 'short', day: '2-digit' }) // e.g., 'Jun 19'
  return { date: formatted, members }
})


  return (
    <div className="p-8 space-y-8">
      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="rounded-2xl bg-white dark:bg-zinc-900 shadow-md p-4 text-center border"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400">{metric.label}</p>
            <p className="text-white text-2xl font-bold">{metric.value}</p>
          </div>
        ))}
      </div>

      {/* Line Chart */}
      <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-md">
        <h2 className="text-secondary text-xl font-semibold mb-4">Member Growth Over Time</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={growthData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="members" stroke="#8884d8" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
