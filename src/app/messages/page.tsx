import React from 'react'
import MessageCard from '../components/MessageCard'
import { MessagesList } from '../constants/constants'

const MessagesPage = () => {
  return (
    <div
      className='flex flex-col gap-1 max-h-[90%] overflow-y-scroll'
    >
      {
        MessagesList.length > 0 && MessagesList.map((message) => (
          <MessageCard 
            key={message.username}
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
