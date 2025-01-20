document.getElementById('uploadBtn').addEventListener('click', function() {
    document.getElementById('imageInput').click();
});

document.getElementById('imageInput').addEventListener('change', function(e) {
    let file = e.target.files[0];
    if (file) {
        let reader = new FileReader();
        reader.onload = function(event) {
            let imgElement = document.getElementById('uploadedImage');
            imgElement.src = event.target.result;
            imgElement.style.display = 'block';
            document.getElementById('submitBtn').style.display = 'inline-block'; // Show the process button
        };
        reader.readAsDataURL(file);
    }
});

document.getElementById('captureBtn').addEventListener('click', function() {
    let webcam = document.getElementById('webcam');
    let canvas = document.getElementById('capturedCanvas');
    let context = canvas.getContext('2d');

    // Start the webcam stream
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(function(stream) {
            webcam.srcObject = stream;
            webcam.style.display = 'block';
            webcam.play();

            // Capture image after 3 seconds
            setTimeout(function() {
                context.drawImage(webcam, 0, 0, canvas.width, canvas.height);
                let imageData = canvas.toDataURL();
                document.getElementById('uploadedImage').src = imageData;
                document.getElementById('uploadedImage').style.display = 'block';
                webcam.srcObject.getTracks().forEach(track => track.stop()); // Stop the webcam
                document.getElementById('submitBtn').style.display = 'inline-block'; // Show the process button
            }, 3000); // Capture after 3 seconds
        })
        .catch(function(err) {
            alert("Error accessing webcam: " + err);
        });
});

document.getElementById('submitBtn').addEventListener('click', function() {
    // For demo purposes, we'll simulate disease detection and plant identification
    document.getElementById('diseaseDetected').innerHTML = 'Disease Detected: <span>Leaf Blight</span>';
    document.getElementById('plantIdentified').innerHTML = 'Plant Identified: <span>Tomato</span>';
    document.getElementById('suggestedPesticide').innerHTML = 'Suggested Pesticide: <span>Pesticide X</span>';
});