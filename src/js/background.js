'use strict';

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.local.set({user: "", password: "", enabled: false}, function() {
    console.log('Initialized local config.');
  });
});