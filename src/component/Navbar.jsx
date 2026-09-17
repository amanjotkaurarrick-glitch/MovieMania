import React from 'react'
import "./Navbar.css"
import SearchIcon from '@mui/icons-material/Search';
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='logo'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaG9XD9yORXUoLhMFDLl0r02fJ8UragyFc_rp1312OfFRxQSrB_AEDQ2rN&s=10" alt="" />
        </div>
      <div className='search-box'>
<SearchIcon/>
    <input type="text" placeholder='Search for Movies, Events, Plays, Sports and Activities' />
      </div>
      <div className='right'>
        <select> 
          <option> Chandigarh</option>
          <option> Mohali</option>
          <option> Ludhiana</option>
          </select>
          <button> Sign In</button>
      </div>
    </div>
  )
}

export default Navbar
