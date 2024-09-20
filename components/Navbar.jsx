import React from 'react'
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className='flex gap-10'>
      <Link href="/kalam">kalam</Link>
      <Link href="/alphabet">alphabet</Link>
      <Link href="/poem">poem</Link>
      <Link href="/poet">poet</Link>
    </nav>
  )
}

export default Navbar
