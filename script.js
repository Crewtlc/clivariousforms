const button = document.getElementById('interactiveButton');

button.addEventListener('BA-Check Form', function() {
  if (button.classList.contains('clicked')) {
    button.classList.remove('clicked');
    button.textContent = 'BA-Check Form';
  } else {
    button.classList.add('clicked');
    button.textContent = 'Clicked!';
    
    // Add the link here to open a specific URL
    window.location.href = 'https://crewtlc.github.io/bacheck/'; // replace with your desired link
    // or use window.open('https://www.example.com', '_blank'); to open in a new tab
  }
});

