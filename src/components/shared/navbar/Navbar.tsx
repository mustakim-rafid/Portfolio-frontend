import { isAuthenticated } from '@/lib/auth'
import React from 'react'
import NavClient from './NavClient'

const Navbar = async () => {
  const isAdminAuthenticated = await isAuthenticated()
  return <NavClient isAuth={isAdminAuthenticated} />
}

export default Navbar