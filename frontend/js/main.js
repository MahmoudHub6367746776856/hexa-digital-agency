// Define the base URL for our API
const API_BASE_URL = 'http://localhost:5000/api';

// Get the status element from the HTML
const statusDiv = document.getElementById('status' );

// Function to check the backend health
async function checkBackendHealth() {
  try {
    // Make a request to our /health endpoint
    const response = await fetch(`${API_BASE_URL}/health`);

    if (!response.ok) {
      // If response is not 200-299, throw an error
      throw new Error(`Network response was not ok. Status: ${response.status}`);
    }

    const data = await response.json();

    // Update the HTML based on the response
    statusDiv.textContent = `Status: ${data.status} - ${data.message}`;
    statusDiv.classList.add('ok');

  } catch (error) {
    console.error('Error checking backend health:', error);
    statusDiv.textContent = 'Error: Could not connect to the backend.';
    statusDiv.classList.add('error');
  }
}

// Run the function when the page loads
checkBackendHealth();
