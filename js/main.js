function run() {
    let input = document.getElementById("text").value.trim();
    total = input.split(" ").length;
    document.getElementById("count").innerHTML = `${total} words.`;

    let minutes = total / 150;
    if (minutes < 1) {
        document.getElementById("time").innerHTML = `Reading time: less than a minute!`;
    } else {
        document.getElementById("time").innerHTML = `Reading time: ${Math.ceil(minutes)} minutes.`;
    }
}

/* 

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

- spaces in between words 
- spaces inside words
- special characters
- Paragraphs

*/