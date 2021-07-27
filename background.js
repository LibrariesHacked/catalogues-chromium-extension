chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.message === "found_isbn") {
      console.log(request.isbn)
    }
  }
)