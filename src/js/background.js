'use strict';

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({user: "", password: "", enabled: false}, () => {
    console.log('TISS Auto Login: Initialized sync config.');
  });
});
