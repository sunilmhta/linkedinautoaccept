// Define the delay between each click in milliseconds
const delayBetweenClicks = 100;

// Function to simulate a click on the "Accept" button
async function clickAcceptButton(button) {
    button.click();
    await new Promise(resolve => setTimeout(resolve, delayBetweenClicks));
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

// Run the auto accept function when the extension icon is clicked
chrome.browserAction.onClicked.addListener(() => {
    autoAcceptConnections();
});
