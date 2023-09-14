import axios from "axios";

// Your authentication logic here (e.g., checking if the user is authenticated)
function isAuthenticated() {
  const token = localStorage.getItem('authToken'); // You should store the token when the user logs in
  return !!token; // Returns true if token exists
}

export function requireAuth(to, from, next) {
  if (isAuthenticated()) {
    applyTokenToAxios(); // Apply the token to Axios headers
    next(); // Proceed to the route
  } else {
    next({ name: 'login' }); // Redirect to the login page
  }
}

function applyTokenToAxios() {
  const token = localStorage.getItem('authToken'); // Get the token from storage
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`; // Set the token in Axios headers
  }
}
