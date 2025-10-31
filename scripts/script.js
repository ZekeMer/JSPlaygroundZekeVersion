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
    // Your code here
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