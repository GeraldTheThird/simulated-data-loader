// Simulated async task using a Promise
function getUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Fake user data
      const user = {
        name: "Jordan Miles",
        email: "jordan@example.com",
        location: "New York, NY"
      };
      resolve(user); // Finish successfully
    }, 2000); // Wait 2 seconds like a real API
  });
}

const button = document.getElementById('loadBtn');
const userInfo = document.getElementById('userInfo');

button.addEventListener('click', () => {
  userInfo.innerHTML = "Loading...";

  getUserData()
    .then(user => {
      userInfo.innerHTML = `
        <strong>Name:</strong> ${user.name}<br>
        <strong>Email:</strong> ${user.email}<br>
        <strong>Location:</strong> ${user.location}
      `;
    })
    .catch(error => {
      userInfo.innerHTML = "Something went wrong.";
      console.error(error);
    });
});
