let words = run(document.querySelectorAll('p'))

function run(words) {
    let count = 0
	for (let i = 0; i < words.length; i++) {
        count += words[i].textContent.split(' ').length
	}
	return count
}

console.log(`Approx reading time: ${Math.ceil(words / 200)} minutes`)

// ### TEST ###

// let words = run(document.querySelectorAll('p'))

// function run(words) {
//     let count = []
// 	for (let i = 0; i < words.length; i++) {
//         count.push(words[i].textContent)
// 	}
// 	return count
// }

// console.log(words)





// bewlow does not grabbing first paragraph from Reddit's wikipedia & code from Google.com

// run(document.body)

// function run(element){
//     if (element.hasChildNodes()) {
//         element.childNodes.forEach(run)
//     } else if (element.nodeType === Text.TEXT_NODE) {
//         if (element.textContent.match(/^[a-zA-Z]/)) {
//             section = element.textContent.split(" ")
//             console.log(section)
//         } 
//     } 
// } 



// run(document.body)

// function run(element){
//     if (element.hasChildNodes()) {
//         element.childNodes.forEach(run)
//     } else if (element.nodeType === Text.TEXT_NODE) {
//         if (element.textContent.match(/^[a-zA-Z]/)) {
//             section = element.textContent.split(" ")
//             console.log(section.length)
//         }
//     }
// } 


// ### test to see length of each section

        // element.textContent = element.textContent.length
        // console.log(element.textContent) 

// ### IF P GRABBED, LENGHT IS NUMB OF P'S

// run(document.body)

// function run(){
//     let readble = document.getElementsByTagName('p')
//     console.log(readble.length)
// }


// THIS WORKS PERFECT, FOR STATIC/MANUAL SITE



// function run() {
//     let input = document.getElementById("text").value.trim().replace(/\s+/g," ");
//     total = input.split(" ").length;
//     document.getElementById("count").innerHTML = `${total} words.`;

//     let minutes = total / 150;
//     if (minutes < 1) {
//         document.getElementById("time").innerHTML = `Approx. reading time: less 1 a minute!`;
//     } else {
//         document.getElementById("time").innerHTML = `Approx. reading time: ${Math.ceil(minutes)} minutes.`;
//     }
// }



// .replace(/(\r\n|\n|\r)/gm," ") includes every possibility as depends on encoding (mac, linux, windows)


// ~ Long version: for loop:

// function run() {
//     let text = document.getElementById("input").value.trim();
//     let total = 0;
//     for (let i = 0; i < text.length; i++){
//         let currentCharacter = text[i];
//         if (currentCharacter == " "){
//             total += 1;
//         }
//     };
//     total += 1
//     document.getElementById("output").innerHTML = `${total} words`
// }


// replaceText(document.body)

// function replaceText(element) {
//     if (element.hasChildNodes()) {
//         element.childNodes.forEach(replaceText)
//     } else if (element.nodeType === Text.TEXT_NODE) {
//       element.textContent = element.textContent.replace(/reddit/gi, '------')
//     }
// } 
