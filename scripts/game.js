const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const game = urlParams.get('iframe')
console.log(game);
function showLoading() {
    document.getElementById('loading').style.display = 'block';
}

function hideLoading() {
    document.getElementById('loading').style.display = 'none';
}

if(game != null) {
    document.getElementById("iframe").innerHTML = `
        <div id="loading"></div>
        <iframe id="ifr" onload="hideLoading();"></iframe>
    `;
    showLoading();
    document.body.style.overflow = "hidden";
    document.getElementById("iframe").style.height = "100vh";
    document.getElementById("iframe").style.width = "100%";
    document.getElementById("iframe").style.justifyContent = "center";
    document.getElementById("iframe").style.alignItems = "center";
    document.getElementById("iframe").style.overflow = "hidden";
    alert("Some Games Take Longer To Load Than Others");
    document.getElementById("ifr").src = game;
}