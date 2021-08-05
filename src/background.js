/* global chrome */

try {
  global.process = {
    env: {
        NODE_ENV: 'development'
    }
  }
  const libraries = require('catalogues-library')

  chrome.runtime.onMessage.addListener(
    async (request, sender, sendResponse) => {
      if (request.message === 'found_isbn') {
        var availability = await libraries.availability(request.isbn)

        chrome.storage.sync.get(["currentAvailability"], function (result) {
          var array = result["currentAvailability"] ? result["currentAvailability"] : [];
          array.push(availability)
          jsonObj["currentAvailability"] = array;
          chrome.storage.sync.set(jsonObj, function () {
            console.log("Saved a new array item");
          })
        })
      }
    }
  )

} catch(e) {
  console.log(e)
}