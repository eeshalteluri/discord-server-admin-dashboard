'use client'
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
    <aside className="md:min-w-[250px] h-full p-2 bg-white dark:bg-zinc-900 border-r border-zinc-300 dark:border-zinc-700 flex flex-col gap-2 shadow-md">
      {SideBarItemsList.map((SideBarItem) => (
        <SidebarItem
          key={SideBarItem.title}
          title={SideBarItem.title}
          href={SideBarItem.href}
          icon={SideBarItem.icon}
        />
      ))}
    </aside>
  )
}

export default Sidebar