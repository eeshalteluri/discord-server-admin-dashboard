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
  gray: 'bg-gray-400',
  // Add more as needed
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
    <div className="flex items-center justify-between w-full max-w-xl p-4 border rounded-md shadow-sm bg-white dark:bg-gray-900">
      {/* Left Section: Status dot + Role name or input */}
      <div className="flex items-center gap-3 flex-1">
        <div
          className={`w-3 h-3 rounded-full ${active ? 'bg-green-500' : 'bg-gray-400'}`}
        />
        {isEditing ? (
          <input
            type="text"
            value={roleName}
            onChange={(e) => setRoleName(e.target.value)}
            className="border px-2 py-1 rounded-md text-sm w-full max-w-sm bg-gray-50 dark:bg-gray-800 text-black dark:text-white"
          />
        ) : (
          <span
            className={`text-sm font-medium text-white p-2 rounded ${colorClasses[color] || 'bg-gray-400'} dark:text-secondary`}
            >
            {roleName}
            </span>
        )}
      </div>

      {/* Right Section: Edit/Save + Toggle */}
      <div className="flex items-center gap-3">
        {isEditing ? (
          <button
            onClick={handleSave}
            className="text-green-600 hover:underline text-sm"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="text-blue-600 hover:underline text-sm"
          >
            Edit
          </button>
        )}

        {/* Toggle role visibility (mocked) */}
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={active}
            onChange={() => setActive(!active)}
            className="sr-only"
          />
          <div className="w-10 h-5 bg-gray-300 rounded-full dark:bg-gray-700 relative transition">
            <div
              className={`w-4 h-4 bg-white rounded-full shadow-md absolute top-0.5 left-0.5 transform transition ${
                active ? 'translate-x-5' : ''
              }`}
            />
          </div>
        </label>
      </div>
    </div>
  )
}

export default RoleItem
