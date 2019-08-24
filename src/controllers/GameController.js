import gameDifficulties from "@/config/GameDifficulties"

export default {
    getQuantityOfGeneratedNumbers(difficulty) {
        switch (difficulty) {
        case gameDifficulties.EASY: return 40
        case gameDifficulties.MEDIUM: return 30
        case gameDifficulties.HARD: return 20
        case gameDifficulties.VERY_HARD: return 10
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
    startGame(difficulty) {
        const sudokuMatrix = this.getSudokuMatrixFilledWithZeros()
        const quantityOfGeneratedNumbers = this.getQuantityOfGeneratedNumbers(difficulty)
        let generatedNumbersCounter = 0
        
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (generatedNumbersCounter < quantityOfGeneratedNumbers) {
                    const line = this.getRandomInteger(0, 9)
                    const column = this.getRandomInteger(0, 9)
                    const currentCell = sudokuMatrix[line][column] 
                    const generatedNumber = this.generateNumber(currentCell, sudokuMatrix)
                    currentCell.value = generatedNumber
                    currentCell.editable = false
                    generatedNumbersCounter++
                }
            }
        }
        return sudokuMatrix
    },
    generateNumber(currentCell, sudokuMatrix)  {
        let generatedNumber = 0
        do{
            generatedNumber = this.getRandomInteger()
        }while (
            !this.isNumberValidInMatrix(
                generatedNumber, 
                currentCell, 
                sudokuMatrix
            )
        )
        return generatedNumber
    },
    getRandomInteger(min = 0, max = 10) {
        return Math.floor(Math.random() * (max - min)) + min
    },
    isNumberValidInMatrix(number, cell, sudokuMatrix) {
        // Sudoku doesn't have zeros
        if(number === 0){ return false }

        // Checking entire line
        for (let i = 0; i < 9; i++) {
            if (sudokuMatrix[cell.line][i].value === number) {
                return false
            }
        }

        // Checking entire column
        for (let i = 0; i < 9; i++) {
            if (sudokuMatrix[i][cell.column].value === number) {
                return false
            }
        }

        // Checking the entire region 3x3
        const regionCellsMatrix = this.getRegionCellsMatrix()
        const { regionLine, regionColumn } = this.getRegionPosition(cell)
        const allRegionCells = regionCellsMatrix[regionLine][regionColumn]
        for (let i = 0; i < allRegionCells.length; i++) {
            const regionCell = allRegionCells[i]
            if(number === sudokuMatrix[regionCell.line][regionCell.column].value){
                return false
            }
        }       
 
        return true
    },
    getRegionIndexMatrix(){
        return [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8]
        ]
    },
    getRegionCellsMatrix(){
        // This function creates a matrix of regions and each region has 9 cells
        // It's a tridimensional matrix
        // i = number of region lines
        // j = number of regions per line
        // k = number of cells in each region 

        const regionLineArray = []
        for (let i = 0; i < 3; i++) {
            const regionsOfEachLine = []
            for (let j = 0; j < 3; j++) {
                
                const regionCells = []
                let column = 0 + (j * 3)
                let line = 0 + (i * 3)

                for (let k = 1; k <= 9; k++) {
                    // Add a cell in region. A region has 9 cells
                    regionCells.push({ line, column})

                    if(k % 3 === 0){ column = 0 + (j * 3) }
                    else{ column++ }

                    if(k % 3 === 0){ line++ }
                }
                // Add region in an array of regions (will be a column in the matrix)
                regionsOfEachLine.push(regionCells) 
            }
            //Add an array of regions in another array that is the entire matrix
            regionLineArray.push(regionsOfEachLine)
        }
        return regionLineArray
    },
    getRegionPosition(cell){
        const regionIdsMatrix = this.getRegionIndexMatrix()
        let regionLine = 0
        let regionColumn = 0
        for (let i = 0; i < regionIdsMatrix.length; i++) {
            if(regionIdsMatrix[i].includes(cell.line)){ 
                regionLine = i
            }

            if(regionIdsMatrix[i].includes(cell.column)){ 
                regionColumn = i
            }
        }
        return { regionLine, regionColumn }
    },
    validateSudokuMatrix(sudokuMatrix){
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                const currentCell = sudokuMatrix[i][j]
                if(!this.isNumberValidInMatrix(
                    currentCell.value,
                    currentCell,
                    sudokuMatrix
                )){
                    return false
                }
            }
        }
        return true
    }
}
