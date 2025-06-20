'use client'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

interface SidebarItemProps {
    title: string, 
    href: string, 
    icon: React.ElementType
}

const SidebarItem : React.FC<SidebarItemProps> = ({ title, href, icon: Icon }) => {
  const pathname = usePathname()
  const isActive = pathname.startsWith(href)

  return (
    <Link
      href={href}
      className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors text-sm font-medium
        ${
          isActive
            ? 'bg-zinc-200 dark:bg-zinc-700 text-black dark:text-white'
            : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-black dark:hover:text-white'
        }`}
    >
      <Icon className="w-5 h-5" />
      <span className="hidden md:inline">{title}</span>
    </Link>
  )
}

export default SidebarItem