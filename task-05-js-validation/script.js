document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const successAlert = document.getElementById('success-alert');

    // Input Elements
    const fullName = document.getElementById('fullName');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const message = document.getElementById('message');

    // Error Containers
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const messageError = document.getElementById('messageError');

    // Helper: Mark Input as Error
    function setError(inputElement, errorElement, message) {
        errorElement.textContent = message;
        inputElement.classList.add('input-error');
        inputElement.classList.remove('input-success');
    }

    // Helper: Mark Input as Valid
    function setSuccess(inputElement, errorElement) {
        errorElement.textContent = '';
        inputElement.classList.remove('input-error');
        inputElement.classList.add('input-success');
    }

    // Email Regular Expression Validation
    function isValidEmail(emailVal) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(emailVal).toLowerCase());
    }

    // Form Submit Event Handler
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent page refresh
        
        let isFormValid = true;
        successAlert.classList.add('hidden');

        // 1. Full Name Validation
        if (fullName.value.trim() === '') {
            setError(fullName, nameError, 'Full Name is required.');
            isFormValid = false;
        } else {
            setSuccess(fullName, nameError);
        }

        // 2. Email Validation
        if (email.value.trim() === '') {
            setError(email, emailError, 'Email address is required.');
            isFormValid = false;
        } else if (!isValidEmail(email.value.trim())) {
            setError(email, emailError, 'Please enter a valid email format.');
            isFormValid = false;
        } else {
            setSuccess(email, emailError);
        }

        // 3. Phone Number Validation
        // Removes any spaces or dashes to accurately count digits
        const cleanPhone = phone.value.replace(/[\s-]/g, '');
        if (phone.value.trim() === '') {
            setError(phone, phoneError, 'Phone number is required.');
            isFormValid = false;
        } else if (isNaN(cleanPhone)) {
            setError(phone, phoneError, 'Phone number must contain numeric digits only.');
            isFormValid = false;
        } else if (cleanPhone.length < 10) {
            setError(phone, phoneError, `Phone must be at least 10 digits (Current: ${cleanPhone.length}).`);
            isFormValid = false;
        } else {
            setSuccess(phone, phoneError);
        }

        // 4. Message Validation
        if (message.value.trim() === '') {
            setError(message, messageError, 'Message block cannot be left empty.');
            isFormValid = false;
        } else if (message.value.trim().length < 20) {
            setError(message, messageError, `Message must be at least 20 characters (Current: ${message.value.trim().length}).`);
            isFormValid = false;
        } else {
            setSuccess(message, messageError);
        }

        // Final Processing if Form passes all validation rules
        if (isFormValid) {
            // Show Success Notification Banner
            successAlert.textContent = 'Success! Your message has been validated and sent successfully.';
            successAlert.classList.remove('hidden');
            
            // Reset input values and validation classes
            form.reset();
            const inputs = [fullName, email, phone, message];
            inputs.forEach(input => input.classList.remove('input-success'));
            
            // Scroll to top of card smoothly to see success alert
            successAlert.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    });
});
