export interface MemberType {
  avatar: string,
  username: string,
  joinDate: string,
  role: string,
  isOnline: boolean
}

export interface RoleType {
  name: 'admin' | 'moderator' | 'member',
  isActive: boolean,
  color: string
}

export interface MessageType {
  avatar: string,
  username: string,
  createdAt: string,
  message: string,
}
