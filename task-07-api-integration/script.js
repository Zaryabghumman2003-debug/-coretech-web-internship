document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements Mapping
    const searchInput = document.getElementById('searchInput');
    const usersGrid = document.getElementById('usersGrid');
    const loadingState = document.getElementById('loadingState');
    const errorState = document.getElementById('errorState');
    const errorMessage = document.getElementById('errorMessage');
    const retryBtn = document.getElementById('retryBtn');
    const emptySearchState = document.getElementById('emptySearchState');

    const API_ENDPOINT = 'https://jsonplaceholder.typicode.com/users';
    let globalUsersCache = []; // Global state pipeline array cache

    // Core Engine: Fetch Data From REST API
    async function fetchDirectoryRecords() {
        // Toggle view states for loading phase
        loadingState.classList.remove('hidden');
        usersGrid.classList.add('hidden');
        errorState.classList.add('hidden');
        emptySearchState.classList.add('hidden');
        searchInput.value = ''; // Clear search channel input field

        try {
            const response = await fetch(API_ENDPOINT);
            
            // Check if network response stream context is valid
            if (!response.ok) {
                throw new Error(`HTTP Error Context Response! Status: ${response.status}`);
            }

            const data = await response.json();
            
            // Validate if structural stream array is correct
            if (!Array.isArray(data)) {
                throw new Error('API Response structure payload is invalid.');
            }

            globalUsersCache = data; // Sync live elements cache stream
            renderDirectoryGrid(globalUsersCache);
            
            // Show grid view, remove loading layer
            loadingState.classList.add('hidden');
            usersGrid.classList.remove('hidden');

        } catch (error) {
            console.error('Async Fetch Error Block Interception:', error);
            errorMessage.textContent = `Network Exception Pipeline Intercepted: ${error.message}`;
            loadingState.classList.add('hidden');
            errorState.classList.remove('hidden');
        }
    }

    // Dynamic Engine: Render User Profile Cards Grid Layout
    function renderDirectoryGrid(usersList) {
        usersGrid.innerHTML = '';
        
        if (usersList.length === 0) {
            emptySearchState.classList.remove('hidden');
            return;
        }

        emptySearchState.classList.add('hidden');

        usersList.forEach(user => {
            const card = document.createElement('article');
            card.className = 'user-card';

            // Safe Extract and Formatting nested fields parameters safely
            const name = escapeStructuralHTML(user.name || 'N/A');
            const email = escapeStructuralHTML(user.email || 'N/A');
            const phone = escapeStructuralHTML(user.phone || 'N/A');
            const website = escapeStructuralHTML(user.website || 'N/A');
            const city = escapeStructuralHTML(user.address?.city || 'N/A');

            card.innerHTML = `
                <h3>${name}</h3>
                
                <div class="user-info-row">
                    <span class="info-label">Email Address</span>
                    <span class="info-value"><a href="mailto:${email}">${email}</a></span>
                </div>

                <div class="user-info-row">
                    <span class="info-label">Phone Channel</span>
                    <span class="info-value">${phone}</span>
                </div>

                <div class="user-info-row">
                    <span class="info-label">Digital Domain</span>
                    <span class="info-value"><a href="https://${website}" target="_blank" rel="noopener noreferrer">${website}</a></span>
                </div>

                <div class="user-info-row">
                    <span class="info-label">Primary City</span>
                    <span class="info-value">${city}</span>
                </div>
            `;

            usersGrid.appendChild(card);
        });
    }

    // Protection Helper: Escape HTML strings to protect against XSS reflections
    function escapeStructuralHTML(str) {
        return str.replace(/[&<>'"]/g, 
            tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
        );
    }

    // Feature Event: Real-time Live Input Search Filter By Name
    searchInput.addEventListener('input', (e) => {
        const queryTerm = e.target.value.toLowerCase().trim();
        
        // Filter elements by structural search logic map
        const filteredResults = globalUsersCache.filter(user => {
            const targetName = (user.name || '').toLowerCase();
            return targetName.includes(queryTerm);
        });

        renderDirectoryGrid(filteredResults);
    });

    // Event Trigger: Retry Network Connection Framework Action Button
    retryBtn.addEventListener('click', fetchDirectoryRecords);

    // Initial Bootstrap Core Trigger
    fetchDirectoryRecords();
});