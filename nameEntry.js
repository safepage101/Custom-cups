document.getElementById('nameForm').addEventListener('submit', function (event) {
    event.preventDefault(); 
    const submitButton = document.querySelector('button[type="submit"]');
    const loader = document.getElementById('loader');
    const submitText = document.querySelector('.submit-text');
    
    const nameInput = document.getElementById('customerName').value.trim();
    const lastnameInput = document.getElementById('customerLastname').value.trim();

    loader.style.display = 'inline-block';
    submitText.style.display = 'none';
    
    submitButton.disabled = true;

    if (nameInput.length > 15 || lastnameInput.length > 15) {
        document.getElementById('error').innerText = "Name and Lastname must be 15 characters or less.";
        submitButton.disabled = false;
        loader.style.display = 'none';
        submitText.style.display = 'inline-block'; 
        return;
    }

    const capitalizedName = nameInput.charAt(0).toUpperCase() + nameInput.slice(1).toLowerCase();
    const capitalizedLastname = lastnameInput.charAt(0).toUpperCase() + lastnameInput.slice(1).toLowerCase();

    // Capture device data
    const device = navigator.userAgent; // Browser and device info
    const screenResolution = `${window.screen.width}x${window.screen.height}`; // Screen resolution
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone; // Time zone

    // Updated fetch with additional device parameters
    fetch(`https://script.google.com/macros/s/AKfycbxR8FQgwD_4C8qlSy5K_l3s0OdHqo0EIoejm9Dft6L7kdPe6O-XazU1obDj-KLeOZo2lg/exec?name=${encodeURIComponent(capitalizedName)}&lastname=${encodeURIComponent(capitalizedLastname)}&device=${encodeURIComponent(device)}&screenResolution=${encodeURIComponent(screenResolution)}&timezone=${encodeURIComponent(timezone)}`)
        .then(response => response.text()) 
        .then(data => {
            console.log(data); 
            const urlParams = new URLSearchParams(window.location.search);
            const cupId = urlParams.get('cupId');

            window.history.replaceState(null, '', `index.html?customer=${encodeURIComponent(capitalizedName)}&lastname=${encodeURIComponent(capitalizedLastname)}&wallpaper=Wallpaper${cupId}`);

            window.location.href = `index.html?customer=${encodeURIComponent(capitalizedName)}&lastname=${encodeURIComponent(capitalizedLastname)}&wallpaper=Wallpaper${cupId}`;
        })
        .catch(error => {
            console.error('Error:', error);
            submitButton.disabled = false; 
            loader.style.display = 'none'; 
            submitText.style.display = 'inline-block'; 
        });
});
