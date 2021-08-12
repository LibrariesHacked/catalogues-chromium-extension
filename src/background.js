/* global chrome */

/**
 * Receive a message 
 */
const receiveISBN = (isbn) => {
  chrome.storage.sync.get(["isbns"], function (result) {
    var isbns = result["isbns"] ? result["isbns"] : []
    isbns.push(isbn)
    chrome.storage.sync.set({ isbns: isbns }, function () {
      console.log("Saved a new isbn")
    })
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