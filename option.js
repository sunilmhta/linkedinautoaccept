// options.js

document.addEventListener('DOMContentLoaded', function() {
    const delayInput = document.getElementById('delayInput');
    const saveButton = document.getElementById('saveButton');``
  
    // Load the delay value from storage and set it in the input field
    chrome.storage.sync.get(['delay'], function(result) {
      delayInput.value = result.delay || 100; // Default value is 100 milliseconds
    });
  
    // Save the delay value to storage when the save button is clicked
    saveButton.addEventListener('click', function() {
      const delay = parseInt(delayInput.value);
      chrome.storage.sync.set({ delay: delay });
      alert('Delay saved successfully!');
    });
  });
  