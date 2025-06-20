'use client'
import React, { useState } from 'react'
import SidebarItem from './SidebarItem'
import { LayoutDashboard, UsersRound, ShieldUser, MessageCircle, Bell, UserRound, Moon, Sun } from 'lucide-react'

const SideBarItemsList =[
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: LayoutDashboard,
    onlyMobile: false
  },
  {
    title: 'Members',
    href: '/members',
    icon: UsersRound,
    onlyMobile:false
  },
  {
    title: 'Roles',
    href: '/roles',
    icon: ShieldUser,
    onlyMobile:false
  },
  {
    title: 'Messages',
    href: '/messages',
    icon: MessageCircle,
    onlyMobile:false
  },
  {
    title: 'Profile',
    href: '/profile',
    icon: UserRound,
    onlyMobile:true
  },
  {
    title: 'Notifications',
    href: '/notifications',
    icon: Bell,
    onlyMobile:true
  },
]

const Sidebar = () => {
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
      if(theme === 'light') setTheme('dark');
      else setTheme('light');
  }

  return (
    <aside className="md:min-w-[250px] h-full p-2 bg-white dark:bg-zinc-900 border-r border-zinc-300 dark:border-zinc-700 flex flex-col gap-2 items-center md:items-start shadow-md">
      {SideBarItemsList.map((SideBarItem) => (
        <SidebarItem
          key={SideBarItem.title}
          title={SideBarItem.title}
          href={SideBarItem.href}
          icon={SideBarItem.icon}
          onlyMobile={SideBarItem.onlyMobile}
        />
      ))}

      {theme === 'light' ? <Moon size={24} onClick={toggleTheme} className="md:hidden text-white m-2 cursor-pointer"/> : <Sun size={24} onClick={toggleTheme} className="text-white m-2 cursor-pointer"/>}
    </aside>
  )
}

export default Sidebar