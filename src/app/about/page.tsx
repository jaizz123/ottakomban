// app/about/page.tsx
//import Image from 'next/image';
import React from 'react';


export default function AboutPage() {
  return (
    <div className="about-container">
     
      <div className="banner">
        <img
          src="\images\images.jpeg"
          alt="Barrels Background"
          
          className="banner-image"
        />
        <div className="banner-text">ABOUT US</div>
      </div>

      
      <div className="about-content">
        <h2 className="heading">The Spirit of </h2>
        <h3 className="subheading">The Lone Tusker</h3>
        
        <p className="description">
           Taste the Tradition Crafted in the shadow of the Western Ghats, Ottakombann is a spirited 
tribute to Kerala's wild heart steeped in tradition, spiced with nature. 
        </p>

        <div className="product-image-container">
          <img
            src="/images/box1.webp"
            alt="Product Bottle"
            width={300}
            height={500}
            className="product-image"
          />
        </div>
      </div>
      
<section className="herbs-section">
  <h2 className="herbs-title">
    MADE WITH TRADITIONAL SOUTH INDIAN HERBS & SPICES
  </h2>
  <p className="herbs-description">
    This naturally fermented liquor is infused with the zesty, luxurious fruity and
    floral aromas of Ayurveda herbs and spices, expertly combined with a distinctive
    infusion of Indian Gooseberry. The ideal culinary companion for this beverage is
    meat &amp; fish dishes.
  </p>
</section>


<section className="director-message">
  <div className="director-container">
    <img
      src="images/dir.png" 
      alt="Director"
      className="director-img"
    />
    <div className="director-text">
      <p>
        The Company’s long-term procurement strategy will focus on ethical direct sourcing
        of spice ingredients from South Indian producers. The aim is to prioritise organic,
        sustainable, environmentally-conscious ingredients to support local economies. The
        production process is intended to respect traditional distillation techniques while
        incorporating modern efficiencies. The Company eventually plans to develop initiatives
        for community engagement in the Western Ghats, aligning with the commitment to ethical
        practices.
      </p>
      <p className="director-name">Binu Mani<br /><span className="title">Director</span></p>
    </div>
  </div>
</section>

<footer className="footer">
  <div className="footer-logo">
    <img src="/images/ok-logo2-copy-529x136.webp" alt="Ottakombann Logo" />
  </div>
  <div className="footer-socials">
    <a href="#" aria-label="Facebook">
      <img src="images/facebook-svgrepo-com.svg" alt="Facebook" />
    </a>
    <a href="#" aria-label="Instagram">
      <img src="images/instagram-1-svgrepo-com.svg" alt="Instagram" />
    </a>
    <a href="#" aria-label="Pinterest">
      <img src="/pic/pinterest.png" alt="Pinterest" />
    </a>
    <a href="#" aria-label="YouTube">
      <img src="/pic/youtube.png" alt="YouTube" />
    </a>
  </div>
</footer>


    </div>
  );
}
