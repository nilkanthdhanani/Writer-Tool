import React from 'react'
import './footer.scss';
import copyright from '../../assets/images/svg/copyright.svg';
import lorem from '../../assets/images/svg/lorem.svg';
import location from '../../assets/images/svg/location.svg';
import phone from '../../assets/images/svg/phone.svg';
import mail from '../../assets/images/svg/mail.svg';

export default function Footer() {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="footer-one">
            <div className="footer-one-lorem">
              <div className="footer-one-lorem-logo">
                <img src={lorem} alt="lorem" />
                <h2>Lorem</h2>
              </div>
              <p>Lorem Ipsum is simply dummy text of the printing  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div className="footer-one-links">
              <h3>USEFUL LINKS</h3>
              <a href="write">Write Blog’s</a>
              <a href="notification">Notification</a>
              <a href="profile">Profile Setting</a>
              <a href="contact">Contact Us</a>
            </div>
            <div className="footer-one-contact">
              <h3>CONTACT US</h3>
              <div className="footer-one-contact-icon">
                <img src={location} alt="location" />
                <p>1201-1206, 12th Floor, Lorem Ipsum simply dummy text printing</p>
              </div>
              <div className="footer-one-contact-icon">
                <img src={phone} alt="phone" />
                <p>08069760700</p>
              </div>
              <div className="footer-one-contact-icon">
                <img src={mail} alt="mail" />
                <p>writerTools@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="footer-two">
            <img src={copyright} alt="copyright" />
            <span>Copyright 2024. All right reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
