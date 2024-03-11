import React from 'react'
import "../css/footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';



export default function Footer() {
  return (
  
<section className="footer">
  <div className="footer-row">
    <div className="footer-col">
      <h4>Info</h4>
      <ul className="links">
        <li>
<a className="aboutbtn" href="#about">
  About us
</a>        </li>
        <li>
          <a href="#">Compressions</a>
        </li>
        <li>
          <a href="#">Customers</a>
        </li>
        <li>
          <a href="#">Service</a>
        </li>
        <li>
          <a href="#">Collection</a>
        </li>
      </ul>
    </div>
    <div className="footer-col">
      <h4>Explore</h4>
      <ul className="links">
        <li>
          <a href="#">Free Designs</a>
        </li>
        <li>
          <a href="#">Latest Designs</a>
        </li>
        <li>
          <a href="#">Themes</a>
        </li>
        <li>
          <a href="#">Popular Designs</a>
        </li>
        <li>
          <a href="#">Art Skills</a>
        </li>
        <li>
          <a href="#">New Uploads</a>
        </li>
      </ul>
    </div>
    <div className="footer-col">
      <h4>Legal</h4>
      <ul className="links">
        <li>
          <a href="#">Customer Agreement</a>
        </li>
        <li>
          <a href="#">Privacy Policy</a>
        </li>
        <li>
          <a href="#">GDPR</a>
        </li>
        <li>
          <a href="#">Security</a>
        </li>
        <li>
          <a href="#">Testimonials</a>
        </li>
        <li>
          <a href="#">Media Kit</a>
        </li>
      </ul>
    </div>
    <div className="footer-col">
      <h4>Newsletter</h4>
      <p>
        Subscribe to our newsletter for a weekly dose of news, updates, helpful
        tips, and exclusive offers.
      </p>
      <form action="#">
        <input type="text" placeholder="Your email" required="" />
        <button type="submit">SUBSCRIBE</button>
      </form>
      <div className="icons">
            <FontAwesomeIcon icon={faFacebookF} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faLinkedin} />
            <FontAwesomeIcon icon={faInstagram} />
          </div>
        </div>
      </div>
      <p className="copyright">&copy; 2024 Electronic Hub. All rights reserved.</p>
    </section>

  )
}



