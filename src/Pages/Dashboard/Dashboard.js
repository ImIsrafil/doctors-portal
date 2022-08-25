import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div class="drawer drawer-mobile relative">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content relative">
    <h2 className='text-3xl font-bold text-accent uppercase'>Dashboard</h2>
    <Outlet />
  </div>
  <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden fixed top-1/2 left-0">&gt;</label>
  <div class="drawer-side">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
      {/* <!-- Sidebar content here --> */}
      <li><Link to='/dashboard'>My Appointments</Link></li>
      <li><Link to='/dashboard/review'>My Reviews</Link></li>
    </ul>
  
  </div>
</div>
  )
}

export default Dashboard
