document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('submissionForm');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        
        // Collect form data
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const address = form.address.value.trim();
        const message = form.message.value.trim();

        if (!name || !email || !phone || !address) {
            alert('Please fill in all required fields.');
            return;
        }
        const allowedtypes = ['text', 'email', 'tel', 'address', 'message'];
        if (!allowedtypes.includes(form.name.type) || !allowedtypes.includes(form.email.type) || !allowedtypes.includes(form.phone.type) || !allowedtypes.includes(form.address.type) || !allowedtypes.includes(form.message.type)) {
            alert('Invalid input types detected.');
            return;
        }
        alert('Form submitted successfully!');
        
        // Optionally, reset the form after submission
        form.reset();
    });
});