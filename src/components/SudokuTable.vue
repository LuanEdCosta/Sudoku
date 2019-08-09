<template>
    <div
        class="sudoku-table-wrapper"
        tabindex="0"
        @keydown.up.w.exact.prevent="upPressed"
        @keydown.down.s.exact.prevent="downPressed"
        @keydown.left.a.exact.prevent="leftPressed"
        @keydown.right.d.exact.prevent="rightPressed"
        @keydown.delete.exact="deletePressed"
        @keydown="onKeyPressed">
        <table class="sudoku-table" >
            <tbody class="sudoku-table-body">
                <tr
                    v-for="(n, i) in 9"
                    :key="'tr' + i"
                    class="sudoku-table-line">
                    <td
                        v-for="(n, j) in 9"
                        :key="'td' + j"
                        class="sudoku-table-cell"
                        :class="[
                            borderClasses(i, j),
                            notEditableClass(sudokuMatrix[i][j].editable),
                            selectedCellClasses(sudokuMatrix[i][j]),
                        ]"
                        @click="cellClick(sudokuMatrix[i][j])">
                        {{ printCellValue(sudokuMatrix[i][j].value) }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import gameController from '@/controllers/GameController'
import gameStates from '@/config/GameStates'

export default {
    name: 'SudokuTable',
    data() {
        return {
            gameState: gameStates.NOT_STARTED,
            selectedCell: null,
            sudokuMatrix: gameController.generateRandomNumbers(0),
        }
    },
    computed: {
        selectedCellReference(){
            if(this.selectedCell){
                return this.sudokuMatrix[this.selectedCell.line][this.selectedCell.column]
            }
            return null
        },
        onlyEditableAndIsEditable(){
            return this.$store.state.config.navigateOnlyInEnabledCells && this.selectedCell && !this.selectedCell.editable
        }
    },
    methods: {
        printCellValue(cellValue) {
            return cellValue === 0 ? '' : `${cellValue}`
        },
        cellClick(cell) { 
            if(this.$store.state.config.navigateOnlyInEnabledCells){
                if(cell.editable){
                    this.selectedCell = this.isCellSelected(cell) ? null : { ...cell }
                }
            }else{
                this.selectedCell = this.isCellSelected(cell) ? null : { ...cell }
            }
        },
        selectedCellClasses(cell) {
            return {
                'cell-selected-editable': this.isCellSelected(cell) && cell.editable,
                'cell-selected-not-editable': this.isCellSelected(cell) && !cell.editable,
            }
        },
        notEditableClass(editable) {
            return {
                'sudoku-table-cell-not-editable': !editable,
            }
        },
        borderClasses(line, column) {
            return {
                'cell-border-right': column === 2 || column === 5,
                'cell-border-bottom': line === 2 || line === 5,
            }
        },
        isCellSelected(cell) {
            return this.selectedCell
                && this.selectedCell.line === cell.line
                && this.selectedCell.column === cell.column
        },
        upPressed() {
            if(this.selectedCell){
                do{ 
                    let { line, column } = this.selectedCell
                    line--
                    line = line === -1 ? 8 : line
                    this.moveSelectedCell(line, column)
                }while(this.onlyEditableAndIsEditable)
            }
        },
        downPressed() {
            if(this.selectedCell){    
                do{ 
                    let { line, column } = this.selectedCell
                    line++
                    line = line === 9 ? 0 : line
                    this.moveSelectedCell(line, column)
                }while(this.onlyEditableAndIsEditable)
            }
        },
        leftPressed() {
            if(this.selectedCell){
                do{ 
                    let { column, line } = this.selectedCell
                    column--
                    column = column === -1 ? 8 : column
                    this.moveSelectedCell(line, column)
                }while(this.onlyEditableAndIsEditable)
            }
        },
        rightPressed() {
            if(this.selectedCell){
                do{
                    let { column, line } = this.selectedCell
                    column++
                    column = column === 9 ? 0 : column
                    this.moveSelectedCell(line, column)
                }while(this.onlyEditableAndIsEditable)
            }
        },
        moveSelectedCell(line, column){
            this.selectedCell = { ...this.sudokuMatrix[line][column] }
        },
        deletePressed() {
            if(this.selectedCellReference){
                this.selectedCellReference.value = 0
            }
        },
        onKeyPressed(event) {
            const keyCode = (event.keyCode ? event.keyCode : event.which)
            if (keyCode >= 96 && keyCode <= 105) {
                this.setValueInCell(Number(event.key))
            }
        },
        setValueInCell(value){
            if(this.selectedCellReference){
                if(this.selectedCellReference.editable){
                    this.selectedCellReference.value = value
                }
            }
        },
        setGameState(gameState){
            this.gameState = gameState
        }
    },
}
</script>

<style lang="scss" scoped>
$cell_border_color_dark: #666666;
$cell_hover_bg_color: black_rgba(.05);

.sudoku-table-wrapper{
    @include border(1px solid $cell_border_color_dark);
    @include outline(none);
    .sudoku-table{
        @include border-collapse(collapse);
        .sudoku-table-body{
            .sudoku-table-line{
                .sudoku-table-cell{
                    @include size(50px);
                    @include m-size(60px, 60px, max);
                    @include cursor;
                    @include font($main_text_color, 28px, normal, center);
                    @include border(1px solid $cell_border_color);
                    &:hover{
                        @include color-bg($main_color, $cell_hover_bg_color);
                    }
                }

                .sudoku-table-cell-not-editable{
                    @include color-bg(rgba($main_text_color, 0.90), $cell_hover_bg_color);
                    &:hover{
                        @include color-bg($main_text_color, $cell_hover_bg_color);
                    }
                }

                .cell-selected-editable{
                    @include color-bg(white !important, $main_color !important);
                }

                .cell-selected-not-editable{
                    @include color-bg($main_color, black_rgba(0.02) !important);
                    &:hover{
                        @include color-bg($main_color);
                    }
                }

                .cell-border-right{
                    @include border-color($cell_border_color_dark, right);
                }

                .cell-border-bottom{
                    @include border-color($cell_border_color_dark, bottom);
                }
            }
        }
    }
}
</style>
