// ──────────────────────────────────────────────────
//  ShopWave Product Data
// ──────────────────────────────────────────────────
const products = [
  // ELECTRONICS
  { id:1, name:'Samsung Galaxy A55 5G', price:89999, originalPrice:109999, category:'electronics', emoji:'📱', rating:4.5, reviews:1243, badge:'Hot', isNew:false, description:'6.6" Super AMOLED, 50MP camera, 5000mAh battery, 8GB RAM' },
  { id:2, name:'Apple AirPods Pro 2nd Gen', price:54999, originalPrice:64999, category:'electronics', emoji:'🎧', rating:4.8, reviews:876, badge:'Sale', isNew:false, description:'Active Noise Cancellation, Transparency Mode, 30hr battery' },
  { id:3, name:'HP Laptop 15s Intel i5', price:119999, originalPrice:139999, category:'electronics', emoji:'💻', rating:4.3, reviews:432, badge:null, isNew:false, description:'15.6" FHD, 8GB RAM, 512GB SSD, Windows 11' },
  { id:4, name:'Canon EOS M50 Mark II', price:129999, originalPrice:149999, category:'electronics', emoji:'📷', rating:4.6, reviews:328, badge:'Flash', isNew:false, description:'24.1MP, 4K Video, DIGIC 8, Dual Pixel AF' },
  { id:5, name:'Xiaomi Smart Band 8', price:8999, originalPrice:12999, category:'electronics', emoji:'⌚', rating:4.2, reviews:2145, badge:'Best Seller', isNew:false, description:'Heart rate, SpO2, 14-day battery, water resistant' },
  { id:6, name:'JBL Flip 6 Speaker', price:22999, originalPrice:27999, category:'electronics', emoji:'🔊', rating:4.7, reviews:654, badge:null, isNew:true, description:'Waterproof, 12h playtime, PartyBoost compatible' },
  { id:7, name:'OnePlus 12R 5G', price:99999, originalPrice:119999, category:'electronics', emoji:'📱', rating:4.4, reviews:987, badge:'New', isNew:true, description:'Snapdragon 8 Gen 1, 50MP camera, 100W SUPERVOOC' },
  { id:8, name:'Logitech MX Keys Mini', price:18999, originalPrice:22999, category:'electronics', emoji:'⌨️', rating:4.5, reviews:312, badge:null, isNew:false, description:'Wireless keyboard, backlit, multi-device, USB-C' },

  // FASHION
  { id:9, name:'Men\'s Slim Fit Chinos', price:2499, originalPrice:3999, category:'fashion', emoji:'👖', rating:4.1, reviews:543, badge:'37% Off', isNew:false, description:'Premium cotton blend, multiple colors, modern fit' },
  { id:10, name:'Women\'s Floral Kurti', price:1299, originalPrice:2499, category:'fashion', emoji:'👗', rating:4.4, reviews:876, badge:'Hot', isNew:false, description:'Lawn fabric, digital print, sizes S-XXL' },
  { id:11, name:'Nike Air Max 270', price:24999, originalPrice:32999, category:'fashion', emoji:'👟', rating:4.6, reviews:1432, badge:'Sale', isNew:false, description:'Max Air unit, mesh upper, foam midsole' },
  { id:12, name:'Leather Laptop Bag', price:4999, originalPrice:7999, category:'fashion', emoji:'💼', rating:4.3, reviews:234, badge:null, isNew:true, description:'Genuine leather, fits 15.6", multiple compartments' },
  { id:13, name:'Ray-Ban Aviator Sunglasses', price:12999, originalPrice:18999, category:'fashion', emoji:'🕶️', rating:4.7, reviews:432, badge:'Trending', isNew:false, description:'UV400, metal frame, classic aviator style' },
  { id:14, name:'Women\'s Handbag Premium', price:3999, originalPrice:6999, category:'fashion', emoji:'👜', rating:4.2, reviews:321, badge:null, isNew:true, description:'Vegan leather, spacious, detachable strap' },
  { id:15, name:'Men\'s Formal Dress Shirt', price:1899, originalPrice:2999, category:'fashion', emoji:'👔', rating:4.0, reviews:654, badge:null, isNew:false, description:'100% cotton, wrinkle resistant, sizes M-XXL' },
  { id:16, name:'Adidas Tracksuit Set', price:8999, originalPrice:13999, category:'fashion', emoji:'🏃', rating:4.5, reviews:543, badge:'Popular', isNew:false, description:'Moisture wicking, elastic waistband, 3-stripe design' },

  // HOME & LIVING
  { id:17, name:'Philips Air Fryer 4.1L', price:19999, originalPrice:26999, category:'home', emoji:'🍳', rating:4.7, reviews:987, badge:'Best Seller', isNew:false, description:'Rapid Air Tech, 7 presets, digital display, easy clean' },
  { id:18, name:'Dyson V8 Vacuum Cleaner', price:89999, originalPrice:109999, category:'home', emoji:'🌀', rating:4.8, reviews:432, badge:'Premium', isNew:false, description:'Digital motor, 40min runtime, HEPA filter' },
  { id:19, name:'LED Smart Bulb 4-Pack', price:2999, originalPrice:4999, category:'home', emoji:'💡', rating:4.2, reviews:1234, badge:'Value Pack', isNew:false, description:'RGB colors, WiFi control, 10W = 75W, app compatible' },
  { id:20, name:'Wooden Bookshelf 5-Tier', price:14999, originalPrice:19999, category:'home', emoji:'📚', rating:4.3, reviews:234, badge:null, isNew:false, description:'Solid wood, easy assembly, multiple finish options' },
  { id:21, name:'Memory Foam Pillow', price:3499, originalPrice:5499, category:'home', emoji:'🛏️', rating:4.5, reviews:876, badge:'Hot', isNew:false, description:'Cervical support, washable cover, queen size' },
  { id:22, name:'Instant Pot Duo 7-in-1', price:24999, originalPrice:34999, category:'home', emoji:'🥘', rating:4.9, reviews:1543, badge:'Top Rated', isNew:false, description:'Pressure cook, slow cook, rice, sauté, steam, yogurt' },
  { id:23, name:'Nonstick Cookware Set 5pc', price:8999, originalPrice:13999, category:'home', emoji:'🍲', rating:4.4, reviews:654, badge:null, isNew:true, description:'Granite coating, induction compatible, heat-resistant' },

  // BEAUTY
  { id:24, name:'Neutrogena Hydro Boost Serum', price:3499, originalPrice:4999, category:'beauty', emoji:'✨', rating:4.6, reviews:2341, badge:'Best Seller', isNew:false, description:'Hyaluronic acid, oil-free, 30ml, for all skin types' },
  { id:25, name:'Maybelline Fit Me Foundation', price:1899, originalPrice:2699, category:'beauty', emoji:'💄', rating:4.3, reviews:1876, badge:'Popular', isNew:false, description:'30 shades, matte + poreless, SPF 22, 30ml' },
  { id:26, name:'L\'Oreal Elvive Shampoo 400ml', price:899, originalPrice:1299, category:'beauty', emoji:'🧴', rating:4.1, reviews:3421, badge:'Sale', isNew:false, description:'Extraordinary oil, for dry hair, sulfate free' },
  { id:27, name:'Vitamin C Brightening Kit', price:5999, originalPrice:8999, category:'beauty', emoji:'🍋', rating:4.7, reviews:543, badge:'New', isNew:true, description:'Serum + moisturizer + eye cream, glow set' },
  { id:28, name:'Perfume – CK One 200ml', price:12999, originalPrice:18999, category:'beauty', emoji:'🌸', rating:4.8, reviews:876, badge:'Trending', isNew:false, description:'Fresh citrus, unisex, long lasting, original CK' },

  // SPORTS
  { id:29, name:'Decathlon Yoga Mat Pro', price:3999, originalPrice:5999, category:'sports', emoji:'🧘', rating:4.5, reviews:765, badge:null, isNew:false, description:'6mm thick, non-slip, eco-friendly TPE material' },
  { id:30, name:'Wilson Tennis Racket', price:14999, originalPrice:19999, category:'sports', emoji:'🎾', rating:4.6, reviews:234, badge:'Sport', isNew:false, description:'Carbon fiber frame, 100sq in, pre-strung, adult' },
  { id:31, name:'Protein Whey Gold 5lb', price:11999, originalPrice:15999, category:'sports', emoji:'💪', rating:4.7, reviews:1432, badge:'Hot', isNew:false, description:'25g protein/scoop, chocolate flavor, 71 servings' },
  { id:32, name:'Nike Football Official', price:4999, originalPrice:6999, category:'sports', emoji:'⚽', rating:4.4, reviews:543, badge:null, isNew:false, description:'FIFA approved, butyl bladder, size 5, all surfaces' },
  { id:33, name:'Adjustable Dumbbell Set 20kg', price:8999, originalPrice:13999, category:'sports', emoji:'🏋️', rating:4.5, reviews:432, badge:'Value', isNew:false, description:'Spin-lock design, chrome plated, with carrying bag' },
  { id:34, name:'Cycling Helmet MTB', price:3499, originalPrice:5499, category:'sports', emoji:'🚴', rating:4.3, reviews:321, badge:null, isNew:true, description:'CPSC certified, 21 vents, adjustable fit system' },

  // BOOKS
  { id:35, name:'Atomic Habits – James Clear', price:1299, originalPrice:1899, category:'books', emoji:'📖', rating:4.9, reviews:5432, badge:'Bestseller', isNew:false, description:'Build good habits, break bad ones – #1 NYT Bestseller' },
  { id:36, name:'The Alchemist – Paulo Coelho', price:899, originalPrice:1299, category:'books', emoji:'📚', rating:4.8, reviews:8765, badge:'Classic', isNew:false, description:'The world\'s most-read novel. Life-changing fable.' },
  { id:37, name:'Python Programming – 3rd Ed', price:2499, originalPrice:3499, category:'books', emoji:'🐍', rating:4.7, reviews:1234, badge:'Popular', isNew:false, description:'From beginner to advanced, 600+ exercises included' },
  { id:38, name:'Rich Dad Poor Dad', price:999, originalPrice:1499, category:'books', emoji:'💰', rating:4.6, reviews:6543, badge:'Bestseller', isNew:false, description:'What the rich teach their kids about money' },
  { id:39, name:'Design Patterns – GoF', price:3999, originalPrice:5999, category:'books', emoji:'🖥️', rating:4.7, reviews:876, badge:null, isNew:false, description:'Reusable OO software – essential CS reference' },
  { id:40, name:'The Psychology of Money', price:1199, originalPrice:1799, category:'books', emoji:'🧠', rating:4.8, reviews:4321, badge:'Hot', isNew:false, description:'Timeless lessons on wealth, greed, and happiness' },
];

