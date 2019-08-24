<template>
    <div class="main">

        <sudoku-navbar></sudoku-navbar>

        <div class="content">
            <sudoku-table 
                ref="sudokuTable"
                @onPlayerWon="onPlayerWon"/>

            <sudoku-controllers
                ref="sudokuControllers"
                @onNumberSelected="onNumberSelected" />

            <sudoku-settings />
        </div>

        <sudoku-win-message 
            v-if="showMessage"
            @onClose="showWinMessage(false)"/>
    </div>
</template>

<script>
import sudokuNavbar from '@/components/SudokuNavbar'
import sudokuTable from '@/components/SudokuTable'
import sudokuControllers from '@/components/SudokuControllers'
import sudokuSettings from '@/components/SudokuSettings'
import sudokuWinMessage from '@/components/SudokuWinMessage'

export default {
    name: 'Main',
    data(){
        return {
            showMessage: false
        }
    },
    components: {
        sudokuNavbar,
        sudokuTable,
        sudokuControllers,
        sudokuSettings,
        sudokuWinMessage
    },
    methods:{
        onNumberSelected(number){
            this.$refs.sudokuTable.setValueInCell(number)
        },
        showWinMessage(show){
            this.showMessage = show
        },
        onPlayerWon(){
            this.showWinMessage(true)
            this.$refs.sudokuControllers.pauseGame()
            this.$refs.sudokuControllers.restartGame()
        }
    }
}
</script>

<style lang="scss" scoped>
.main{
    .content{
        @include padding(16px 20px);
        @include flex-container(row, wrap, center);
    }
}
</style>
