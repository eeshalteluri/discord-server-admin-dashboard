'use client'
import React, { useState } from 'react'

interface RoleItemProps {
  name: string
  isActive: boolean
  color: string
}

const colorClasses: Record<string, string> = {
  red: 'bg-red-400',
  blue: 'bg-blue-400',
  orange: 'bg-orange-400',
}

const RoleItem: React.FC<RoleItemProps> = ({ name, isActive, color }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [roleName, setRoleName] = useState(name)
  const [active, setActive] = useState(isActive)

  const handleSave = () => {
    setIsEditing(false)
    console.log('Updated role name:', roleName)
  }

  return (
  <div className="flex items-center justify-between w-full max-w-xl p-4 border border-zinc-300 dark:border-zinc-700 rounded-xl shadow-sm bg-white dark:bg-zinc-900 transition-all">
    <div className="flex items-center gap-3 flex-1">
      <div
        className={`w-3 h-3 rounded-full ${
          active ? 'bg-green-500' : 'bg-zinc-400'
        }`}
      />

      {isEditing ? (
        <input
          type="text"
          value={roleName}
          onChange={(e) => setRoleName(e.target.value)}
          className="border border-zinc-300 dark:border-zinc-600 bg-zinc-100 dark:bg-zinc-800 text-black dark:text-white rounded-md px-3 py-1 text-sm w-full focus:outline-none focus:ring-2 focus:ring-primary"
        />
      ) : (
        <span
          className={`text-sm font-semibold px-3 py-1 rounded-full ${
            colorClasses[color] || 'bg-zinc-400'
          } text-white dark:text-white`}
        >
          {roleName}
        </span>
      )}
    </div>

    <div className="flex items-center gap-4 ml-4">
      {isEditing ? (
        <button
          onClick={handleSave}
          className="text-sm font-medium text-green-600 hover:underline"
        >
          Save
        </button>
      ) : (
        <button
          onClick={() => setIsEditing(true)}
          className="text-sm font-medium text-blue-600 hover:underline"
        >
          Edit
        </button>
      )}

      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={active}
          onChange={() => setActive(!active)}
          className="sr-only peer"
        />
        <div className="w-10 h-5 bg-zinc-300 dark:bg-zinc-700 rounded-full peer-checked:bg-green-500 transition-all duration-300" />
        <div className="absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow-sm transform peer-checked:translate-x-5 transition-all duration-300" />
      </label>
    </div>
  </div>
)

}

export default RoleItem
