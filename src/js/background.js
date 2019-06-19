'use strict';

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({user: "", password: "", enabled: false}, function() {
    console.log('Initialized sync config.');
  });
});