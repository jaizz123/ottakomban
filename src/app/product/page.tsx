"use client";


import { useState } from 'react';

const products = [
  {
    name: "Original Spiced Brew",
    image: "/images/ok-img4-copy-1167x1667.webp",
    short: "Tangy gooseberry with subtle spice.",
    description:
      "The original Tusker brings a fresh and tangy burst of gooseberry (amla) to the table, balanced with traditional spices. This un-aged spirit has a bright, slightly tart profile, with herbal and citrus notes that awaken the senses.",
    notes: "Tangy, citrusy freshness, subtle spice undertones",
    bestEnjoyed: "Chilled, with tonic or lime, or in refreshing cocktails",
    inspiration:
      "A modern take on ancient healing ingredients and forest flavours."
  },
  {
    name: "Classic Red",
    image: "/images/ok-img4-copy-1167x1667.webp",
    short: "Bold blend of nutmeg & redwood.",
    description:
      "Classic Red is a bold, full-bodied spirit infused with a meticulously balanced mix of nutmeg, gooseberry, and Indian redwood. It offers a complex flavour with earthy undertones, warm spice, and a touch of natural sweetness.",
    notes: "Warm spice, slight tanginess, woody smooth finish",
    bestEnjoyed: "Neat, on the rocks, or in craft cocktails",
    inspiration: "Inspired by the deep forests of South India and its spice legacy"
  },
  {
    name: "Nutmeg Flavour",
    image: "/images/ok-img4-copy-1167x1667.webp",
    short: "Warm, fragrant nutmeg spirit.",
    description:
      "Made from the flesh of nutmeg, this handcrafted spirit delivers a warm, fragrant flavour with hints of pepper, clove, and a mild sweetness.",
    notes: "Fragrant, peppery warmth, smooth finish",
    bestEnjoyed: "Neat, with soda, or spiced mixers",
    inspiration:
      "Rooted in the legacy of spice plantations and traditional herbal brews of India."
  }
];

export default function ProductsPage() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="product-page">
      
      <section className="product-cards">
        <h2 className="title colorful">Our Products</h2>
        <div className="card-grid">
          {products.map((p, i) => (
            <div
              key={i}
              className="product-card"
              onClick={() => setSelected(i)}
            >
              <img src={p.image} alt={p.name} className="card-img" />
              <h3>{p.name}</h3>
              <p>{p.short}</p>
            </div>
          ))}
        </div>
      </section>

      {selected !== null && (
        <section className="product-detail">
          <h2 className="detail-title">{products[selected].name}</h2>
          <div className="detail-content">
            <img
              src={products[selected].image}
              alt={products[selected].name}
              className="detail-img"
            />
            <div>
              <p>{products[selected].description}</p>
              <ul>
                <li><strong>Tasting Notes:</strong> {products[selected].notes}</li>
                <li><strong>Best Enjoyed:</strong> {products[selected].bestEnjoyed}</li>
                <li><strong>Inspiration:</strong> {products[selected].inspiration}</li>
              </ul>
              <button onClick={() => setSelected(null)} className="close-btn">Close</button>
            </div>
          </div>
        </section>
      )}
      
    </div>
  );
}