'use strict';

let openSettings = document.getElementById('openSettings');
let enabledCB = document.getElementById('enabledCB');

// Get checkbox state on popup load
chrome.storage.sync.get('enabled', function({ enabled }) {
  enabledCB.checked = enabled;
});

// Update synced storage when checkbox is toggled
enabledCB.onchange = (e) => {
  chrome.storage.sync.set({enabled: e.target.checked});
};

// Open the extension's settings page with anchor tag
openSettings.onclick = () => {
  chrome.runtime.openOptionsPage();
};
