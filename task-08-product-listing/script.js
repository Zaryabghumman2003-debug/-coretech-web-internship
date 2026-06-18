document.addEventListener('DOMContentLoaded', () => {
    // Dynamic Product Dataset (Exactly 8 Premium Products with Stable High-Quality Images)
    const productCatalog = [
        {
            id: 1,
            name: "Mechanical Keyboard",
            price: 41700,
            category: "Peripherals",
            description: "Ultra-responsive tactile mechanical keyboard featuring hot-swappable clicky linear switches and full RGB layout mapping options.",
            image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&q=80&auto=format&fit=crop"
        },
        {
            id: 2,
            name: "Ergonomic Performance Gaming Mouse",
            price: 22200,
            category: "Peripherals",
            description: "High-accuracy 26K DPI optical sensor mouse with customizable macro side layout binds and weight-reduction framework setup.",
            image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&q=80&auto=format&fit=crop"
        },
        {
            id: 3,
            name: "Ultrawide Workstation Display Monitor",
            price: 125000,
            category: "Components",
            description: "34-inch curved workspace screen panel rendering 144Hz refresh fluid streams for panoramic coding layout architecture splits.",
            image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&q=80&auto=format&fit=crop"
        },
        {
            id: 4,
            name: "Studio Reference Audio Headphones",
            price: 55600,
            category: "Audio",
            description: "Professional open-back soundstage headphones offering zero distortion frequency streaming audio processing loops.",
            image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500&q=80&auto=format&fit=crop"
        },
        {
            id: 5,
            name: "External Secure Solid State Drive",
            price: 36000,
            category: "Components",
            description: "2TB high-speed NVMe flash processing drive delivering 2000MB/s data streaming read and write performance metrics.",
           image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&q=80&auto=format&fit=crop" // Explicit permanent fix
        },
        {
            id: 6,
            name: "Cardioid USB Broadcast Microphone",
            price: 33300,
            category: "Audio",
            description: "Studio-grade recording mic with custom noise-suppression parameters perfect for virtual core design engineering scrums.",
            image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=500&q=80&auto=format&fit=crop"
        },
        {
            id: 7,
            name: "4K High-Definition Streaming Webcam",
            price: 25000,
            category: "Peripherals",
            description: "Ultra-sharp image rendering video tracking capture system equipped with automated AI auto-focus tracking lenses.",
            image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&q=80&auto=format&fit=crop"
        },
        {
            id: 8,
            name: "Graphics Processing Component GPU",
            price: 166800,
            category: "Components",
            description: "Advanced hardware processing framework computing engine optimized for AI vector simulations and YOLO object tracking.",
            image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=500&q=80&auto=format&fit=crop"
        }
    ];

    const productsGrid = document.getElementById('productsGrid');
    const productSearch = document.getElementById('productSearch');
    const categoryFilter = document.getElementById('categoryFilter');
    const priceSort = document.getElementById('priceSort');
    const noProductsState = document.getElementById('noProductsState');

    // Filter Processing System Engine
    function filterAndSortProductsCatalog() {
        const searchVal = productSearch.value.toLowerCase().trim();
        const selectedCategory = categoryFilter.value;
        const selectedSortOrder = priceSort.value;

        let modifiedCatalog = productCatalog.filter(product => {
            const matchesSearch = product.name.toLowerCase().includes(searchVal);
            const matchesCategory = (selectedCategory === 'all' || product.category === selectedCategory);
            return (matchesSearch && matchesCategory);
        });

        if (selectedSortOrder === 'lowToHigh') {
            modifiedCatalog.sort((a, b) => a.price - b.price);
        } else if (selectedSortOrder === 'highToLow') {
            modifiedCatalog.sort((a, b) => b.price - a.price);
        }

        renderProductsGrid(modifiedCatalog);
    }

    // Dynamic Engine: Render Product Cards Grid Layout View
    function renderProductsGrid(renderedList) {
        productsGrid.innerHTML = '';
        
        if (renderedList.length === 0) {
            noProductsState.classList.remove('hidden');
            return;
        }

        noProductsState.classList.add('hidden');

        renderedList.forEach(product => {
            const card = document.createElement('article');
            card.className = 'product-card';

            card.innerHTML = `
                <div class="img-wrapper">
                    <img src="${product.image}" alt="${escapeHTML(product.name)}">
                    <span class="category-tag">${escapeHTML(product.category)}</span>
                </div>
                <div class="product-content">
                    <h3>${escapeHTML(product.name)}</h3>
                    <p class="product-desc">${escapeHTML(product.description)}</p>
                    <div class="product-footer">
                        <span class="product-price">Rs. ${product.price.toLocaleString()}</span>
                        <button class="buy-btn" data-name="${escapeHTML(product.name)}">Order Item</button>
                    </div>
                </div>
            `;
            productsGrid.appendChild(card);
        });
    }

    function escapeHTML(str) {
        return str.replace(/[&<>'"]/g, 
            tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
        );
    }

    // Dynamic Pop-up Modal Generation Engine
    function openOrderModal(itemName) {
        const modalOverlay = document.createElement('div');
        modalOverlay.className = 'modal-overlay';
        modalOverlay.id = 'dynamicModal';

        modalOverlay.innerHTML = `
            <div class="modal-box">
                <button class="close-modal-btn" id="closeModal">&times;</button>
                <h3>Checkout Details</h3>
                <p class="target-item-name">Item: ${itemName}</p>
                
                <form class="modal-form" id="orderSubmitForm">
                    <div class="modal-form-group">
                        <label for="modalName">Full Name</label>
                        <input type="text" id="modalName" required placeholder="Enter your full name">
                    </div>
                    
                    <div class="modal-form-group">
                        <label for="modalEmail">Email Address</label>
                        <input type="email" id="modalEmail" required placeholder="name@domain.com">
                    </div>

                    <div class="modal-form-group">
                        <label for="modalPhone">Phone Number</label>
                        <input type="tel" id="modalPhone" required placeholder="e.g., 03XXXXXXXXX">
                    </div>

                    <div class="modal-form-group">
                        <label for="modalAddress">Shipping Address</label>
                        <textarea id="modalAddress" rows="3" required placeholder="Enter complete street shipping address..."></textarea>
                    </div>

                    <div class="modal-form-group">
                        <label>Payment Method</label>
                        <div class="cod-badge">💵 Cash On Delivery (COD) Enabled</div>
                    </div>

                    <button type="submit" class="submit-order-btn">Confirm Shipment Order</button>
                </form>
            </div>
        `;

        document.body.appendChild(modalOverlay);

        // Close Modal Handlers
        document.getElementById('closeModal').addEventListener('click', closeOrderModal);
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) closeOrderModal();
        });

        // Form Submit Execution
        document.getElementById('orderSubmitForm').addEventListener('submit', (e) => {
            e.preventDefault();
            const submitBtn = e.target.querySelector('.submit-order-btn');
            submitBtn.textContent = 'Processing Shipment...';
            submitBtn.style.backgroundColor = '#4b5563';
            
            setTimeout(() => {
                alert(`Mubarak! Your order for "${itemName}" has been placed successfully via Cash on Delivery.`);
                closeOrderModal();
            }, 1000);
        });
    }

    function closeOrderModal() {
        const modal = document.getElementById('dynamicModal');
        if (modal) modal.remove();
    }

    // Intercept grid clicks to capture order modal triggers
    productsGrid.addEventListener('click', (e) => {
        if (e.target.classList.contains('buy-btn')) {
            const itemName = e.target.getAttribute('data-name');
            openOrderModal(itemName);
        }
    });

    productSearch.addEventListener('input', filterAndSortProductsCatalog);
    categoryFilter.addEventListener('change', filterAndSortProductsCatalog);
    priceSort.addEventListener('change', filterAndSortProductsCatalog);

    renderProductsGrid(productCatalog);
});