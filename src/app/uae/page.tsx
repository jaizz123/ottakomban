import React from 'react';
import { Montserrat } from 'next/font/google';
import './globals.css'


const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
});



export default function AboutPage() {
  return (
    
    <div className="uae-container">
      <header className="navbar">
        <img src="/images/ok-logo2-copy-529x136.webp" alt="Logo" className="navbar-logo" />

        <input type="checkbox" id="menu-toggle" className="menu-toggle" />
        <label htmlFor="menu-toggle" className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </label>

        <nav className="nav-links">
          <a href="/home">Home</a>
          <a href="/about">About</a>
          <a href="/product">Products</a>
          <a href="https://tinyurl.com/5633tpyb">Shop</a>
           <div className="dropdown">
     <button className="dropbtn">
      Locations <i className="fa fa-caret-down"></i>
     </button>
     <div className="dropdown-content">
     <a href="https://tinyurl.com/2m2cv75p" target="_blank" rel="noopener noreferrer">UK</a>
     <a href="/uae">UAE</a>
     </div>
    </div>
          <a href="/contact">Contact</a>
        </nav>
      </header>
      <div className="uae-banner">
        <img
          src="/images/UAE PURCHASE PAGE.png"
          className="uae-banner-image2"
          alt="uae banner"
        />
      </div>

      <section className="availability-section">
        <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '2rem' }}>
          Available across the <span style={{ color: 'orange' }}>UAE</span>
        </h2>

        <div className="avail-container">
          <div className="availability-page">
      <div className="grid-container">
        
        <div className="grid-item">
          <img
            src="images/map1.png"
            alt="Map 1"
            width={400}
            height={300}
            className="map-image"
          />
        </div>

        
        <div className="grid-item-info-box">
          <img src="/images/Premium Cellars.png" alt="Premium Cellars Logo" width={200} height={80} />
          <p>
            Also available online @: <br />
            <a href="https://www.premiumcellars.ae" target="_blank" rel="noopener noreferrer">
              www.premiumcellars.ae
            </a>
          </p>
          <p>
            <strong>RAK Shops</strong><br />
            Premium Cellars LLC, PLA20 Al Hamra,<br />
            Al Jazeera Al Hamra Industrial Zone,<br />
            Ras Al Khaimah
          </p>
        </div>

       
        <div className="grid-item info-box">
          <img src="/images/Richmond Cellar.png" alt="Richmond Logo" width={180} height={80} />
          <p>
            Also available online @: <br />
            <a href="https://www.richmondcellar.com" target="_blank" rel="noopener noreferrer">
              www.richmondcellar.com
            </a>
          </p>
          <p>
            Richmond Cellar - Al Dana, Sheikh Khalifa Bin Zayed St,<br />
            behind Sofitel Hotel, Al Danah, Zone 1, Abu Dhabi
          </p>
          <p>
            Richmond Cellar, Hamdan Bin Mohammed St - Al Danah - Zone 1 - Abu Dhabi
          </p>
          <p>
            Richmond Global General Trading LLC, Wadi Al Ain, SRH+MPR, J. Al Ain, Abu Dhabi
          </p>
          <p>
            Richmond Trading Co. LLC, Al Hamra Industrial Area, Ras Al Khaimah
          </p>
        </div>

        
        <div className="grid-item">
          <img
            src="images/map2.png"
            alt="Map 2"
            width={400}
            height={300}
            className="map-image"
          />
        </div>

        
        <div className="grid-item">
          <img
            src="images/map3.png"
            alt="Barracuda Map"
            width={400}
            height={300}
            className="map-image"
          />
        </div>

        {/* Barracuda Info */}
        <div className="grid-item info-box">
          <h2>BARRACUDA SHOP</h2>
          <p>
            Barracuda Beach Resort - Al Shebeakah,<br />
            Emirate of Umm Al Quwain
          </p>
        </div>
      </div>
    </div>
        </div>
      </section>
    </div>
  );
}
