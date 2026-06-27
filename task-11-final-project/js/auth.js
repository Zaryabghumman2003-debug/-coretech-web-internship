// ──────────────────────────────────────────────────
//  ShopWave Auth Utilities
// ──────────────────────────────────────────────────

function getCurrentUser() {
  return JSON.parse(localStorage.getItem('sw_current_user') || 'null');
}

function logout() {
  localStorage.removeItem('sw_current_user');
  showToast('👋 Logged out successfully', 'info');
  setTimeout(() => window.location.reload(), 800);
}

function updateNavUser() {
  const user = getCurrentUser();
  const loginLink = document.getElementById('loginLink');
  const registerLink = document.getElementById('registerLink');
  const logoutLink = document.getElementById('logoutLink');
  const navUserName = document.getElementById('navUserName');

  if (user) {
    if (loginLink) loginLink.style.display = 'none';
    if (registerLink) registerLink.style.display = 'none';
    if (logoutLink) logoutLink.style.display = 'flex';
    if (navUserName) navUserName.textContent = user.firstName || 'My Account';
  }
}

// Account dropdown toggle
document.addEventListener('DOMContentLoaded', () => {
  updateNavUser();

  const toggle = document.getElementById('accountToggle');
  const dropdown = document.getElementById('accountDropdown');
  if (toggle && dropdown) {
    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      dropdown.classList.toggle('open');
    });
    document.addEventListener('click', () => dropdown.classList.remove('open'));
  }

  // Hamburger
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => mobileNav.classList.toggle('open'));
  }
});

// Toast (shared fallback if not already defined)
if (typeof showToast === 'undefined') {
  window.showToast = function(msg, type = 'info', duration = 3000) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = msg;
    toast.className = `toast toast-${type} show`;
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => toast.classList.remove('show'), duration);
  };
}
