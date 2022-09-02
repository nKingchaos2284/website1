
function capitalize(word) {
    let fl = word.charAt(0).toUpperCase()
   let favColorst = fl + word.slice(1);
   return favColorst
}
let favColor
while(favColor) {
    favColor = prompt("Don't have one? Are you color blind? You gotta like something?");
}


function askColor() {
    favColor = prompt("What is you favorite color?").toLowerCase();
    let low=capitalize(favColor)
    if (favColor == "pink") {

        document.write(low + "? really? really? really? I guessssss");
    } else if (favColor == "blue" || favColor == "red" || favColor == "black") {
    
        document.write(low + "? I love those too!");
    } else if (favColor == "silver" || favColor == "orange" || favColor == "purple" || favColor == "white" || favColor == "gold") {
    
        document.write(favColor + "? VERY NICE!");
    } else {

        alert(favColor + "? That one's not on the list, might've forgot to add that to the database. Try another!");
        askColor();
    }
}

askColor();

function colorRec() {
    let userNumber = prompt("Pick a number between 1-10");
    if (userNumber > 5) {
        userNumber = 0;

    }
    for (let i = 1; i <= userNumber; i++) {
        document.write("< img src = 'BW.png' style = 'height:400px; width:400px' >")
    
   }

    return userNumber;
}

colorRec();
