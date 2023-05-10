function getCookie(cname) {
    return localStorage.getItem(cname);;
}

if (getCookie("Dis") == "On") {
    // Change page title
    document.title = "Classes";

    // Change page icon
    var link = document.querySelector("link[rel~='icon']");
    if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.getElementsByTagName('head')[0].appendChild(link);
    }
    link.href = '../assets/icon.png';

    // Detect when mouse leaves page
}

// Get a reference to the iframe element and Google Classroom URL
const iframe = document.createElement('iframe');
iframe.style.zIndex = "3";
iframe.style.position = "relative";
iframe.src = '../pages/fake.html';

// Create an overlay div to cover the iframe
const overlay = document.createElement('div');
overlay.className = 'overyay';
overlay.style.zIndex = "4";

// Set up a flag to keep track of whether the iframe is currently displayed
let iframeVisible = true;
let oldHTML = document.body.innerHTML;

function update() {
  if (iframeVisible) {
    oldHTML = document.body.innerHTML;
  }
}
setInterval(update, 2000);

// Add an event listener to the document to detect when the backtick key is pressed
window.addEventListener('keydown', function(event) {
  if (event.key === '`') {
    if (getCookie("Dis") == "On") {
      if (iframeVisible) {
        // Create the wrapper div to hold the iframe and overlay
        // Replace the page content with the wrapper
        document.body.innerHTML = '<img src="../assets/classes.webp" alt="" style="width: 100%; height: 100%;">';
        iframeVisible = false;
      }
      // Otherwise, return to the previous HTML content
      else {
        document.body.innerHTML = oldHTML;
        iframeVisible = true;
      }
    } else {
      alert("Enable Disguise In Settings, This Can Only Be Used On The Home Page.");
    }
  }
});

alert("Pretty Nice Site Right Even");