// Helper: render star rating
function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(empty);
}

// Helper: discount %
function discountPct(original, price) {
  return Math.round(((original - price) / original) * 100);
}

// Create product card HTML
function createProductCard(p) {
  const wishlist = JSON.parse(localStorage.getItem('sw_wishlist') || '[]');
  const isWished = wishlist.includes(p.id);
  const discount = discountPct(p.originalPrice, p.price);
  return `
    <div class="product-card" data-id="${p.id}">
      ${p.badge ? `<span class="prod-badge">${p.badge}</span>` : ''}
      ${p.isNew ? `<span class="prod-badge new-badge">New</span>` : ''}
      <button class="wish-btn ${isWished ? 'wished' : ''}" onclick="toggleWishlist(${p.id},this)" title="Add to Wishlist">
        <i class="fa${isWished ? 's' : 'r'} fa-heart"></i>
      </button>
      <div class="prod-img" onclick="quickView(${p.id})">${p.emoji}</div>
      <div class="prod-info">
        <p class="prod-cat">${p.category}</p>
        <h3 class="prod-name" onclick="quickView(${p.id})">${p.name}</h3>
        <div class="prod-stars">
          <span class="stars">${renderStars(p.rating)}</span>
          <span class="review-count">(${p.reviews.toLocaleString()})</span>
        </div>
        <div class="prod-price-row">
          <span class="prod-price">Rs. ${p.price.toLocaleString()}</span>
          <span class="prod-original">Rs. ${p.originalPrice.toLocaleString()}</span>
          <span class="prod-discount">-${discount}%</span>
        </div>
        <p class="prod-desc">${p.description}</p>
        <div class="prod-actions">
          <button class="add-cart-btn" onclick="addToCart(${p.id})">
            <i class="fas fa-cart-plus"></i> Add to Cart
          </button>
          <button class="buy-now-btn" onclick="buyNow(${p.id})">Buy Now</button>
        </div>
      </div>
    </div>
  `;
}
