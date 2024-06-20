import React from 'react'
import '../styles/header.css'
import Link from 'next/link'
const Header = () => {
  return (
    <header>
      <span className='logo font-bold text-lg italic'> MTP</span>
      <nav>
        <ul className='nav-list'>
            <li>  <Link href='/'> Home </Link> &nbsp; &nbsp;</li>
            <li>  <Link href='contact'> About </Link> &nbsp; &nbsp;</li>
            <li>  <Link href='Tracking'> Track a Transfer </Link> &nbsp; &nbsp;</li>
            <li> <Link href='login'> LOG IN </Link> &nbsp; &nbsp;</li>
          
        </ul>
      </nav>
      <button> <Link href='sign'> SIGN UP </Link></button>
    </header>
  )
}

export default Header
