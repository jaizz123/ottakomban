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
    <div className="orgin"> 
      
      <h1>Our Orgin</h1>
      <h2>"Ottakombann means 'Lone Tusker' and like the tusker, we walk our own path.</h2>
      <p>This is a spirit shaped by ancient recipes and jungle wisdom. Once brewed in clay pots deep in the 
Malabar wild, we've revived this story for a new generation but keeping the touch of the old. 
Not just a drink, but a connection to authenticity, roots, rituals, and raw nature. Our founder, raised in the 
tropical belt of Kerala, brings Ayurvedic knowledge and artisanal passion to every bottle.</p>
<p>At Ottakombann, we invite you on a journey back in time, to an era when craftsmanship and heritage 
were revered above all else. Rooted in centuries-old traditions, our traditional alcohol product embodies 
the essence of our ancestors, crafted with care and passion passed down through generations, resulting in 
a smooth and crisp taste that is unparalleled in the industry.  </p>
<p>This naturally fermented liquor is infused with the zesty, luxurious fruity and floral aromas of Ayurveda 
herbs and spices, expertly combined with distinctive infusion of Indian Gooseberry. The ideal culinary 
companion for this beverage is meat & fish dishes. </p>

    </div>
    <div className="make">
      <h1> Our Make </h1>
      <h2>Artisan Craftsmanship Meets Modern Mastery</h2>
      <p>Rooted in the traditional Malayalam word “vaatte” for unaged, distilled spirit is a contemporary tribute to 
Kerala’s rich distilling heritage. Inspired by the once‑spice capital and cradle of black pepper, this spirit is 
crafted and often mingled with secret regional spices and tropical fruits like nutmeg and gooseberry.</p>
<p>Tradionally distilled in pot stills and bottled unaged, Otta kombann embodies the complex interplay of 
earthy, vegetal, fruity, and subtly peppery notes an alcohol forward homage to local tradition yet refined 
for contemporary palates. Born from cultural nostalgia and crafted for a global audience, it bridges past 
and present respecting Kerala’s monsoon‑fed lands and centuries‑old craftsmanship while offering a 
smooth, exotic sip to enjoy neat or in cocktails. 
</p>
<p>The production and distillation take place in the UK blending traditional techniques with British 
craftsmanship for a globally appealing spirit. </p>
    </div>
    <div className="sip">
      <h1> Sip & Savour </h1>
      <p>Otta Kombann offers a vibrant profile with earthy, fruity, and herbal aromas. Its semi-sweet palate, 
featuring notes of tropical fruits, culminates in a long, sweet finish with a hint of pepperiness. This unique 
spirit pairs exceptionally well with a variety of dishes.</p>
<p>Its bold character complements the complex spices of Indian curries, such as Malabari Curry, Tapioca 
and Beef roast, enhancing their rich flavors. The smoothness also balances the heat in grilled meats like 
grilled Chicken and Kebabs, while its subtle sweetness pairs beautifully with the delicate flavors of 
seafood dishes like Kerala-style Fish Fry. For vegetarian fare, it harmonizes with dishes like Paneer.  </p>
<p>Whether enjoyed neat, on the rocks, or in cocktails, Otta Kombann elevates the dining experience, 
making it a delightful companion to a wide array of cuisines.</p>
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
