import Sidebar from '@/components/shared/Sidebar'
import React from 'react'

const DashboardLayout = async ({children}: {children: React.ReactNode}) => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row relative">
      <Sidebar />
      <main className="flex-1 p-6 pt-20 md:pt-5 md:pl-64">
        {children}
      </main>
    </div>
  )
}

export default DashboardLayout