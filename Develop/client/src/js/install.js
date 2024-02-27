const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA

// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    // Prevent the mini-infobar from appearing on mobile
    event.preventDefault();
    console.log('beforeinstallprompt fired');
    // Update UI to notify the user they can add to home screen
    butInstall.style.visibility = 'visible';
  
    butInstall.addEventListener('click', () => {
      console.log('butInstall clicked');
      event.prompt();
      butInstall.setAttribute('disabled', true);
      butInstall.textContent = 'Installed!';
    });
  });
  
  window.addEventListener('appinstalled', (event) => {
    console.log('PWA was installed', event);
  });