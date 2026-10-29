import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    
    <div className="footer">

      <div className="footer-top">
        <h2>MovieMania</h2>
        <p>Enjoy the best entertainment experience with BookMyShow.</p>
      </div>

      <div className="footer-links">

        <div>
          <h3>Movies</h3>
          <p>Movies in Chandigarh</p>
          <p>Upcoming Movies</p>
          <p>Top Rated Movies</p>
        </div>

        <div>
          <h3>Events</h3>
          <p>Comedy Shows</p>
          <p>Music Events</p>
          <p>Sports Events</p>
        </div>

        <div>
          <h3>Help</h3>
          <p>About Us</p>
          <p>Contact Us</p>
          <p>Privacy Policy</p>
        </div>

        <div>
          <h3>Follow Us</h3>
          <p>Facebook</p>
          <p>Instagram</p>
          <p>Twitter</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 BookMyShow Clone. All Rights Reserved.</p>
      </div>

    
    </div>
  )
}

export default Footer
