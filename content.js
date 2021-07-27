const isValidIsbn = (textInput) => {
  let sum
  let weight
  let digit
  let check

  if (textInput.length !== 10 && textInput.length !== 13) return false

  if (textInput.length === 13) {
    sum = 0
    for (let i = 0; i < 12; i++) {
      digit = parseInt(textInput[i])
      if (i % 2 === 1) {
        sum += 3 * digit
      } else {
        sum += digit
      }
    }
    check = (10 - (sum % 10)) % 10
    return (check.toString() === textInput[12])
  }

  if (textInput.length === 10) {
    weight = 10
    sum = 0
    for (let i = 0; i < 9; i++) {
      digit = parseInt(textInput[i])
      sum += weight * digit
      weight--
    }
    check = (11 - (sum % 11)) % 11
    if (check === 10) {
      check = 'X'
    }
    return (check.toString() === textInput[9].toUpperCase())
  }
}

let isbnRe = /(ISBN[-]*(1[03])*[ ]*(: ){0,1})*(([0-9Xx][- ]*){13}|([0-9Xx][- ]*){10})/g

let matches = [...new Set(document.body.innerText.match(isbnRe).map(m => m.replaceAll('ISBN', '').replace(/[^0-9X]/gi, '')))].filter(i => isValidIsbn(i))

isbns = matches.filter(i => matches.indexOf(`978${i}`) === -1)

isbns.forEach(isbn => {  
  chrome.runtime.sendMessage({ message: "found_isbn", "isbn": isbn })
})
