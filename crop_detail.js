// crop_detail.js
document.getElementById("back_btn").addEventListener("click", function() {
    window.location.href = "navigation.html"; // Redirect to the navigation page
});

// You can also dynamically set data if you fetch it from a backend/API
document.addEventListener("DOMContentLoaded", function() {
    // Example of setting dummy data (already set in HTML but can be dynamic)
    document.getElementById("crop_name").textContent = "Wheat";
    document.getElementById("disease_status").textContent = "Infected";
    document.getElementById("disease_name").textContent = "Powdery Mildew";
    document.getElementById("pesticide_suggestion").textContent = "Use Sulfur-based fungicides";
});
