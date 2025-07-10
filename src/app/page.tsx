'use client';
import { useEffect, useState } from 'react';
import './globals.css'; 

export default function Home() {
  const productImages = [
    '/images/ok-img4-copy-1167x1667.webp',
    '/images/ok-img4-copy-1167x1667.webp',
    '/images/ok-img4-copy-1167x1667.webp',
  ];

  const [index, setIndex] = useState(0);

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
  
    <div className="home">
      <header className="navbar">
        <div className="navbar-left">
          <img src="/images/ok-logo2-copy-529x136.webp" alt="Logo" className="logo" />
          <div className="brand-text">
            <h1>OttaKombann</h1>
            <p>Un-aged Gooseberry Spirit</p>
          </div>
        </div>
        <nav className="navbar-right">
          <a href="#">Home</a>
          <a href="/about">About</a>
          <a href="/product">Products</a>
          <a href="#">Shop</a>
          <a href="/recipes">Recipies</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>

      
      <div className="hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <img
            src="/images/okbanner-2-new-1-2000x1263.jpg"
            alt="Hero Banner"
            className="hero-banner"
          />
        </div>
      </div>
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

    
      <section className="company-section">
        <div className="company-content">
          <p className="company-text">
            Appayies Limited (“the Company”) is the creator of a distinctive brand of spirits, prepared to a proprietary recipe influenced by traditional South Indian spice liquors from the Western Ghats.Our mission is to reimagine the spice liquors of South India for the UK market. The Company's core product now is “Otta Kombann”, and plans to expand to a liquor line that adapts the distinct flavours of South Indian spices to the palates of UK consumers. The Company's products aim to deliver the rich Indian spice heritage in a contemporary, quality-compliant format.
          </p>
          <img
            src="/images/ok-box1-copy-1049x872.webp"
            alt="Otta Kombann Bottle and Box"
            className="company-image"
          />
        </div>
      </section>

    
      <section className="collections-section">
        <h2 className="collections-title">
          <span className="bold">OUR</span> COLLECTIONS
        </h2>
        <div className="carousel">
          <img src={productImages[index]} alt={`Product ${index + 1}`} className="product-image1" />
          <div className="carousel-controls">
            <button onClick={prev}>&lt;</button>
            <button onClick={next}>&gt;</button>
          </div>
        </div>
      </section>
      <section className="production-section">
      <div className="production-row">
        <div className="image-container">
          <img
            src="/images/7b104831-62b6-4d92-97fb-cbb56e3fed68-875x1167.webp"
            alt="Distillation Process 1"
            width={300}
            height={400}
            className="production-image1"
          />
        </div>
        <p className="production-text">
          Every step of our production process is meticulously curated, from the hand-picking of the finest ingredients to the careful blending and ageing in oak barrels.
        </p>
      </div>

      <div className="production-row reverse">
        <p className="production-text left">
          Our master distillers, trained in the time-honoured techniques of our forefathers, ensure that each batch of [Brand Name] is a masterpiece of flavour and aroma.
        </p>
        <div className="image-container">
          <img
            src="/images/85a7ea29-9107-4ddb-be6f-3bea9ed65433-875x1167.webp"
            alt="Distillation Process 2"
            width={300}
            height={400}
            className="production-image"
          />
        </div>
      </div>
    </section>
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
