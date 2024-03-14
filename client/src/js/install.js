const butInstall = document.getElementById('buttonInstall');

window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  window.deferredPrompt = event;
  butInstall.style.display = 'block';
});

butInstall.addEventListener('click', async () => {
  const promptEvent = window.deferredPrompt;
  if (!promptEvent) return;
  promptEvent.prompt();
  const result = await promptEvent.userChoice;
  console.log('User response to the install prompt', result);
  window.deferredPrompt = null;
  butInstall.style.display = 'none';
});

window.addEventListener('appinstalled', (event) => {
  window.deferredPrompt = null;
  console.log('PWA was installed', event);
});
