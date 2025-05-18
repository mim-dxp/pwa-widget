// env.example.js - Example environment configuration file
// Copy this file to env.js and update with your actual values

const ENV = {
  // The URL of your API service
  API_URL: "https://your-rest-service-url.com/api",

  // Your API key for authentication
  API_KEY: "your-api-key-goes-here",

  // How often the widget refreshes data (in milliseconds)
  // Default: 5 minutes = 5 * 60 * 1000 = 300000
  UPDATE_INTERVAL: 5 * 60 * 1000,
};

// Prevent modification of the ENV object
Object.freeze(ENV);

// Export the environment variables
export default ENV;
