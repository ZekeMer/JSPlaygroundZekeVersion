console.log("Script loaded!");


function moveTheThing(){
    const cake = document.getElementById("theThing");
    const leftBox = document.getElementById("leftBlock");
    const rightBox = document.getElementById("rightBlock");

    // destinationDiv.appendChild(thingToMove) moves the div location of thingToMove to the destinationDiv

    if(leftBox.contains(cake))
    {
        console.log("In the Left!");
        rightBox.appendChild(cake);
    }

    else if(rightBox.contains(cake))
    {
        console.log("In the Right!");
        leftBox.appendChild(cake);
    }
}

function styleTheText(){
    const text = document.getElementById("fancyText");

//New Color
    //Generates a random color hexcode. Code by user "bryc" on stackoverflow.com
    const newColor = ('00000'+(Math.random()*(1<<24)|0).toString(16)).slice(-6);

    console.log(newColor);

    //Ocothorpe denotes that 'newColor' variable is a color value
    text.style.color = '#' + newColor;

//New Font
    const newFont = ['Times New Roman', 'Comic Sans MS', 'Courier New', 'Lucida Handwriting', 'Brush Script MT', 'Papyrus'];

    //newFont.length says that 'newFont' has two values inside it. The Math.random() doesn't ever get last index value.
    //Example: -- Math.floor(Math.random() * 10); -- Will only ever return values 0-9 (if 9.99 is generated, Math.floor pulls it down to 9)
    const indexNum = Math.floor(Math.random() * newFont.length);

    console.log(newFont[indexNum]);

    if (indexNum === 5)
    {
        console.log("PAPYRUS!!!! NOOO!!!!");
    }
    
    text.style.fontFamily = newFont[indexNum];

//New Size
    const newSize = Math.floor(Math.random() * 101);

    console.log("The new font size is: " + newSize);

    //Size will not show without added 'px'
    text.style.fontSize = newSize + 'px';

}

function getFormValues(){
    // Your code here
}

function countTheStuff(){
    // Your code here
}

function addNewRow(){
    // Your code here
}

function yourBonusChallenge(){
    // Your code here
}