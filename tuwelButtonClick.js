'use strict';

// Click login button in TUWEL if enabled checkbox is checked
chrome.storage.local.get('enabled', function (data) {
  if (data.enabled) {
    [...document.getElementsByTagName('a')].forEach((e) => {
      if (e.href == 'https://iu.zid.tuwien.ac.at/AuthServ.authenticate?app=36') e.click();
    });
  }
});