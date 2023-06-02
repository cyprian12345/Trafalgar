import React from 'react'
import Navbar from './Pages/Navigation/Nav'
import Herosection from './Pages/Hero/Hero'
import Service from './Pages/service/Service'
import Download from './Pages/download/donwload'
import List from './Pages/List/list'




function view() {
  return (
    <div>
      <Navbar />
      <Herosection/>
      <Service/>
      <Download/>
      <List/>
    </div>
  )
}

export default view
