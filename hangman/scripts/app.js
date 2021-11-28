let h1
let puzzleEL = document.querySelector("#puzzle")
let guessesEL = document.querySelector("#guesses")

window.addEventListener('keypress', (e) => {
    let letterGuessed = e.key
    h1.guessLetter(letterGuessed)
    render()
})

const render = () => {
    puzzleEL.textContent = h1.puzzle
    guessesEL.textContent = h1.statusMessage
}
const startGame = async () => {
    const puzzl = await getPuzzle('2')
    h1 = new Hangman(puzzl, 5)
    render()
}

document.querySelector("#reset").addEventListener('click', startGame)
startGame()

// getPuzzle('5').then((data) => console.log(data), (err) => console.log(err))

// getCountry("MX").then((data) => console.log(data)).catch((err) => console.log(err))

// getGeoLocation().then((data) => getCountry(data.country).then((data2) => console.log(data2))).catch((err) => console.log(err))