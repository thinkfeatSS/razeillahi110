import React from 'react'
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className='flex items-center justify-center gap-10 w-screen'>
      <Link href="/dashboard/kalam">kalam</Link>
      <Link href="/dashboard/alphabet">alphabet</Link>
      <Link href="/dashboard/poem">poem</Link>
      <Link href="/dashboard/poet">poet</Link>
    </nav>
  )
}

export default Navbar
