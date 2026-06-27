// ──────────────────────────────────────────────────
//  ShopWave Cart & Wishlist
// ──────────────────────────────────────────────────

function getCart() { return JSON.parse(localStorage.getItem('sw_cart') || '[]'); }
function saveCart(c) { localStorage.setItem('sw_cart', JSON.stringify(c)); updateBadges(); }
function getWishlist() { return JSON.parse(localStorage.getItem('sw_wishlist') || '[]'); }
function saveWishlist(w) { localStorage.setItem('sw_wishlist', JSON.stringify(w)); updateBadges(); }

function updateBadges() {
  const cart = getCart();
  const wish = getWishlist();
  const total = cart.reduce((s, i) => s + i.qty, 0);
  const cartBadges = document.querySelectorAll('#cartBadge');
  const wishBadges = document.querySelectorAll('#wishBadge');
  cartBadges.forEach(b => b.textContent = total);
  wishBadges.forEach(b => b.textContent = wish.length);
}

function addToCart(productId, qty = 1) {
  const p = products.find(x => x.id === productId);
  if (!p) return;
  let cart = getCart();
  const existing = cart.find(i => i.id === productId);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id: p.id, name: p.name, price: p.price, emoji: p.emoji, qty });
  }
  saveCart(cart);
  showToast(`✅ "${p.name}" added to cart!`, 'success');
}

function removeFromCart(productId) {
  let cart = getCart().filter(i => i.id !== productId);
  saveCart(cart);
  renderCartPage();
}

function updateQty(productId, qty) {
  let cart = getCart();
  const item = cart.find(i => i.id === productId);
  if (item) {
    item.qty = Math.max(1, qty);
    saveCart(cart);
    renderCartPage();
  }
}

function toggleWishlist(productId, btn) {
  let wish = getWishlist();
  if (wish.includes(productId)) {
    wish = wish.filter(id => id !== productId);
    showToast('💔 Removed from wishlist', 'info');
    if (btn) {
      btn.classList.remove('wished');
      btn.querySelector('i').className = 'far fa-heart';
    }
  } else {
    wish.push(productId);
    showToast('❤️ Added to wishlist!', 'success');
    if (btn) {
      btn.classList.add('wished');
      btn.querySelector('i').className = 'fas fa-heart';
    }
  }
  saveWishlist(wish);
}

function buyNow(productId) {
  addToCart(productId);
  setTimeout(() => window.location.href = (window.location.pathname.includes('pages') ? '' : 'pages/') + 'cart.html', 500);
}

function renderCartPage() {
  const layout = document.getElementById('cartLayout');
  if (!layout) return;
  const cart = getCart();
  updateBadges();

  if (cart.length === 0) {
    layout.innerHTML = `
      <div style="text-align:center;padding:4rem;width:100%">
        <p style="font-size:5rem">🛒</p>
        <h2>Your cart is empty</h2>
        <p style="color:#666;margin:0.5rem 0 2rem">Looks like you haven't added anything yet.</p>
        <a href="../index.html" style="display:inline-block;padding:0.9rem 2.5rem;background:var(--primary);color:white;border-radius:8px;text-decoration:none;font-weight:600">Start Shopping</a>
      </div>`;
    return;
  }

  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const delivery = subtotal >= 999 ? 0 : 150;
  const total = subtotal + delivery;

  layout.innerHTML = `
    <div class="cart-items">
      <h2 style="margin-bottom:1rem">🛒 Shopping Cart (${cart.reduce((s,i)=>s+i.qty,0)} items)</h2>
      ${cart.map(item => `
        <div class="cart-item">
          <div class="cart-item-emoji">${item.emoji}</div>
          <div class="cart-item-info">
            <h3>${item.name}</h3>
            <p class="cart-item-price">Rs. ${item.price.toLocaleString()}</p>
          </div>
          <div class="cart-qty-controls">
            <button onclick="updateQty(${item.id}, ${item.qty - 1})">−</button>
            <span>${item.qty}</span>
            <button onclick="updateQty(${item.id}, ${item.qty + 1})">+</button>
          </div>
          <div class="cart-item-total">Rs. ${(item.price * item.qty).toLocaleString()}</div>
          <button class="cart-remove" onclick="removeFromCart(${item.id})"><i class="fas fa-trash"></i></button>
        </div>
      `).join('')}
      <button class="clear-cart-btn" onclick="clearCart()"><i class="fas fa-trash"></i> Clear Cart</button>
    </div>

    <div class="cart-summary">
      <h3>Order Summary</h3>
      <div class="summary-row"><span>Subtotal</span><span>Rs. ${subtotal.toLocaleString()}</span></div>
      <div class="summary-row"><span>Delivery</span><span>${delivery === 0 ? '<span style="color:#38a169">FREE</span>' : 'Rs. ' + delivery}</span></div>
      ${delivery > 0 ? `<p style="font-size:0.8rem;color:#888;margin-top:0.3rem">Add Rs. ${(999-subtotal).toLocaleString()} more for free delivery</p>` : ''}
      <div class="summary-divider"></div>
      <div class="summary-row total-row"><span>Total</span><span>Rs. ${total.toLocaleString()}</span></div>

      <div class="coupon-row">
        <input type="text" id="couponInput" placeholder="Enter coupon code"/>
        <button onclick="applyCoupon()">Apply</button>
      </div>

      <button class="checkout-btn" onclick="checkout()">
        <i class="fas fa-lock"></i> Proceed to Checkout
      </button>

      <div class="payment-methods">
        <p>Accepted payments:</p>
        <span>💳 Visa</span><span>💳 MC</span><span>🏦 JazzCash</span><span>📲 EasyPaisa</span>
      </div>

      <a href="../index.html" class="continue-shopping"><i class="fas fa-arrow-left"></i> Continue Shopping</a>
    </div>
  `;
}

