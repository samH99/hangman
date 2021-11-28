class Hangman {
    constructor(wordToGuess, numberOfGuesses) {
        this.wordToGuess = wordToGuess.toLowerCase().split("")
        this.guessedLetters = []
        this.numberOfGuesses = numberOfGuesses
        this.status = "playing"
    }

    get puzzle() {
        let pzlWord = Array.from(this.wordToGuess)
        pzlWord.forEach((letter, i) => {
            if(!(this.guessedLetters.includes(letter) || letter == " ")){
                pzlWord[i] = "*"
            }
        })

        return pzlWord.join("")
    }

    guessLetter(letterGuessed) {
        if(this.status != "playing") {
            return
        }

        let unique = !this.guessedLetters.includes(letterGuessed)
        let badGuess = !this.wordToGuess.includes(letterGuessed)
        
        if(unique){
            this.guessedLetters.push(letterGuessed)
        }
        if(unique && badGuess){
            this.numberOfGuesses--
        }

        this.statusMessage
        console.log(this.status)
    }

    get statusMessage() {
        if(this.puzzle.includes("*") && this.numberOfGuesses == 0){
            this.status = "failed"
        } else if(!this.puzzle.includes("*")){
            this.status = "finished"
        }

        if(this.status == "playing"){
            return `Guesses Left: ${this.numberOfGuesses}`
        } else if(this.status == "finished"){
            return `YOU DONE IT FOO`
        }
        return `you wack get good. it was "${this.wordToGuess.join("")}" all along!`
    }
}