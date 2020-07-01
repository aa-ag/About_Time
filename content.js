// Gloabl variable

let words = run(document.querySelectorAll('p'))

// Helper function

function run(text) {
    let count = 0
	for (let i = 0; i < text.length; i++) {
        count += text[i].textContent.split(' ').length
        }
        return count
}

let result = `${Math.ceil(words / 200)}m`

chrome.runtime.sendMessage({res: `${result}`});