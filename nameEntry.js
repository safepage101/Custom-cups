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

    fetch(`https://script.google.com/macros/s/AKfycbzuTyCL5bfJ_WfECKqFcSTJOpChuXEtv1ti4Hyd60usFrKuUir9zj4GiTGgJPTYgkalUA/exec?name=${encodeURIComponent(capitalizedName)}&lastname=${encodeURIComponent(capitalizedLastname)}`)
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
