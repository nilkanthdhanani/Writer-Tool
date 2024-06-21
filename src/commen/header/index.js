import React, { useEffect } from 'react';
import './header.scss';
import logo from '../../assets/images/svg/logo.svg';
import write from '../../assets/images/svg/write.svg';
import bell from '../../assets/images/svg/bell.svg';
import lady from '../../assets/images/png/lady.png';
import { Link } from 'react-router-dom';

export default function Header() {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      if (window.scrollY > 0) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <header>
        <div className="containerH">
          <div className="header-flex">
            <div className="header-logo">
              <Link to={"/"}>
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <div className="header-icon">
              <div className="header-icon-write">
                <img src={write} alt="write" />
                <span>Write</span>
              </div>
              <div className="header-icon-bell">
                <img src={bell} alt="bell" />
              </div>
              <div className="header-icon-lady">
                <img src={lady} alt="lady" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
