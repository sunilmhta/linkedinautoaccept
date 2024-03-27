// const acceptButtons = document.querySelectorAll('.invitation-card__action-btn');

// acceptButtons.forEach(button => {
//   button.click();
// });


// Function to simulate a click on the "Accept" button
async function clickAcceptButton(button) {
    button.click();
    const delay = await getDelay();
    await new Promise(resolve => setTimeout(resolve, delay));
  }
  
  // Function to retrieve the delay value from storage
  function getDelay() {
    return new Promise(resolve => {
      chrome.storage.sync.get(['delay'], function(result) {
        resolve(result.delay || 100); // Default value is 100 milliseconds
      });
    });
  }
  
  // Function to automatically accept connection requests
  async function autoAcceptConnections() {
    // Find all "Accept" buttons on the LinkedIn page
    const acceptButtons = document.querySelectorAll('button[aria-label^="Accept"]');
  
    // Click each "Accept" button with a delay
    for (const button of acceptButtons) {
      await clickAcceptButton(button);
    }
  }
  
  autoAcceptConnections();