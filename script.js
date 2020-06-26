run(document.body)

function run(element){
    if (element.hasChildNodes()) {
        element.childNodes.forEach(run)
    } else if (element.nodeType === Text.TEXT_NODE) {
        section = element.textContent
        count = section.length
        console.log(count)
    }
} 



// ### IF P GRABBED, LENGHT IS NUMB OF P'S

// run(document.body)

// function run(){
//     let readble = document.getElementsByTagName('p')
//     console.log(readble.length)
// }


// THIS WORKS PERFECT, FOR STATIC/MANUAL SITE

/* 

function run() {
    let input = document.getElementById("text").value.trim().replace(/\s+/g," ");
    total = input.split(" ").length;
    document.getElementById("count").innerHTML = `${total} words.`;

    let minutes = total / 150;
    if (minutes < 1) {
        document.getElementById("time").innerHTML = `Approx. reading time: less 1 a minute!`;
    } else {
        document.getElementById("time").innerHTML = `Approx. reading time: ${Math.ceil(minutes)} minutes.`;
    }
}



// .replace(/(\r\n|\n|\r)/gm," ") includes every possibility as depends on encoding (mac, linux, windows)



~ Long version: for loop:

function run() {
    let text = document.getElementById("input").value.trim();
    let total = 0;
    for (let i = 0; i < text.length; i++){
        let currentCharacter = text[i];
        if (currentCharacter == " "){
            total += 1;
        }
    };
    total += 1
    document.getElementById("output").innerHTML = `${total} words`
}

~ Asumptions: 

- average adult reads 150 words-per-minute
- it's better to round up than down when estimating how long it'll take to read a text

~ Known Bugs:

- leading and trailing white spaces: .trim()
- extra spaces in between words: .replace(/ +/g, ' ')
- line breaks: /(\r\n|\n|\r)/gm, "" // not sure how to incorporate this yet
- spaces inside words
- special characters
- non "readable" text (nav bar, menu items, ads, etc)
- empy run

*/

/* ###### Replace text client-side experiment ###### 

replaceText(document.body)

function replaceText(element) {
    if (element.hasChildNodes()) {
        element.childNodes.forEach(replaceText)
    } else if (element.nodeType === Text.TEXT_NODE) {
      element.textContent = element.textContent.replace(/reddit/gi, '------')
    }
} 



*/ 