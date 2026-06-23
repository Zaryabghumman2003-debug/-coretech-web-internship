document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('landingContactForm');
    const alertBanner = document.getElementById('contactSuccessAlert');

    const nameInput = document.getElementById('inputName');
    const emailInput = document.getElementById('inputEmail');
    const messageInput = document.getElementById('inputMessage');

    const errName = document.getElementById('errorName');
    const errEmail = document.getElementById('errorEmail');
    const errMessage = document.getElementById('errorMessage');

    function applyFieldErrorState(inputNode, errorNode, txtMessage) {
        errorNode.textContent = txtMessage;
        inputNode.classList.add('field-error');
    }

    function removeFieldErrorState(inputNode, errorNode) {
        errorNode.textContent = '';
        inputNode.classList.remove('field-error');
    }

    function verifyValidEmailRegex(emailString) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(emailString).toLowerCase());
    }

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            let isPipelineValid = true;
            if(alertBanner) alertBanner.classList.add('hidden');

            if (nameInput.value.trim() === '') {
                applyFieldErrorState(nameInput, errName, 'Corporate Name parameter is required.');
                isPipelineValid = false;
            } else {
                removeFieldErrorState(nameInput, errName);
            }

            if (emailInput.value.trim() === '') {
                applyFieldErrorState(emailInput, errEmail, 'Enterprise route email is mandatory.');
                isPipelineValid = false;
            } else if (!verifyValidEmailRegex(emailInput.value.trim())) {
                applyFieldErrorState(emailInput, errEmail, 'Invalid address mapping configuration format.');
                isPipelineValid = false;
            } else {
                removeFieldErrorState(emailInput, errEmail);
            }

            const messageCleanText = messageInput.value.trim();
            if (messageCleanText === '') {
                applyFieldErrorState(messageInput, errMessage, 'Project scope description is required.');
                isPipelineValid = false;
            } else if (messageCleanText.length < 20) {
                applyFieldErrorState(messageInput, errMessage, `Requires minimum 20 characters (Current: ${messageCleanText.length}).`);
                isPipelineValid = false;
            } else {
                removeFieldErrorState(messageInput, errMessage);
            }

            if (isPipelineValid) {
                const sendBtn = document.getElementById('submitBtn');
                sendBtn.textContent = 'Processing Server Stream...';
                sendBtn.style.pointerEvents = 'none';

                setTimeout(() => {
                    if(alertBanner) {
                        alertBanner.textContent = 'Success: Operational message parameters validated and synchronized with CoreTech servers.';
                        alertBanner.classList.remove('hidden');
                        alertBanner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                    }
                    form.reset();
                    sendBtn.textContent = 'Deploy Configuration Request';
                    sendBtn.style.pointerEvents = '';
                }, 1000);
            }
        });
    }
});