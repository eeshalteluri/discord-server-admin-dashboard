import React from 'react';
import { Trash2 as DeleteIcon } from 'lucide-react';
import Image from 'next/image';

interface MessageCardProps {
  avatar: string;
  username: string;
  createdAt: string;
  message: string;
}

const MessageCard: React.FC<MessageCardProps> = ({
  avatar,
  username,
  createdAt,
  message,
}) => {
  return (
    <div className="border-b-1 p-4 bg-white space-y-2 shadow-md transition">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-3">
          <Image
            src={avatar}
            alt={`${username}'s avatar`}
            width={10}
            height={10}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="font-medium text-gray-800">{username}</p>
            <p className="text-sm text-gray-500">{createdAt}</p>
          </div>
        </div>

        <button className="text-gray-500 hover:text-red-500 transition">
          <DeleteIcon size={18} />
        </button>
      </div>

      {/* Message Content */}
      <p className="text-gray-700 whitespace-pre-wrap">{message}</p>
    </div>
  );
};

export default MessageCard;
