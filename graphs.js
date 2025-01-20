async function fetchData() {
    try {
        const response = await fetch('https://i2tjb23e12.execute-api.us-east-1.amazonaws.com/dev3/getData', {
            method: 'GET',  // Use GET method to fetch data
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        const data = await response.json();

        // Process and display the data for graphs
        displayGraphs(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        alert('Failed to load data. Please try again later.');
    }
}

function displayGraphs(data) {
    const temperatures = data.map(item => item.temperature);
    const humidities = data.map(item => item.humidity);
    const batteries = data.map(item => item.battery);
    const timestamps = data.map(item => item.timestamp);  // Assuming 'timestamp' is part of the data

    // Display the graphs using the data (using a charting library like Chart.js)
    const ctxTemp = document.getElementById('temperatureChart').getContext('2d');
    const ctxHumidity = document.getElementById('humidityChart').getContext('2d');
    const ctxBattery = document.getElementById('batteryChart').getContext('2d');

    new Chart(ctxTemp, {
        type: 'line',
        data: {
            labels: timestamps,
            datasets: [{
                label: 'Temperature',
                data: temperatures,
                borderColor: 'rgb(255, 99, 132)',
                fill: false,
            }]
        }
    });

    new Chart(ctxHumidity, {
        type: 'line',
        data: {
            labels: timestamps,
            datasets: [{
                label: 'Humidity',
                data: humidities,
                borderColor: 'rgb(54, 162, 235)',
                fill: false,
            }]
        }
    });

    new Chart(ctxBattery, {
        type: 'line',
        data: {
            labels: timestamps,
            datasets: [{
                label: 'Battery',
                data: batteries,
                borderColor: 'rgb(75, 192, 192)',
                fill: false,
            }]
        }
    });
}

// Call the fetchData function to load the graph data when the page loads
window.onload = fetchData;
