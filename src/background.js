/* global chrome */

/**
 * Receive a message 
 */
const receiveISBN = (isbn) => {
  chrome.storage.sync.get(["titleAvailability"], function (result) {
    var titleAvailability = result["titleAvailability"] ? result["titleAvailability"] : {}
    if (availabilityRequest && availabilityRequest.length > 0) {
      titleAvailability[isbn] = availabilityRequest.map(r => r.availability)
      chrome.storage.sync.set({ currentAvailability: titleAvailability }, function () {
        console.log("Saved a new availability item")
      })
    }
  })
}


/**
 * Handlers
 */
chrome.runtime.onMessage.addListener(
  async (request, sender, sendResponse) => {
    if (request.message === 'found_isbn') receiveISBN(request.isbn)
  }
)