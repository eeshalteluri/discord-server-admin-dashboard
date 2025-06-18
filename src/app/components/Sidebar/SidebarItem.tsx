import Link from 'next/link'
import React from 'react'

interface SidebarItemProps {
    title: string, 
    href: string, 
    icon: React.ElementType
}

const SidebarItem : React.FC<SidebarItemProps> = ({ title, href, icon: Icon }) => {

  return (
    <Link 
        href={href}
        className='flex gap-2 m-2 p-2'
    >
        <Icon />
    <div className='cursor-pointer'>   
        {title}
    </div>
    </Link>
  )
}

export default SidebarItem