// Example device data
const devices = [
    { id: "device_1", name: "Device A", battery: 6, status: "Active" },
    
];

// Function to load device data into the table
function loadDevices() {
    const deviceTable = document.getElementById("deviceTable");
    deviceTable.innerHTML = ""; // Clear the table

    devices.forEach(device => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${device.id}</td>
            <td>${device.name}</td>
            <td>${device.battery}%</td>
            <td>${device.status}</td>
            <td><button class="update-btn">Update</button></td>
        `;

        deviceTable.appendChild(row);
    });

    checkLowBattery();
}

// Function to check for low battery devices and display alerts
function checkLowBattery() {
    const alertsDiv = document.getElementById("alerts");
    alertsDiv.innerHTML = ""; // Clear previous alerts

    devices.forEach(device => {
        if (device.battery <= 10) {
            const alert = document.createElement("div");
            alert.className = "alert";
            alert.innerHTML = `
                ⚠️ Alert: ${device.name} (ID: ${device.id}) has a low battery of ${device.battery}%.
            `;
            alertsDiv.appendChild(alert);
        }
    });

    alertsDiv.style.display = alertsDiv.innerHTML ? "block" : "none"; // Show/hide alerts
}

// Load devices when the page loads
window.onload = loadDevices;