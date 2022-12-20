let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

//initialize count to ZERO
let count = 0

function increment () {
  count +=1
  countEl.textContent = count
}

function save() {
  let store = count + " - "
  saveEl.textContent = saveEl.textContent + store

  //  or   saveEl.textContent += store


  // reset the countEl content to ZERO and initialize count to ZERO
  countEl.textContent = 0
  count = 0
}