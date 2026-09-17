import React from 'react'
import './Menu.css'
const Menu = () => {
  return (
    <div className='menu'>
      <div className='left-menu'>
        <a href="/movies">Movies</a>
        <a href="/stream">Stream</a>
        <a href="/shows">Events</a>
        <a href="/plays">Plays</a>
        <a href="">Sports</a>
        <a href="">Activities</a>
      </div>
      <div className='right-menu'>
        <a href="">ListYourShow</a>
        <a href="">Corporates</a>
        <a href="">Offers</a>
        <a href="">Gift Cards</a>
      </div>
    </div>
  )
}

export default Menu
