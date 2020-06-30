
let words = run(document.querySelectorAll('p'))

function run(words) {
    let count = 0
	for (let i = 0; i < words.length; i++) {
        count += words[i].textContent.split(' ').length
        }
        return count
}

let result = `${Math.ceil(words / 200)}m`

chrome.runtime.sendMessage({res: `${result}`});