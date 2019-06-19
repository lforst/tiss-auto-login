'use strict';

let user = document.getElementById('user');
let pw = document.getElementById('pw');
let save = document.getElementById('save');
let out = document.getElementById('out');
let enableExtension = document.getElementById('enableExtension');

let creds;

// Load credentials into form
chrome.storage.sync.get(['user', 'password'], function(result) {
  user.value = deobfuscate(result.user);
  pw.value = deobfuscate(result.password);
});

// Fast promt to enable auto login directly from options page
enableExtension.onclick = function(e) {
  if (confirm('Enable Tiss Auto Login?')) {
    chrome.storage.sync.set({
      enabled: true,
    });
  }
}

// Save credentials
save.onclick = function(e) {
  chrome.storage.sync.set({
    user: obfuscate(user.value),
    password: obfuscate(pw.value),
  }, function() {
    out.innerText = 'Saved.';
  })
};

// Obfuscate just a tiny bit just so we don't store cleartext credentials
const obfuscate = function(input) {
  let base = btoa(input);
  let char = String.fromCharCode(Math.floor(Math.random()*25 + 65));
  let i = Math.floor(base.length / 1.23);

  if (base.length % 2 == 0) {
    return base.slice(0, i) + char + base.slice(i);
  } else {
    return base.slice(0, base.length - i) + char + base.slice(base.length - i);
  }
}

// Deobfuscate
const deobfuscate = function(input) {
  let i = Math.floor((input.length-1) / 1.23);
  if (input.length % 2 == 1) {
    return atob(input.slice(0, i) + input.slice(i+1));
  } else {
    return atob(input.slice(0, input.length - i) + input.slice(input.length - i +1));
  }
}