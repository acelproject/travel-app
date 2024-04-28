import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import Button from './Button'
import { Menu } from 'lucide-react'
import { NAV_LINKS } from '@/constants'
import Link from 'next/link'

const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger className='className="inline-block cursor-pointer md:hidden'>
          <Menu />
      </SheetTrigger>
      <SheetContent side={"right"} className="p-0">
      <ul className="h-full gap-12 flex flex-col items-center justify-center ">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      </SheetContent>
    </Sheet>
  )
}

export default MobileSidebar