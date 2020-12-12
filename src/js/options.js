'use strict';

let userInput = document.getElementById('user');
let passwordInput = document.getElementById('pw');
let saveInput = document.getElementById('save');
let outSpan = document.getElementById('out');
let enableExtension = document.getElementById('enableExtension');

// Load credentials into form
chrome.storage.sync.get(['user', 'password'], ({ user, password }) => {
  userInput.value = deobfuscate(user);
  passwordInput.value = deobfuscate(password);
});

// Fast promt to enable auto login directly from options page
enableExtension.onclick = (e) => {
  if (confirm('Enable Tiss Auto Login?')) {
    chrome.storage.sync.set({
      enabled: true,
    });
  }
}

// Save credentials
saveInput.onclick = (e) => {
  chrome.storage.sync.set({
    user: obfuscate(userInput.value),
    password: obfuscate(passwordInput.value),
  }, function() {
    outSpan.innerText = 'Saved.';
  })
};

// Obfuscate just a tiny bit just so we don't store cleartext credentials
const obfuscate = (input) => {
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
const deobfuscate = (input) => {
  let i = Math.floor((input.length-1) / 1.23);
  if (input.length % 2 == 1) {
    return atob(input.slice(0, i) + input.slice(i+1));
  } else {
    return atob(input.slice(0, input.length - i) + input.slice(input.length - i +1));
  }
}
