import React from 'react';
import { RoleType } from '../types/types';
import { Trash2 as DeleteIcon } from 'lucide-react';

const RoleCard: React.FC<RoleType> = ({ role, isEnabled }) => {
  return (
    <div className="w-full max-w-md p-4 border rounded-lg shadow-sm flex items-center justify-between bg-white">
      <div className="flex flex-col">
        <p className="capitalize font-semibold text-gray-800">{role}</p>
        <p className="text-sm text-gray-500">Status: {isEnabled ? 'Enabled' : 'Disabled'}</p>
      </div>
      <div className="flex items-center gap-3">
        <button
          className={`px-3 py-1 text-sm rounded font-medium transition ${
            isEnabled
              ? 'bg-red-100 text-red-600 hover:bg-red-200'
              : 'bg-green-100 text-green-600 hover:bg-green-200'
          }`}
        >
          {isEnabled ? 'Disable' : 'Enable'}
        </button>
        <button className="text-gray-500 hover:text-red-600 transition">
          <DeleteIcon size={18} />
        </button>
      </div>
    </div>
  );
};

export default RoleCard;
