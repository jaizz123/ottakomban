'use client';
import { useEffect, useState } from 'react';
import './globals.css'; // Ensure this includes the updated styles below
import Head from 'next/head';

<Head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
</Head>

export default function Home() {
  const productImages = [
    '/images/ok-img4-copy-1167x1667.webp',
    '/images/ok-img4-copy-1167x1667.webp',
    '/images/ok-img4-copy-1167x1667.webp',
  ];

  const [index, setIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false); // ✅ menu toggle state

  const next = () => setIndex((prev) => (prev + 1) % productImages.length);
  const prev = () => setIndex((prev) => (prev - 1 + productImages.length) % productImages.length);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % productImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="page-wrapper">

      <div className="hero-section">
        <img src="/images/hom.jpg" alt="Banner" className="hero-banner" />

      
        <a href="#know-more" className="know-more-btn">Know More</a>

        
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        
        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
  <button className="close-icon" onClick={() => setMenuOpen(false)}>
    &times;
  </button>

  <a href="/home">Home</a>
  <a href="/about">About Us</a>
  <a href="/products">Products</a>
  <a href="/shop">Shop</a>

  <div className="dropdown">
    <button className="dropbtn">
      Locations <i className="fa fa-caret-down"></i>
    </button>
    <div className="dropdown-content">
      <a href="#">UK</a>
      <a href="#">UAE</a>
    </div>
  </div>

  <a href="/contact">Contact</a>
</nav>

      </div>

     
 


   
      <section className="pagesection">
        <hr className="section-divider" />

      
        <section className="section">
          <div className="section-blue-border">
            <div>
              <h2 className="section-heading">Welcome to the <br /> Essence of Tradition</h2>
              <p className="section-text">
                At Ottakombann, we invite you on a journey back in time, to an era when craftsmanship and heritage were revered above all else. Rooted in centuries-old traditions, our traditional alcohol product embodies the essence of our ancestors, crafted with care and passion passed down through generations, resulting in a smooth and crisp taste that is unparalleled in the industry.
              </p>
            </div>
            <img
              src="/images/ok-img1-copy-875x1167.webp"
              alt="Bottle and Food"
              className="section-image"
            />
          </div>
        </section>

       
        <section className="section">
          <div className="center-text">
            <h2 className="section-heading1">Crafted with passion, savored with pleasure</h2>
            <p className="section-text1">
              Ottakombann means Lone Tusker in South Indian Language Malayalam.Ottakombann "Naadan Vaatte" (Local Brew) is inspired by the traditional brew with rich ingredients from the tropical rainforests of the Indian Western Ghats, the once spice capital of the world. Malabar is the Land of monsoons and is located in the western part of the peninsula of India, Between the Western Ghats mountains and the Arabian sea. This naturally fermented liquor is infused with the zesty, luxurious fruity and floral aromas of Ayurveda herbs and spices, expertly combined with a distinctive infusion of Indian Gooseberry. The ideal culinary companion for this beverage is meat & fish dishes.
            </p>
            <img
              src="/images/download.png"
              alt="Ottakomban Bottle"
              className="bottle-alone"
            />
            <hr className="section-divider1" />
          </div>
        </section>
      </section>


     <img src="images/PACKAGE BOX.png" className="package-box" alt="" />

    
      <section className="products-section" id="products">
  <h2 className="products-heading">
    <span className="bold" style={{ color: 'black' }}>OUR</span> <span className="highlight">PRODUCTS</span>
  </h2>
  <p className="products-subheading">
    Experience Ottakomban in three bold expressions — Gooseberry for a tangy-sweet twist,
    Nutmeg for warm spice and depth, and Classic Red for a rich, earthy finish.
    Each handcrafted to celebrate Kerala’s untamed spirit
  </p>

  <div className="products-container">
    {[
      {
        title: 'GOOSEBERRY',
        img: '/images/NELLIKA.png',
        desc: 'The original Tusker delivers a tangy burst of gooseberry, a South Indian Ayurvedic favorite for its taste and health benefits.',
      },
      {
        title: 'NUTMEG',
        img: '/images/JATHIKKA_.png',
        desc: 'The original Tusker delivers a tangy burst of gooseberry, a South Indian Ayurvedic favorite for its taste and health benefits.',
      },
      {
        title: 'CLASSIC RED',
        img: '/images/CLASSIC RED.png',
        desc: 'This un-aged, handcrafted spirit blends nutmeg, gooseberry, and Indian redwood for a complex flavor with earthy notes, warm spice, and subtle sweetness.',
      },
    ].map((item, i) => (
      <div className="product" key={i}>
        <img src={item.img} alt={item.title} className="product-img" />
        <div className="product-details">
        <h3 className="product-title">{item.title}</h3>
        <p className="product-desc">{item.desc}</p>
        <a href="#" className="know-more-link">Know More</a>
      </div>
      </div>
    ))}
  </div>
</section>

    <img src="images/Uae Main.png" className='uae-home-image' alt="uae-class" /> 
    <a href="#know-more" className="know-more-btn2">Know More</a>
   <img src="images/PRODUCTION PROCESS.png"  className="production-image" alt="distillation process" />
   
     <section className="footer-logos">
      <div className="footer-box">
        <img
          src="/images/download (1).png"
          alt="Distilled by Wharf"
          width={200}
          height={200}
        />
      </div>
      <div className="footer-box">
        <img
          src="/images/download (2).png"
          alt="Produced by Appayies"
          width={200}
          height={200}
        />
      </div>
      <div className="footer-box">
        <img
          src="/images/misc-logo1-copy-816x734.webp"
          alt="Drink Responsibly"
          width={200}
          height={200}
        />
      </div>
    </section>
    <section className="contact-wrapper">
      <h2 className="contact-heading">Contact us for all your enquiries.</h2>

      <form className="contact-form">
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message" rows={5} required></textarea>
        <button type="submit">SUBMIT ›</button>
      </form>

      <footer className="contact-footer">
        <div className="footer-left">
          <h3 className="brand">Ottakombann</h3>
          <p>© Ottakombann – All Rights Reserved</p>
        </div>
        <div className="footer-right">
          <div>
            <strong>Contact:</strong>
            <ul>
              <li>Appayies Limited, 33 Chequers Way, Palmers Green, UK, N13 6LD.</li>
              <li>Registered in England and Wales: 15335126</li>
            </ul>
          </div>
          <div className="footer-social">
            <strong>Follow Us:</strong>
            <ul>
              <li>Mob / WhatsApp: +44 (0) 7946 356379</li>
              <li>Email: info@ottakombann.com</li>
            </ul>
          </div>
        </div>
      </footer>
    </section>
    </div>
  );
}