function clearCart() {
  if (confirm('Remove all items from cart?')) {
    saveCart([]);
    renderCartPage();
  }
}

function applyCoupon() {
  const code = document.getElementById('couponInput').value.toUpperCase().trim();
  const coupons = { 'WELCOME500': 500, 'SAVE10': 'percent', 'SHOPWAVE': 200 };
  if (coupons[code]) {
    showToast(`🎉 Coupon "${code}" applied!`, 'success');
  } else {
    showToast('❌ Invalid coupon code', 'error');
  }
}

function checkout() {
  const user = JSON.parse(localStorage.getItem('sw_current_user') || 'null');
  if (!user) {
    showToast('⚠️ Please login to checkout', 'error');
    setTimeout(() => window.location.href = 'login.html', 1200);
    return;
  }

  const cart = getCart();
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);

  // Save order
  const orders = JSON.parse(localStorage.getItem('sw_orders') || '[]');
  orders.push({
    id: 'SW' + Date.now(),
    date: new Date().toISOString(),
    items: cart,
    total: total,
    status: 'Processing'
  });
  localStorage.setItem('sw_orders', JSON.stringify(orders));
  saveCart([]);

  showToast('🎉 Order placed! Thank you for shopping with ShopWave!', 'success', 4000);
  setTimeout(() => window.location.href = 'orders.html', 2000);
}

// Toast notification
function showToast(msg, type = 'info', duration = 3000) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.className = `toast toast-${type} show`;
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('show'), duration);
}

// Quick view modal
function quickView(productId) {
  const p = products.find(x => x.id === productId);
  if (!p) return;
  const modal = document.getElementById('quickViewModal');
  const overlay = document.getElementById('modalOverlay');
  const content = document.getElementById('modalContent');
  if (!modal) return;

  const discount = discountPct(p.originalPrice, p.price);
  content.innerHTML = `
    <div class="qv-img">${p.emoji}</div>
    <div class="qv-details">
      <span class="qv-cat">${p.category}</span>
      <h2>${p.name}</h2>
      <div class="qv-stars">${renderStars(p.rating)} <span>(${p.reviews.toLocaleString()} reviews)</span></div>
      <p class="qv-desc">${p.description}</p>
      <div class="qv-price-row">
        <span class="qv-price">Rs. ${p.price.toLocaleString()}</span>
        <span class="qv-original">Rs. ${p.originalPrice.toLocaleString()}</span>
        <span class="qv-discount">-${discount}%</span>
      </div>
      <div class="qv-qty-row">
        <button onclick="qvAdjust(-1)">−</button>
        <span id="qvQty">1</span>
        <button onclick="qvAdjust(1)">+</button>
      </div>
      <div class="qv-actions">
        <button class="add-cart-btn" onclick="addToCart(${p.id}, parseInt(document.getElementById('qvQty').textContent)); closeModal()">
          <i class="fas fa-cart-plus"></i> Add to Cart
        </button>
        <button class="buy-now-btn" onclick="buyNow(${p.id})">Buy Now</button>
      </div>
      <div class="qv-meta">
        <span>✅ In Stock</span>
        <span>🚚 Free delivery on orders ≥ Rs. 999</span>
        <span>↩️ 7-day easy returns</span>
      </div>
    </div>
  `;
  modal.classList.add('open');
  overlay.classList.add('open');
}

function qvAdjust(delta) {
  const el = document.getElementById('qvQty');
  const val = Math.max(1, parseInt(el.textContent) + delta);
  el.textContent = val;
}

function closeModal() {
  document.getElementById('quickViewModal')?.classList.remove('open');
  document.getElementById('modalOverlay')?.classList.remove('open');
}

document.addEventListener('DOMContentLoaded', updateBadges);
