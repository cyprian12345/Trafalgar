import React from 'react'
import './nav.css'
import Logo from '../../assets/logo.png'

const nav = () => {
  return (
    <div className='container mt-5'>
      <nav class="navbar navbar-expand-lg navbar-light bg-transprent">
  <a class="navbar-brand" href="#"><img src={Logo}/></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active mr-3">
      </li>
      <li class="nav-item mr-3">
        <a class="nav-link" href="#">Find a doctor</a>
      </li>
      <li class="nav-item mr-3">
        <a class="nav-link" href="#">Apps</a>
      </li>
      <li class="nav-item mr-3">
        <a class="nav-link disabled">Testimonials</a>
      </li>
      <li class="nav-item ">
        <a class="nav-link disabled">About us</a>
      </li>
    </ul>
  </div>
</nav>
    </div>
  )
}

export default nav
