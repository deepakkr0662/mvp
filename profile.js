// Select the elements for displaying profile details and activity history
const userName = document.getElementById('userName');
const userEmail = document.getElementById('userEmail');
const deviceCount = document.getElementById('deviceCount');
const activityTable = document.getElementById('activityTable').getElementsByTagName('tbody')[0];
const logoutBtn = document.getElementById('logoutBtn');

// Fetch user profile details and activity history when the page loads
window.onload = async () => {
    try {
        const userProfile = await fetchUserProfile();
        const activityHistory = await fetchUserActivityHistory();

        // Populate profile information
        userName.textContent = userProfile.name;
        userEmail.textContent = userProfile.email;
        deviceCount.textContent = userProfile.devices.length;

        // Populate activity history table
        activityHistory.forEach(activity => {
            const row = activityTable.insertRow();
            row.insertCell(0).textContent = activity.date;
            row.insertCell(1).textContent = activity.deviceId;
            row.insertCell(2).textContent = activity.activity;
        });
    } catch (error) {
        console.error('Error loading profile data:', error);
    }
};

// Fetch the user profile data (mocked API call)
async function fetchUserProfile() {
    // Simulating an API call with a delay
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                name: 'Deepak Kumar',
                email: 'deepak.kumar@example.com',
                devices: [
                    { id: 'device1', name: 'Plant Sensor 1' }
                ]
            });
        }, 1000);
    });
}

// Fetch the user's activity history (mocked API call)
async function fetchUserActivityHistory() {
    // Simulating an API call with a delay
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([
                { date: '2025-01-10', deviceId: 'device1', activity: 'Battery low alert' }
                
            ]);
        }, 1000);
    });
}

// Handle the Log Out button click
logoutBtn.addEventListener('click', () => {
    // Perform logout logic (clear session, redirect, etc.)
    alert('Logged out successfully!');
    // Redirect to login page or perform logout actions
    window.location.href = 'sign_in.html';  // Example redirect to sign-in page
});
