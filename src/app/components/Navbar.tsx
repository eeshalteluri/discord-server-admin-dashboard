'use client'
import React, { useState } from 'react'
import { UserRound, Bell, Moon, Sun } from 'lucide-react';

const Navbar = () => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        if(theme === 'light') setTheme('dark');
        else setTheme('light');
    }
  return (
    <div className='p-2 flex justify-end items-center border-b-1'>
        <div className='mr-4 flex gap-2'>
            <UserRound size={24}/>
            <Bell size={24}/>
            {theme === 'light' ? <Moon size={24} onClick={toggleTheme}/> : <Sun size={24} onClick={toggleTheme}/>}
        </div>
    </div>
  )
}

export default Navbar