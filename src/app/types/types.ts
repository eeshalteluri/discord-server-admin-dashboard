export interface MemberType {
  avatar: string,
  username: string,
  joinDate: string,
  role: string,
}

export interface RoleType {
  role: 'admin' | 'moderator' | 'member',
  isEnabled: boolean
}
