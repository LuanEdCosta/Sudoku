import gameDificulty from "@/config/GameDificulty"

export default {
    getQuantityOfGeneratedNumbers(dificulty) {
        switch (dificulty) {
        case gameDificulty.EASY: return 40
        case gameDificulty.MEDIUM: return 30
        case gameDificulty.HARD: return 20
        case gameDificulty.VERY_HARD: return 10
        default: return 0
        }
    },
    getSudokuMatrixFilledWithZeros() {
        const sudokuMatrix = []
        for (let i = 0; i < 9; i++) {
            const lineArray = []
            for (let j = 0; j < 9; j++) { 
                lineArray.push({ 
                    value: 0,
                    editable: true,
                    line: i,
                    column: j
                }) 
            }
            sudokuMatrix.push(lineArray)
        }
        return sudokuMatrix
    },
    generateRandomNumbers(dificulty) {
        const sudokuMatrix = this.getSudokuMatrixFilledWithZeros()
        const quantityOfGeneratedNumbers = this.getQuantityOfGeneratedNumbers(dificulty)
        let generatedNumbersCounter = 0

        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (generatedNumbersCounter < quantityOfGeneratedNumbers) {
                    const line = this.getRandomInteger(0, 9)
                    const column = this.getRandomInteger(0, 9)
                    const currentCell = sudokuMatrix[line][column] 
                    const generatedNumber = this.getGeneratedNumber(currentCell, sudokuMatrix)
                    currentCell.value = generatedNumber
                    currentCell.editable = false
                    generatedNumbersCounter++
                }
            }
        }

        return sudokuMatrix
    },
    getGeneratedNumber(currentCell, sudokuMatrix)  {
        let generatedNumber = this.getRandomInteger()
        while (!this.isGeneratedNumberValid(generatedNumber, currentCell, sudokuMatrix)) {
            generatedNumber = this.getRandomInteger()
        }
        return generatedNumber
    },
    getRandomInteger(min = 0, max = 10) {
        return Math.floor(Math.random() * (max - min)) + min
    },
    isGeneratedNumberValid(generatedNumber, cell, sudokuMatrix) {
        // Checking entire line
        for (let column = 0; column < 9; column++) {
            if (sudokuMatrix[cell.line][column].value === generatedNumber) {
                return false
            }
        }

        // Checking entire column
        for (let line = 0; line < 9; line++) {
            if (sudokuMatrix[line][cell.column].value === generatedNumber) {
                return false
            }
        }

        return true
    },
}
