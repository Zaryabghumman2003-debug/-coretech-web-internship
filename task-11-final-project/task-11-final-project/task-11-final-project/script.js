
// ==========================================
// 📦 1. EXTENDED MOCK PRODUCT DATA (50 PRODUCTS)
// ==========================================
const products = [
    // --- ELECTRONICS CATEGORY (1-10) ---
    { id: 1, title: "Wireless Headphones", category: "electronics", price: "$99", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80" },
    { id: 2, title: "Mechanical Keyboard", category: "electronics", price: "$89", img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=500&q=80" },
    { id: 3, title: "Smart Fitness Band", category: "electronics", price: "$49", img: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?auto=format&fit=crop&w=500&q=80" },
    { id: 4, title: "DualSense Gaming Controller", category: "electronics", price: "$69", img: "https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?auto=format&fit=crop&w=500&q=80" },
    { id: 5, title: "4K Ultra HD Action Camera", category: "electronics", price: "$199", img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=500&q=80" },
    { id: 6, title: "Ergonomic Wireless Mouse", category: "electronics", price: "$39", img: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=500&q=80" },
    { id: 7, title: "Portable Bluetooth Speaker", category: "electronics", price: "$59", img: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=500&q=80" },
    { id: 8, title: "Noise Cancelling Earbuds", category: "electronics", price: "$129", img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=500&q=80" },
    { id: 9, title: "RGB Streamer Microphone", category: "electronics", price: "$79", img: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=500&q=80" },
    { id: 10, title: "Fast Wireless Charger Pad", category: "electronics", price: "$29", img: "https://images.unsplash.com/photo-1622445262465-2481c4574875?auto=format&fit=crop&w=500&q=80" },

    // --- FASHION CATEGORY (11-25) ---
    { id: 11, title: "Minimalist Leather Watch", category: "fashion", price: "$149", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=80" },
    { id: 12, title: "Premium Leather Backpack", category: "fashion", price: "$79", img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=500&q=80" },
    { id: 13, title: "Casual Denim Jacket", category: "fashion", price: "$65", img: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=500&q=80" },
    { id: 14, title: "Classic White Sneakers", category: "fashion", price: "$85", img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=500&q=80" },
    { id: 15, title: "Polarized Sunglasses", category: "fashion", price: "$45", img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=500&q=80" },
    { id: 16, title: "Vintage Bomber Jacket", category: "fashion", price: "$110", img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=500&q=80" },
    { id: 17, title: "Slim Fit Chino Pants", category: "fashion", price: "$35", img: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=500&q=80" },
    { id: 18, title: "Unisex Cotton Hoodie", category: "fashion", price: "$40", img: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=500&q=80" },
    { id: 19, title: "Leather Chelsea Boots", category: "fashion", price: "$135", img: "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?auto=format&fit=crop&w=500&q=80" },
    { id: 20, title: "Minimalist Wallet Sleeve", category: "fashion", price: "$25", img: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=500&q=80" },
    { id: 21, title: "Running Sports Shoes", category: "fashion", price: "$95", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=80" },
    { id: 22, title: "Summer Straw Hat", category: "fashion", price: "$20", img: "https://images.unsplash.com/photo-1534215754734-18e55d13ce35?auto=format&fit=crop&w=500&q=80" },
    { id: 23, title: "Stainless Steel Bracelet", category: "fashion", price: "$30", img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=500&q=80" },
    { id: 24, title: "Knitted Winter Scarf", category: "fashion", price: "$18", img: "https://images.unsplash.com/photo-1520903928273-0f44b0a4ef5c?auto=format&fit=crop&w=500&q=80" },
    { id: 25, title: "Suede Leather Belt", category: "fashion", price: "$28", img: "https://images.unsplash.com/photo-1624222247344-550fb8ef5582?auto=format&fit=crop&w=500&q=80" },

    // --- HOME DECOR CATEGORY (26-38) ---
    { id: 26, title: "Aesthetic Scented Candle", category: "home", price: "$15", img: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=500&q=80" },
    { id: 27, title: "Modern Ceramic Vase", category: "home", price: "$32", img: "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=500&q=80" },
    { id: 28, title: "Minimalist Table Lamp", category: "home", price: "$45", img: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=500&q=80" },
    { id: 29, title: "Macrame Wall Hanging", category: "home", price: "$24", img: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=500&q=80" },
    { id: 30, title: "Indoor Monstera Plant", category: "home", price: "$38", img: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=500&q=80" },
    { id: 31, title: "Geometric Throw Pillow", category: "home", price: "$19", img: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=500&q=80" },
    { id: 32, title: "Floating Wooden Shelves", category: "home", price: "$27", img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=500&q=80" },
    { id: 33, title: "Linen Bedding Set", category: "home", price: "$120", img: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=500&q=80" },
    { id: 34, title: "Abstract Canvas Art", category: "home", price: "$65", img: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=500&q=80" },
    { id: 35, title: "Velvet Accent Armchair", category: "home", price: "$245", img: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=500&q=80" },
    { id: 36, title: "Nordic Round Mirror", category: "home", price: "$55", img: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=500&q=80" },
    { id: 37, title: "Bamboo Storage Basket", category: "home", price: "$22", img: "https://images.unsplash.com/photo-1531835551805-16d864c8d311?auto=format&fit=crop&w=500&q=80" },
    { id: 38, title: "Desktop Organizer Tray", category: "home", price: "$14", img: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=500&q=80" },

    // --- SPORTS & ESSENTIALS CATEGORY (39-50) ---
    { id: 39, title: "Insulated Water Bottle", category: "sports", price: "$25", img: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=500&q=80" },
    { id: 40, title: "Non-Slip Yoga Mat", category: "sports", price: "$34", img: "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?auto=format&fit=crop&w=500&q=80" },
    { id: 41, title: "Adjustable Dumbbells Set", category: "sports", price: "$150", img: "https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?auto=format&fit=crop&w=500&q=80" },
    { id: 42, title: "Ergonomic Office Chair", category: "sports", price: "$189", img: "https://images.unsplash.com/photo-1505797149-43b0069ec26b?auto=format&fit=crop&w=500&q=80" },
    { id: 43, title: "Travel Neck Pillow", category: "sports", price: "$16", img: "https://images.unsplash.com/photo-1520038410233-7141be7e6f97?auto=format&fit=crop&w=500&q=80" },
    { id: 44, title: "Waterproof Camping Tent", category: "sports", price: "$115", img: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=500&q=80" },
    { id: 45, title: "Lightweight Backpacking Stove", category: "sports", price: "$28", img: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=500&q=80" },
    { id: 46, title: "Electric French Press", category: "sports", price: "$42", img: "https://images.unsplash.com/photo-1577968897460-70f9a73229b7?auto=format&fit=crop&w=500&q=80" },
    { id: 47, title: "Leather Sketchbook Notebook", category: "sports", price: "$19", img: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=500&q=80" },
    { id: 48, title: "Professional Chef Knife", category: "sports", price: "$58", img: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=500&q=80" },
    { id: 49, title: "Classic Fountain Pen", category: "sports", price: "$48", img: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=500&q=80" },
    { id: 50, title: "Premium Matcha Tea Whisk", category: "sports", price: "$15", img: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=500&q=80" }
];
// ==========================================
// 🔄 2. AUTH STATE MANAGER (GLOBAL SESSION CHECK)
// ==========================================
function checkAuthState() {
    const loggedInUser = localStorage.getItem('userEmail');
    const navLoginBtn = document.querySelector('.nav-login-btn');
    const navMenu = document.getElementById('navMenu');

    if (loggedInUser && navMenu) {
        // Agar user logged in hai, login button hatado aur welcome message text lagao with Logout option
        if (navLoginBtn) navLoginBtn.remove();
        
        // Check text duplicate na ho
        if (!document.getElementById('userProfileStatus')) {
            const profileWrapper = document.createElement('div');
            profileWrapper.id = "userProfileStatus";
            profileWrapper.style.cssText = "margin-left: 2rem; display: flex; align-items: center; gap: 10px;";
            
            // Extracting name from email prefix
            const username = loggedInUser.split('@')[0];
            
            profileWrapper.innerHTML = `
                <span style="font-weight: 600; color: #10b981;"><i class="fas fa-user-circle"></i> Hi, ${username}</span>
                <a href="#" id="logoutBtn" style="color: #ef4444; font-size: 0.85rem; font-weight:600; text-decoration:none; margin-left:10px;"><i class="fas fa-sign-out-alt"></i> Logout</a>
            `;
            navMenu.appendChild(profileWrapper);

            // Logout operational trigger
            document.getElementById('logoutBtn').addEventListener('click', (e) => {
                e.preventDefault();
                localStorage.removeItem('userEmail');
                alert('👋 Logged out successfully!');
                window.location.reload();
            });
        }
    }
}

// Global script initial run state check
document.addEventListener('DOMContentLoaded', checkAuthState);

// ==========================================
// 🛒 3. MAIN SHOP ENGINE (FOR INDEX.HTML)
// ==========================================
const productsGrid = document.getElementById('productsGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.getElementById('navMenu');
const cartCountEl = document.getElementById('cart-count');
let cartCount = 0;

if (mobileMenu && navMenu) {
    mobileMenu.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

if (productsGrid) {
    function displayProducts(filteredProducts) {
        if (filteredProducts.length === 0) {
            productsGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted);">No products found.</p>`;
            return;
        }
        
        productsGrid.innerHTML = filteredProducts.map(product => `
            <div class="product-card">
                <img src="${product.img}" alt="${product.title}" class="product-img">
                <div class="product-info">
                    <span class="product-category">${product.category}</span>
                    <h3 class="product-title">${product.title}</h3>
                    <p class="product-price">${product.price}</p>
                    <button class="btn add-to-cart-btn" onclick="addToCart()">Add to Cart</button>
                </div>
            </div>
        `).join('');
    }

    displayProducts(products);

    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            
            const category = e.target.getAttribute('data-filter');
            if (category === 'all') {
                displayProducts(products);
            } else {
                const filtered = products.filter(p => p.category === category);
                displayProducts(filtered);
            }
        });
    });
}

function addToCart() {
    if (cartCountEl) {
        cartCount++;
        cartCountEl.textContent = cartCount;
        cartCountEl.style.transform = "scale(1.3)";
        setTimeout(() => cartCountEl.style.transform = "scale(1)", 200);
    }
}

// Newsletter Field Validation (Strict to standard strings check)
const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');

    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;

        if (nameInput.value.trim() === "") {
            document.getElementById('nameError').style.display = "block";
            isValid = false;
        } else {
            document.getElementById('nameError').style.display = "none";
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
            document.getElementById('emailError').style.display = "block";
            isValid = false;
        } else {
            document.getElementById('emailError').style.display = "none";
        }

        if (isValid) {
            const successToast = document.getElementById('successMessage');
            successToast.style.display = "block";
            newsletterForm.reset();
            setTimeout(() => successToast.style.display = "none", 3000);
        }
    });
}

// ==========================================
// 🔑 4. AUTHENTICATION MODULE (FOR LOGIN.HTML)
// ==========================================
const loginForm = document.getElementById('loginForm');

if (loginForm) {
    const authTitle = document.getElementById('authTitle');
    const authSubtitle = document.getElementById('authSubtitle');
    const nameFieldGroup = document.getElementById('nameFieldGroup');
    const authName = document.getElementById('authName');
    const loginEmail = document.getElementById('loginEmail');
    const loginPassword = document.getElementById('loginPassword');
    const formOptionsRow = document.getElementById('formOptionsRow');
    const submitAuthBtn = document.getElementById('submitAuthBtn');
    const toggleAuthModeText = document.getElementById('toggleAuthModeText');
    const googleSignInBtn = document.getElementById('googleSignInBtn');

    const forgotPassBtn = document.getElementById('forgotPassBtn');
    const forgotModal = document.getElementById('forgotModal');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const forgotPasswordForm = document.getElementById('forgotPasswordForm');
    const forgotEmail = document.getElementById('forgotEmail');

    let isSignUpMode = false;

    function handleModeToggle(e) {
        e.preventDefault();
        isSignUpMode = !isSignUpMode;

        document.querySelectorAll('.error-msg').forEach(el => el.style.display = 'none');

        if (isSignUpMode) {
            authTitle.innerHTML = "Create an <span>Account</span>";
            authSubtitle.textContent = "Join EcoShop today to get started.";
            nameFieldGroup.style.display = "block";
            formOptionsRow.style.display = "none"; 
            submitAuthBtn.textContent = "Sign Up";
            toggleAuthModeText.innerHTML = `Already have an account? <a href="#" id="switchToSignUp">Sign in here</a>`;
        } else {
            authTitle.innerHTML = "Welcome Back to <span>EcoShop</span>";
            authSubtitle.textContent = "Please enter your details to sign in.";
            nameFieldGroup.style.display = "none";
            formOptionsRow.style.display = "flex";
            submitAuthBtn.textContent = "Sign In";
            toggleAuthModeText.innerHTML = `Don't have an account? <a href="#" id="switchToSignUp">Sign up for free</a>`;
        }
        
        document.getElementById('switchToSignUp').addEventListener('click', handleModeToggle);
    }

    const toggleLink = document.getElementById('switchToSignUp');
    if (toggleLink) {
        toggleLink.addEventListener('click', handleModeToggle);
    }

    // AUTH FORM PROCESSING PIPELINE WITH GMAIL RULE CHECK
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let validationPass = true;

        if (isSignUpMode) {
            if (authName && authName.value.trim() === "") {
                document.getElementById('loginNameError').style.display = "block";
                validationPass = false;
            } else {
                document.getElementById('loginNameError').style.display = "none";
            }
        }

        // 🔥 STRICT AUTHENTIC GMAIL VALIDATION PATTERN RULE
        const emailValue = loginEmail.value.trim();
        const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/; 
        const emailErrorEl = document.getElementById('loginEmailError');

        if (!gmailRegex.test(emailValue)) {
            emailErrorEl.textContent = "Access Denied: Only authentic @gmail.com addresses allowed!";
            emailErrorEl.style.display = "block";
            validationPass = false;
        } else {
            emailErrorEl.style.display = "none";
        }

        if (loginPassword.value.trim().length < 6) {
            document.getElementById('loginPasswordError').style.display = "block";
            validationPass = false;
        } else {
            document.getElementById('loginPasswordError').style.display = "none";
        }

        if (validationPass) {
            // Active session logging into storage state
            localStorage.setItem('userEmail', emailValue);

            if (isSignUpMode) {
                alert(`🎉 Account registered successfully via Google records for ${authName.value.trim()}!`);
            } else {
                alert('🎉 Login Verification Passed!');
            }
            window.location.href = 'index.html'; // Redirecting to main interface
        }
    });

    if (googleSignInBtn) {
        googleSignInBtn.addEventListener('click', () => {
            alert('🚀 Synchronizing secure profile endpoints via OAuth dynamic layer...');
            setTimeout(() => {
                // Mock user mapping fallback
                localStorage.setItem('userEmail', 'alex.developer@gmail.com');
                alert('🎉 Google Authentication successful!');
                window.location.href = 'index.html';
            }, 800);
        });
    }

    if (forgotPassBtn && forgotModal && closeModalBtn) {
        forgotPassBtn.addEventListener('click', (e) => {
            e.preventDefault();
            forgotModal.classList.add('active');
        });

        closeModalBtn.addEventListener('click', () => {
            forgotModal.classList.remove('active');
            forgotPasswordForm.reset();
            document.getElementById('forgotEmailError').style.display = "none";
        });

        window.addEventListener('click', (e) => {
            if (e.target === forgotModal) {
                forgotModal.classList.remove('active');
            }
        });
    }

    if (forgotPasswordForm) {
        forgotPasswordForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
            const forgotErrorEl = document.getElementById('forgotEmailError');

            if (!gmailRegex.test(forgotEmail.value.trim())) {
                forgotErrorEl.textContent = "Please enter a valid active @gmail.com account";
                forgotErrorEl.style.display = "block";
            } else {
                forgotErrorEl.style.display = "none";
                const toast = document.getElementById('forgotSuccessMessage');
                toast.style.display = "block";
                forgotPasswordForm.reset();
                setTimeout(() => {
                    toast.style.display = "none";
                    forgotModal.classList.remove('active');
                }, 2500);
            }
        });
    }
}