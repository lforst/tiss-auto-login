'use strict';

// Click login button in TUWEL if enabled checkbox is checked
chrome.storage.sync.get('enabled', function ({ enabled }) {
  if (enabled) {
    document.querySelector("a[title='TU Wien Login']").click();
  }
});
