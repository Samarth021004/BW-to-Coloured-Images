document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let formData = new FormData();
    let fileInput = document.getElementById('image');
    formData.append('image', fileInput.files[0]);

    fetch('/colorize', {
        method: 'POST',
        body: formData
    })
    .then(response => response.blob())
    .then(blob => {
        const originalImage = document.getElementById('originalImage');
        const colorizedImage = document.getElementById('colorizedImage');

        // Display the original image
        const originalURL = URL.createObjectURL(fileInput.files[0]);
        originalImage.src = originalURL;
        originalImage.style.display = 'block';

        // Display the colorized image
        const colorizedURL = URL.createObjectURL(blob);
        colorizedImage.src = colorizedURL;
        colorizedImage.style.display = 'block';
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
