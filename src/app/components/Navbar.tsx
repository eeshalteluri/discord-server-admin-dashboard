'use client'
import React, { useState } from 'react'
import { UserRound, Bell, Moon, Sun } from 'lucide-react';

import { usePathname } from 'next/navigation'
import Link from 'next/link'


const Navbar = () => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        if(theme === 'light') setTheme('dark');
        else setTheme('light');
    }

    const pathname = usePathname()
  const isProfileActive = pathname === '/profile'
  const isNotificationActive = pathname === '/notifications'

  return (
<div className="absolute md:relative bottom-0 left-0 z-10 w-full pt-4 p-2 md:flex md:justify-end md:items-center md:border-1 bg-zinc-900 border-b border-zinc-300 dark:border-zinc-700 text-primary">
        <div className='w-full md:w-fit flex justify-between md:gap-12 px-12 md:px-0 md:mr-4 gap-2'>
            <Link 
              href="/profile"
              className={`hover:bg-gray-100 rounded-md ${isProfileActive ? 'bg-zinc-200 dark:bg-zinc-700 text-black dark:text-white' : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-black dark:hover:text-white'}`}
            >
              <UserRound size={24} className="m-2 cursor-pointer"/>
            </Link>
            <Link 
              href="/notifications"
              className={`hover:bg-gray-100 rounded-md ${isNotificationActive ? 'bg-zinc-200 dark:bg-zinc-700 text-black dark:text-white' : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-black dark:hover:text-white'}`}
            >
              <Bell size={24} className="m-2 cursor-pointer"/>
            </Link>
            {theme === 'light' ? <Moon size={24} onClick={toggleTheme} className="text-white m-2 cursor-pointer"/> : <Sun size={24} onClick={toggleTheme} className="text-white m-2 cursor-pointer"/>}
        </div>
    </div>
  )
}

export default Navbar