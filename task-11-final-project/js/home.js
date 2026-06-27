// ──────────────────────────────────────────────────
//  ShopWave Home Page
// ──────────────────────────────────────────────────

let currentCategory = 'all';
let currentSort = 'default';
let currentPriceRange = 'all';
let currentSearchTerm = '';
let visibleCount = 12;

document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  renderFlashDeals();
  initSlider();
  startCountdown();
  updateBadges();

  // Search
  document.getElementById('searchBtn')?.addEventListener('click', doSearch);
  document.getElementById('searchInput')?.addEventListener('keypress', e => {
    if (e.key === 'Enter') doSearch();
  });

  // Category dropdown in search bar
  document.getElementById('categoryFilter')?.addEventListener('change', function() {
    filterByCategory(this.value);
  });
});

function doSearch() {
  const term = document.getElementById('searchInput').value.trim().toLowerCase();
  currentSearchTerm = term;
  visibleCount = 12;
  renderProducts();
  if (term) {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
    document.getElementById('sectionTitle').textContent = `Search: "${term}"`;
  }
}

function filterByCategory(cat, btn) {
  currentCategory = cat;
  visibleCount = 12;
  currentSearchTerm = '';
  if (document.getElementById('searchInput')) document.getElementById('searchInput').value = '';

  // Update filter buttons
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');

  const titles = { all:'All Products', electronics:'Electronics', fashion:'Fashion', home:'Home & Living', beauty:'Beauty', sports:'Sports', books:'Books' };
  if (document.getElementById('sectionTitle')) document.getElementById('sectionTitle').textContent = titles[cat] || 'Products';

  // Sync category select
  if (document.getElementById('categoryFilter')) document.getElementById('categoryFilter').value = cat;

  renderProducts();
  document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
}

function sortProducts() {
  currentSort = document.getElementById('sortSelect').value;
  renderProducts();
}

function applyPriceFilter() {
  currentPriceRange = document.getElementById('priceRange').value;
  renderProducts();
}

function getFilteredProducts() {
  let result = [...products];

  if (currentCategory !== 'all') {
    result = result.filter(p => p.category === currentCategory);
  }

  if (currentSearchTerm) {
    result = result.filter(p =>
      p.name.toLowerCase().includes(currentSearchTerm) ||
      p.description.toLowerCase().includes(currentSearchTerm) ||
      p.category.toLowerCase().includes(currentSearchTerm)
    );
  }

  if (currentPriceRange !== 'all') {
    const [min, max] = currentPriceRange.split('-').map(Number);
    result = result.filter(p => p.price >= min && p.price <= max);
  }

  switch (currentSort) {
    case 'price-low':  result.sort((a,b) => a.price - b.price); break;
    case 'price-high': result.sort((a,b) => b.price - a.price); break;
    case 'rating':     result.sort((a,b) => b.rating - a.rating); break;
    case 'newest':     result.sort((a,b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0)); break;
  }

  return result;
}

function renderProducts() {
  const grid = document.getElementById('productGrid');
  const noResults = document.getElementById('noResults');
  const loadBtn = document.getElementById('loadMoreBtn');
  if (!grid) return;

  const filtered = getFilteredProducts();
  const slice = filtered.slice(0, visibleCount);

  if (filtered.length === 0) {
    grid.innerHTML = '';
    if (noResults) noResults.style.display = 'block';
    if (loadBtn) loadBtn.style.display = 'none';
    return;
  }

  if (noResults) noResults.style.display = 'none';
  grid.innerHTML = slice.map(p => createProductCard(p)).join('');

  if (loadBtn) {
    loadBtn.style.display = filtered.length > visibleCount ? 'block' : 'none';
  }
}

function loadMore() {
  visibleCount += 8;
  renderProducts();
}

function renderFlashDeals() {
  const container = document.getElementById('flashProducts');
  if (!container) return;
  const flash = products.filter(p => p.badge === 'Flash' || p.badge === 'Sale' || p.badge === 'Hot').slice(0, 4);
  container.innerHTML = flash.map(p => createProductCard(p)).join('');
}

// ── Hero Slider ──────────────────────────────────
let slideIndex = 0;
let autoSlide;

function initSlider() {
  const slides = document.querySelectorAll('.slide');
  const dotsContainer = document.getElementById('sliderDots');
  if (!slides.length) return;

  slides.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.onclick = () => goToSlide(i);
    dotsContainer?.appendChild(dot);
  });

  document.getElementById('prevSlide')?.addEventListener('click', () => { goToSlide(slideIndex - 1); resetAutoSlide(); });
  document.getElementById('nextSlide')?.addEventListener('click', () => { goToSlide(slideIndex + 1); resetAutoSlide(); });

  autoSlide = setInterval(() => goToSlide(slideIndex + 1), 4000);
}

function goToSlide(n) {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  if (!slides.length) return;
  slideIndex = (n + slides.length) % slides.length;
  slides.forEach((s, i) => s.classList.toggle('active', i === slideIndex));
  dots.forEach((d, i) => d.classList.toggle('active', i === slideIndex));
}

function resetAutoSlide() {
  clearInterval(autoSlide);
  autoSlide = setInterval(() => goToSlide(slideIndex + 1), 4000);
}

// ── Flash Sale Countdown ──────────────────────────
function startCountdown() {
  const end = new Date();
  end.setHours(23, 59, 59, 0); // Resets at midnight

  function update() {
    const now = new Date();
    const diff = end - now;
    if (diff <= 0) return;
    const h = Math.floor(diff / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    const pad = n => String(n).padStart(2, '0');
    if (document.getElementById('hours')) document.getElementById('hours').textContent = pad(h);
    if (document.getElementById('minutes')) document.getElementById('minutes').textContent = pad(m);
    if (document.getElementById('seconds')) document.getElementById('seconds').textContent = pad(s);
  }
  update();
  setInterval(update, 1000);
}

function subscribeNewsletter(e) {
  e.preventDefault();
  showToast('🎉 Subscribed! Check your inbox for a welcome coupon.', 'success');
  e.target.reset();
}
