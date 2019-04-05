'use strict';

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set( {user: "", password: ""}, function() {
    console.log('Initialized synced config.')}
  );

  chrome.storage.local.set({enabled: false}, function() {
    console.log('Initialized local config.');
  });
});