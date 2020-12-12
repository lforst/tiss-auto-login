'use strict';

// Check if enabled
chrome.storage.sync.get('enabled', ({ enabled }) => {
  if (enabled) login();
});

// Deobfuscate stored credentials
const deobfuscate = (input) => {
  let i = Math.floor((input.length - 1) / 1.23);
  if (input.length % 2 == 1) {
    return atob(input.slice(0, i) + input.slice(i + 1));
  } else {
    return atob(input.slice(0, input.length - i) + input.slice(input.length - i + 1));
  }
}

// Fill form and click login button
const login = () => {
  chrome.storage.sync.get(['user', 'password'], function ({ user, password }) {
    document.querySelector("input#username[name='username']").value = deobfuscate(user);
    document.querySelector("input#password[name='password']").value = deobfuscate(password);
    document.querySelector("button#samlloginbutton[type='submit']").click();
  });
}
