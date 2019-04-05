'use strict';

let openSettings = document.getElementById('openSettings');
let enabledCB = document.getElementById('enabledCB');

// Get checkbox state on popup load
chrome.storage.local.get('enabled', function(data) {
  enabledCB.checked = data.enabled;
}); 

// Update synced storage when checkbox is toggled
enabledCB.onchange = function(e) {
  chrome.storage.local.set({enabled: e.target.checked});
};

// Open the extension's settings page with anchor tag
openSettings.onclick = function() {
  chrome.runtime.openOptionsPage();
};