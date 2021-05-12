// Initialize deferredPrompt for use later to show browser install prompt.
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent the mini-infobar from appearing on mobile
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI notify the user they can install the PWA
  setTimeout(function(){ 
    showInstallPromotion();
  }, 4000);
  // setTimeout(function(){ 
  //   hideInstallPromotion();
  // }, 11000);
  // Optionally, send analytics event that PWA install promo was shown.
  console.log(`'beforeinstallprompt' event was fired. Now it's your turn!`);
});

installBtn.addEventListener('click', async () => {
    // Hide the app provided install promotion
    hideInstallPromotion();
    // Show the install prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;
    // Optionally, send analytics event with outcome of user choice
    console.log(`User response to the install prompt: ${outcome}`);
    // We've used the prompt, and can't use it again, throw it away
    deferredPrompt = null;
});

closeBtn.addEventListener('click', async () => {
        // Hide the app provided install promotion
        hideInstallPromotion();
        console.log(`It's not fair, we thought you loved our app`);
});

window.addEventListener('appinstalled', () => {
    // Hide the app-provided install promotion
    hideInstallPromotion();
    // Clear the deferredPrompt so it can be garbage collected
    deferredPrompt = null;
    // Optionally, send analytics event to indicate successful install
    console.log('Yay! thanks for installing our app. We love you!');
});

function showInstallPromotion(){
    var snackbar = document.getElementById("snackbar");
    snackbar.style.transform="translateX(0%)";
}
  
function hideInstallPromotion(){
    var snackbar = document.getElementById("snackbar");
    snackbar.style.transform="translateX(120%)";
    setTimeout(function(){ 
        snackbar.style.display="none";
      }, 1000);
}