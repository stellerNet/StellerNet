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



(function(f,b){if(!b.__SV){var e,g,i,h;window.mixpanel=b;b._i=[];b.init=function(e,f,c){function g(a,d){var b=d.split(".");2==b.length&&(a=a[b[0]],d=b[1]);a[d]=function(){a.push([d].concat(Array.prototype.slice.call(arguments,0)))}}var a=b;"undefined"!==typeof c?a=b[c]=[]:c="mixpanel";a.people=a.people||[];a.toString=function(a){var d="mixpanel";"mixpanel"!==c&&(d+="."+c);a||(d+=" (stub)");return d};a.people.toString=function(){return a.toString(1)+".people (stub)"};i="disable time_event track track_pageview track_links track_forms track_with_groups add_group set_group remove_group register register_once alias unregister identify name_tag set_config reset opt_in_tracking opt_out_tracking has_opted_in_tracking has_opted_out_tracking clear_opt_in_out_tracking start_batch_senders people.set people.set_once people.unset people.increment people.append people.union people.track_charge people.clear_charges people.delete_user people.remove".split(" ");
for(h=0;h<i.length;h++)g(a,i[h]);var j="set set_once union unset remove delete".split(" ");a.get_group=function(){function b(c){d[c]=function(){call2_args=arguments;call2=[c].concat(Array.prototype.slice.call(call2_args,0));a.push([e,call2])}}for(var d={},e=["get_group"].concat(Array.prototype.slice.call(arguments,0)),c=0;c<j.length;c++)b(j[c]);return d};b._i.push([e,f,c])};b.__SV=1.2;e=f.createElement("script");e.type="text/javascript";e.async=!0;e.src="undefined"!==typeof MIXPANEL_CUSTOM_LIB_URL?
MIXPANEL_CUSTOM_LIB_URL:"file:"===f.location.protocol&&"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js".match(/^\/\//)?"https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js":"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";g=f.getElementsByTagName("script")[0];g.parentNode.insertBefore(e,g)}})(document,window.mixpanel||[]);
