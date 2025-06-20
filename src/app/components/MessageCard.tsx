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
  username,
  createdAt,
  message,
}) => {
  return (
    <div className="bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100 p-4 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-700 transition-all hover:shadow-md">
      <div className="flex justify-between items-start mb-2">
        <div className="flex items-center gap-4">
          <Image
            src='/default_profile.jpg'
            alt={`${username}'s avatar`}
            width={40}
            height={40}
            className=" border border-zinc-300 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold text-base">{username}</p>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">{createdAt}</p>
          </div>
        </div>

        <button
          className="p-1 text-zinc-500 hover:text-red-500 rounded-md transition"
          title="Delete message"
        >
          <DeleteIcon size={18} />
        </button>
      </div>

      <p className="text-sm leading-relaxed whitespace-pre-wrap">{message}</p>
    </div>
  );
};

export default MessageCard;
