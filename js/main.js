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

/* 

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