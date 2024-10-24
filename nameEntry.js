document.getElementById('nameForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission
    const submitButton = document.querySelector('button[type="submit"]');
    const loader = document.getElementById('loader');
    const submitText = document.querySelector('.submit-text');
    
    // Get first name and last name inputs
    const nameInput = document.getElementById('customerName').value.trim();
    const lastnameInput = document.getElementById('customerLastname').value.trim();

    // Show loader and hide the submit text
    loader.style.display = 'inline-block';
    submitText.style.display = 'none';

    // Disable the button to prevent multiple submissions
    submitButton.disabled = true;

    // Capitalize the first letter of the names and check lengths
    if (nameInput.length > 15 || lastnameInput.length > 15) {
        document.getElementById('error').innerText = "Name and Lastname must be 15 characters or less.";
        submitButton.disabled = false; // Re-enable button if there's an error
        loader.style.display = 'none';
        submitText.style.display = 'inline-block'; // Show submit text again
        return;
    }

    const capitalizedName = nameInput.charAt(0).toUpperCase() + nameInput.slice(1).toLowerCase();
    const capitalizedLastname = lastnameInput.charAt(0).toUpperCase() + lastnameInput.slice(1).toLowerCase();

    // Send the first name and last name to the Google Apps Script
    fetch(`https://script.google.com/macros/s/AKfycbwAm7eybxuPELg__VEiyZJDwvkHA-T3ZenCBYrPfrkGvOBAq-aCntABrnLfoXE8I6IrXA/exec?name=${encodeURIComponent(capitalizedName)}&lastname=${encodeURIComponent(capitalizedLastname)}`)
        .then(response => response.text()) 
        .then(data => {
            console.log(data); // Log success message or handle response

            // Assuming the cupId is passed as a URL parameter
            const urlParams = new URLSearchParams(window.location.search);
            const cupId = urlParams.get('cupId');

            // Update history to prevent going back to name entry page
            window.history.replaceState(null, '', `index.html?customer=${encodeURIComponent(capitalizedName)}&lastname=${encodeURIComponent(capitalizedLastname)}&2hvr82isbhd02jm182jne82owjrgo20wye72k&wallpaper=Wallpaper${cupId}&8282osgd71ivdwp0mfbgq92`);

            // Redirect to the thank-you page
            window.location.href = `index.html?customer=${encodeURIComponent(capitalizedName)}&lastname=${encodeURIComponent(capitalizedLastname)}&wallpaper=Wallpaper${cupId}`;
        })
        .catch(error => {
            console.error('Error:', error);
            submitButton.disabled = false; // Re-enable button if there's an error
            loader.style.display = 'none'; // Hide loader on error
            submitText.style.display = 'inline-block'; // Show submit text again
        });
});