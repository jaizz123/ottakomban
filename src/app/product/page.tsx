'use client';
import Image from 'next/image';


const products = [
  {
    title: 'NUTMEG FLAVOUR',
    image: '/images/JATHIKKA_.png',
    description: `This variant is a tribute to the spice-rich groves of Wayanad and Tamil Nadu, where nutmeg has been cultivated for centuries. Its distinct aroma brings warmth to every sip, ideal in spiced cocktails.`,
    highlights: [
      'Tasting Notes: Fragrant, peppery warmth, smooth finish',
      'Perfect for spiced meats, warm cocktails',
      'Inspired by spice plantations and herbal brews of South India'
    ],
    button: 'Shop Now'
  },
  {
    title: 'GOOSEBERRY FLAVOUR',
    image: '/images/NELLIKA.png',
    description: `The original Toddy flavour brings a fresh and tangy burst of gooseberry (amla) to the drink, a fruit revered in Ayurveda. This refreshing blend is perfect for light snacks and summer evenings.`,
    highlights: [
      'Tasting Notes: Tangy, citrusy freshness, subtle herbal undertones',
      'Pairs great with coastal cuisine or light snacks',
      'Inspired by traditional toddy shop recipes from Kerala'
    ],
    button: 'Shop Now',
    light: true
  },
  {
    title: 'CLASSIC RED',
    image: '/images/CLASSIC RED.png',
    description: `Classic Red is the signature blend of Ottakomban — bold, full-bodied and spicy. Inspired by the toddy tapping traditions of South India, it offers warm spice and a woody finish.`,
    highlights: [
      'Tasting Notes: Warm spices, slight smokiness, woody mouthfeel',
      'Enjoy neat or with soda',
      'Inspired by South India’s toddy legacy'
    ],
    button: 'Shop Now',
  }
];

export default function OurCollectionPage() {
  return (
    
    <>
    <div className="navbar">
  <img src="images/ok-logo2-copy-529x136.webp" className="navbar-logo" alt="logo" />

  <input
    type="checkbox"
    id="menu-toggle"
    className="menu-toggle"
    onChange={() => {}}
  />
  <label htmlFor="menu-toggle" className="hamburger">
    <span></span>
    <span></span>
    <span></span>
  </label>

  <nav className="nav-links">
    <a href="/home">Home</a>
    <a href="/about">About</a>
    <a href="/product">Products</a>
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
<div className="hero-overlay-product">
        <h1>Our Collection</h1>
      </div>
      <img src="/images/Product Page Banner.png" className="productpage-banner-image" alt="Banner" />
      
      <div className="collection-wrapper">
        {products.map((product, index) => (
          <section
            key={index}
            className={`product-block ${product.light ? 'light-bg' : ''}`}
          >
            <div className="product-inner">
              <div className="productpage-image">
                <img
                  src={product.image}
                  alt={product.title}
                  width={180}
                  height={400}
                />
              </div>
              <div className="product-details">
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <ul>
                  {product.highlights.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <button>{product.button}</button>
              </div>
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
