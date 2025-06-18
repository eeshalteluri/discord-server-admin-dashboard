import React from 'react'
import SidebarItem from './SidebarItem'
import { LayoutDashboard, UsersRound, ShieldUser, MessageCircle } from 'lucide-react'

const SideBarItemsList =[
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: LayoutDashboard
  },
  {
    title: 'Members',
    href: '/members',
    icon: UsersRound
  },
  {
    title: 'Roles',
    href: '/roles',
    icon: ShieldUser
  },
  {
    title: 'Messages',
    href: '/messages',
    icon: MessageCircle
  },
]

const Sidebar = () => {
  return (
    <div className='min-w-[250px] p-2 border-r-1'>
        {SideBarItemsList.map((SideBarItem) => (
          <SidebarItem 
            key={SideBarItem.title} 
            title={SideBarItem.title} 
            href={SideBarItem.href}
            icon={SideBarItem.icon}
          />
        ))}
    </div>
  )
}

export default Sidebar