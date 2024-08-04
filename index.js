//DICE ROLLAR FUNCTION


const rollDice = () => {
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");

    const values = [];
    const images = [];

    for (let index = 0; index < numOfDice; index++) {
        const value = Math.floor(Math.random() * 6) + 1;
        // console.log(value);
        values.push(value);
        images.push(`<img src="dice_images/${value}.jpg" alt="${value}">`);
    }
    diceResult.textContent = `dice: ${values.join(', ')}`;
    diceImages.innerHTML = images.join(' ')
    // diceResult
    // console.log(values);
    
}

// rollDice(3);