document.getElementById('quote').classList.add('fade-in');
document.getElementById('author').classList.add('fade-in');
document.getElementById('bg').classList.add('fade-in');

// Function to fetch a random quote and update the background image
function fetchAndUpdate() {
  // Fetch a random quote
  fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
      const quote = data.content;
      const author = data.author;
      
      // Display the quote and author
      document.getElementById('quote').textContent = quote;
      document.getElementById('author').textContent = "~ " + author;
    })
    .catch(error => {
      console.error('Error fetching quote:', error);
    });

  // Fetch a random background image from Unsplash API
  fetch('https://source.unsplash.com/random')
    .then(response => {
      // Extract the image URL from the response URL
      const imageUrl = response.url;
      // Update the background image of .bg-img element smoothly
      document.querySelector('.bg-img').style.backgroundImage = `url(${imageUrl})`;
    })
    .catch(error => {
      console.error('Error fetching background image:', error);
    });
}

// Call fetchAndUpdate function immediately to load initial quote and background image
fetchAndUpdate();

// Set up a timer to fetch new quote and background image every 30 seconds
setInterval(fetchAndUpdate, 60000);

function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  const day = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  let d = (day[today.getDay()]);
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let da = today.getDate();
  let mo = (months[today.getMonth()]);
  let y = today.getFullYear();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('clock').textContent =  h + ":" + m + ":" + s;
  document.getElementById('date').textContent =  d + ", " + da + " " + mo + " " + y;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}
