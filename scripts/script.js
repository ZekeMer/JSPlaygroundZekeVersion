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
//Get 1st
    const textInput = document.getElementById("firstField");
    let textValue = textInput.value;

    let firstResult = document.getElementById("firstResult"); //this references the html id 'firstResult'

    //innerHTML sets the value of 'firstResult' to 'textValue'
    firstResult.innerHTML = textValue;

//Get 2nd
    const colorInput = document.getElementById("secondField");
    let colorValue = colorInput.value;

    let secondResult = document.getElementById("secondResult");

    secondResult.innerHTML = colorValue;

//Get 3rd
    const checkInput = document.getElementById("thirdField");
    let checkValue = checkInput.checked;

    let thirdResult = document.getElementById("thirdResult");

    if (checkValue === false) { checkValue = "false / unchecked"; }
    else if (checkValue === true) { checkValue = "true / checked"; }

    thirdResult.innerHTML = checkValue;

}

function countTheStuff(){
//Count P
    //.getElementsByTagName counts the amount of elemts of a specified type --> HTML collection
    const amtOfP = document.getElementsByTagName("P");
    let elementP = amtOfP.length;

    let countOfP = document.getElementById("countOfP");

    countOfP.innerHTML = elementP;

//Count H2
    const amtOfH2 = document.getElementsByTagName("H2");
    let elementH2 = amtOfH2.length;

    let countOfH2 = document.getElementById("countOfH2");

    countOfH2.innerHTML = elementH2;

//Count TD
    const amtOfTD = document.getElementsByTagName("TD");
    let elementTD = amtOfTD.length;
    //return 9 valiues
    let countOfTD = document.getElementById("countOfTD");

    countOfTD.innerHTML = elementTD;
    
}

function addNewRow(){
    // Your code here
}

function yourBonusChallenge(){
    // Your code here
}