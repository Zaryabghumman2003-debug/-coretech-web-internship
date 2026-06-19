document.addEventListener('DOMContentLoaded', () => {
    // DOM Element Node Mappings
    const crudModalOverlay = document.getElementById('crudModalOverlay');
    const openAddModalBtn = document.getElementById('openAddModalBtn');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const clientForm = document.getElementById('clientForm');
    const modalTitle = document.getElementById('modalTitle');
    const editRecordIndex = document.getElementById('editRecordIndex');
    
    // Form Input Nodes
    const clientName = document.getElementById('clientName');
    const clientEmail = document.getElementById('clientEmail');
    const clientPhone = document.getElementById('clientPhone');
    const companyName = document.getElementById('companyName');
    const projectType = document.getElementById('projectType');
    const clientStatus = document.getElementById('clientStatus');

    // Filter/Search Controls Nodes
    const crudSearch = document.getElementById('crudSearch');
    const statusFilter = document.getElementById('statusFilter');
    const clientTableBody = document.getElementById('clientTableBody');
    const crudEmptyState = document.getElementById('crudEmptyState');

    // Metric Analytical Counters Nodes
    const countTotal = document.getElementById('countTotal');
    const countPending = document.getElementById('countPending');
    const countProgress = document.getElementById('countProgress');
    const countCompleted = document.getElementById('countCompleted');

    // Bootstrap local cache storage with exactly 3 professional dummy clients initially
    let clientRecords = JSON.parse(localStorage.getItem('managedClientsList')) || [
        { name: "Abdul Muqtadar", email: "abdul@duet.edu.pk", phone: "03214567890", company: "Dawood Engineering Corp", project: "YOLO Computer Vision Integration", status: "In Progress" },
        { name: "Laiba Khan", email: "laiba.k@primxact.com", phone: "03339876543", company: "PRIMXACT IT Consultants", project: "Agentic Mafia Flutter Backend", status: "Completed" },
        { name: "Arham Saad", email: "arham.saad@domain.com", phone: "03004455667", company: "CoreTech Solutions", project: "SQL Server Schema Remapping", status: "Pending" }
    ];

    // LocalStorage Syncer & Metric Counter Aggregator Pipeline
    function syncSystemStorageCache() {
        localStorage.setItem('managedClientsList', JSON.stringify(clientRecords));
        aggregateDashboardMetrics();
        evaluateRenderPipeline();
    }

    // Process Analytical Counts for Top Summary Cards Block
    function aggregateDashboardMetrics() {
        const counts = clientRecords.reduce((acc, current) => {
            acc.total++;
            if (current.status === 'Pending') acc.pending++;
            if (current.status === 'In Progress') acc.progress++;
            if (current.status === 'Completed') acc.completed++;
            return acc;
        }, { total: 0, pending: 0, progress: 0, completed: 0 });

        countTotal.textContent = counts.total;
        countPending.textContent = counts.pending;
        countProgress.textContent = counts.progress;
        countCompleted.textContent = counts.completed;
    }

    // Core Filtering Engine Framework Matrix (Handles Search & Status rules simultaneously)
    function evaluateRenderPipeline() {
        const query = crudSearch.value.toLowerCase().trim();
        const selectedStatus = statusFilter.value;

        const filteredList = clientRecords.map((record, index) => ({ ...record, originalIndex: index }))
            .filter(client => {
                const searchMatch = client.name.toLowerCase().includes(query) || client.company.toLowerCase().includes(query);
                const statusMatch = (selectedStatus === 'all' || client.status === selectedStatus);
                return (searchMatch && statusMatch);
            });

        renderSpreadsheetGrid(filteredList);
    }

    // Dynamic Engine: Construct DOM Table rows with state mappings safely
    function renderSpreadsheetGrid(list) {
        clientTableBody.innerHTML = '';
        
        if (list.length === 0) {
            crudEmptyState.classList.remove('hidden');
            return;
        }
        
        crudEmptyState.classList.add('hidden');

        list.forEach(client => {
            const tr = document.createElement('tr');
            
            // Map individual badge styling states
            let badgeClass = 'badge-pending';
            if (client.status === 'In Progress') badgeClass = 'badge-progress';
            if (client.status === 'Completed') badgeClass = 'badge-completed';

            tr.innerHTML = `
                <td>
                    <span class="cell-title">${escapeSecurityHTML(client.name)}</span>
                    <span class="cell-sub">${escapeSecurityHTML(client.email)} | ${escapeSecurityHTML(client.phone)}</span>
                </td>
                <td>
                    <span class="cell-title">${escapeSecurityHTML(client.company)}</span>
                </td>
                <td>
                    <span class="cell-title">${escapeSecurityHTML(client.project)}</span>
                </td>
                <td>
                    <select class="table-inline-select status-select" data-index="${client.originalIndex}">
                        <option value="Pending" ${client.status === 'Pending' ? 'selected' : ''}>Pending</option>
                        <option value="In Progress" ${client.status === 'In Progress' ? 'selected' : ''}>In Progress</option>
                        <option value="Completed" ${client.status === 'Completed' ? 'selected' : ''}>Completed</option>
                    </select>
                </td>
                <td>
                    <div class="action-btn-group">
                        <button class="icon-btn edit-btn" data-index="${client.originalIndex}">Edit</button>
                        <button class="icon-btn delete-btn" data-index="${client.originalIndex}">Delete</button>
                    </div>
                </td>
            `;
            clientTableBody.appendChild(tr);
        });
    }

    // Security Core: Escape raw strings to prevent reflected cross-site injections (XSS)
    function escapeSecurityHTML(str) {
        return str.replace(/[&<>'"]/g, 
            tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
        );
    }

    // Open Modal View with dynamic initialization adjustments
    function triggerModalInterface(title, index = "") {
        modalTitle.textContent = title;
        editRecordIndex.value = index;
        crudModalOverlay.classList.remove('hidden');
    }

    function hideModalInterface() {
        clientForm.reset();
        editRecordIndex.value = "";
        crudModalOverlay.classList.add('hidden');
    }

    // Event Handler: Form Submission Add / Update Client Logic Routing
    clientForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const dataPayload = {
            name: clientName.value.trim(),
            email: clientEmail.value.trim(),
            phone: clientPhone.value.trim(),
            company: companyName.value.trim(),
            project: projectType.value.trim(),
            status: clientStatus.value
        };

        const targetIndex = editRecordIndex.value;

        if (targetIndex === "") {
            // Add Mode Operation
            clientRecords.unshift(dataPayload);
        } else {
            // Update Mode Operation
            clientRecords[parseInt(targetIndex)] = dataPayload;
        }

        hideModalInterface();
        syncSystemStorageCache();
    });

    // Event Delegation Matrix capture for internal table row click indicators
    clientTableBody.addEventListener('click', (e) => {
        const target = e.target;
        const recordIndex = parseInt(target.getAttribute('data-index'));

        // 1. Trigger Edit Record Dialog Form Loading state
        if (target.classList.contains('edit-btn')) {
            const client = clientRecords[recordIndex];
            clientName.value = client.name;
            clientEmail.value = client.email;
            clientPhone.value = client.phone;
            companyName.value = client.company;
            projectType.value = client.project;
            clientStatus.value = client.status;
            
            triggerModalInterface('Update Corporate Client Profile', recordIndex);
        }

        // 2. Trigger Delete Operations Snapshot
        if (target.classList.contains('delete-btn')) {
            if (confirm(`Are you certain you want to remove the managed profile for "${clientRecords[recordIndex].name}" permanently from local history indexes?`)) {
                clientRecords.splice(recordIndex, 1);
                syncSystemStorageCache();
            }
        }
    });

    // Intercept inline table status change dropdown select toggles directly
    clientTableBody.addEventListener('change', (e) => {
        if (e.target.classList.contains('status-select')) {
            const targetDropdown = e.target;
            const targetIndex = parseInt(targetDropdown.getAttribute('data-index'));
            clientRecords[targetIndex].status = targetDropdown.value;
            syncSystemStorageCache();
        }
    });

    // Toolbar Real-time Grid triggers
    openAddModalBtn.addEventListener('click', () => triggerModalInterface('Register New Corporate Client'));
    closeModalBtn.addEventListener('click', hideModalInterface);
    crudModalOverlay.addEventListener('click', (e) => { if (e.target === crudModalOverlay) hideModalInterface(); });
    crudSearch.addEventListener('input', evaluateRenderPipeline);
    statusFilter.addEventListener('change', evaluateRenderPipeline);

    // Bootstrap Application Startup Sequence
    syncSystemStorageCache();
});