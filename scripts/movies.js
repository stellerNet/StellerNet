let answer = confirm("Would you like to view the movie in full screen?");
const baseurl = "https://steller-production.up.railway.app";
const fullurl = baseurl + game;
const queryString = window.location.search;
document.body.style.overflow = "hidden";
const urlParams = new URLSearchParams(queryString);
const game = urlParams.get('iframe')
function showLoading() {
    document.getElementById('loading').style.display = 'block';
}
function hideLoading() {
    document.getElementById('loading').style.display = 'none';
}

if (answer == true) {
  window.open(fullurl, "_blank");
} else {
  if(game != null) {
    document.getElementById("frame").innerHTML = `
        <div id="loading"></div>
        <iframe id="ifr" onload="hideLoading();"></iframe>
    `;
    showLoading();
    document.body.style.overflow = "hidden";
    document.getElementById("frame").style.height = "100vh";
    document.getElementById("frame").style.width = "100%";
    document.getElementById("frame").style.justifyContent = "center";
    document.getElementById("frame").style.alignItems = "center";
    document.getElementById("frame").style.overflow = "hidden";
    alert("Some Shows/Movies Take Longer To Load Than Others");
    document.getElementById("ifr").src = fullurl;
}
}
