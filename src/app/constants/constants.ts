import { MemberType, MessageType, RoleType } from "../types/types"

export const MessagesList : MessageType[] = [
  {
    avatar: 'https://via.placeholder.com/40',
    username: 'eeshal',
    createdAt: '2025-06-16 3:10 PM',
    message: 'Hi, from eeshal!'
  },
  {
    avatar: 'https://via.placeholder.com/40',
    username: 'sai',
    createdAt: '2025-06-17 11:00 AM',
    message: 'Hi, from sai!'
  },
  {
    avatar: 'https://via.placeholder.com/40',
    username: 'eeshal',
    createdAt: '2025-06-19 12:00 PM',
    message: 'How are yo sai?'
  },
  {
    avatar: 'https://via.placeholder.com/40',
    username: 'sai',
    createdAt: '2025-06-20 1:12 AM',
    message: 'Im good u?'
  },
  {
    avatar: 'https://via.placeholder.com/40',
    username: 'eeshal',
    createdAt: '2025-06-20 1:35 AM',
    message: 'Im doing good too. What you doing this friday?'
  },
  {
    avatar: 'https://via.placeholder.com/40',
    username: 'sai',
    createdAt: '2025-06-20 2:07 AM',
    message: 'Nothing, free for now. r u planning anything?'
  },
  {
    avatar: 'https://via.placeholder.com/40',
    username: 'teluri',
    createdAt: '2025-06-20 3:23 AM',
    message: 'Gys it you are planning anything count me in :)'
  },
  {
    avatar: 'https://via.placeholder.com/40',
    username: 'eeshal',
    createdAt: '2025-06-20 3:40 AM',
    message: 'Lets buil discord server dashboard during the weekend. What do u say gang?'
  },
  {
    avatar: 'https://via.placeholder.com/40',
    username: 'teluri',
    createdAt: '2025-06-20 6:15 AM',
    message: 'yeahhhhh..., lets do it!!!!'
  },
  {
    avatar: 'https://via.placeholder.com/40',
    username: 'sai',
    createdAt: '2025-06-20 7:36 AM',
    message: 'ya, sounds gud to me too'
  },
  {
    avatar: 'https://via.placeholder.com/40',
    username: 'eeshal',
    createdAt: '2025-06-20 7:58 AM',
    message: 'Where shall we gather?'
  },
  {
    avatar: 'https://via.placeholder.com/40',
    username: 'teluri',
    createdAt: '2025-06-20 9:21 AM',
    message: 'U guys can come to my house.'
  },
  {
    avatar: 'https://via.placeholder.com/40',
    username: 'sai',
    createdAt: '2025-06-20 9:25 AM',
    message: 'okay'
  },
  {
    avatar: 'https://via.placeholder.com/40',
    username: 'eeshal',
    createdAt: '2025-06-20 9:25 AM',
    message: 'okay'
  },
  {
    avatar: 'https://via.placeholder.com/40',
    username: 'eeshal',
    createdAt: '2025-06-20 9:25 AM',
    message: 'can someone contact kumar? he might also be interested'
  },
]

export const MembersList : MemberType[] = [
  {
    avatar: 'https://via.placeholder.com/40',
    username: 'eeshal',
    joinDate: '2025-06-20',
    role: 'member',
    isOnline: false
  },
  {
    avatar: 'https://via.placeholder.com/41',
    username: 'sai',
    joinDate: '2025-06-19',
    role: 'admin',
    isOnline: true
  },
  {
    avatar: 'https://via.placeholder.com/42',
    username: 'alex',
    joinDate: '2025-06-21',
    role: 'moderator',
    isOnline: true
  },
  {
    avatar: 'https://via.placeholder.com/43',
    username: 'teluri',
    joinDate: '2025-06-17',
    role: 'member',
    isOnline: true
  },
  {
    avatar: 'https://via.placeholder.com/43',
    username: 'shashi',
    joinDate: '2025-06-18',
    role: 'member',
    isOnline: false
  },
  {
    avatar: 'https://via.placeholder.com/43',
    username: 'preetham',
    joinDate: '2025-06-15',
    role: 'moderator',
    isOnline: true
  },
  {
    avatar: 'https://via.placeholder.com/43',
    username: 'rishi',
    joinDate: '2025-06-20',
    role: 'member',
    isOnline: true
  },
  {
    avatar: 'https://via.placeholder.com/43',
    username: 'praveen',
    joinDate: '2025-06-15',
    role: 'admin',
    isOnline: true
  },
  {
    avatar: 'https://via.placeholder.com/43',
    username: 'akash',
    joinDate: '2025-06-14',
    role: 'member',
    isOnline: false
  },
  {
    avatar: 'https://via.placeholder.com/43',
    username: 'ravi',
    joinDate: '2025-06-14',
    role: 'owner',
    isOnline: true
  },
]

export const RolesList : RoleType[] = [
  {
    name: 'owner',
    isActive: true,
    color: 'black'
  },
  {
    name: 'admin',
    isActive: true,
    color: 'red'
  },
  {
    name: 'moderator',
    isActive: false,
    color: 'blue'
  },
  {
    name: 'member',
    isActive: true,
    color: 'orange'
  },
]