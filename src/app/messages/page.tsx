import React from 'react'
import MessageCard from '../components/MessageCard'
import { MessagesList } from '../constants/constants'

const MessagesPage = () => {
    return (
    <div className="p-4 space-y-4 max-h-[90vh] scrollbar-thin scrollbar-thumb-zinc-500 dark:scrollbar-thumb-zinc-700">
      {MessagesList.length > 0 &&
        MessagesList.map((message, index) => (
          <MessageCard
            key={index}
            avatar={message.avatar}
            username={message.username}
            createdAt={message.createdAt}
            message={message.message}
          />
        ))}
    </div>
  )
}

export default MessagesPage
