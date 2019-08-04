<template>
    <div class="main">
        <navbar></navbar>
        <div class="content">
            <sudoku-table ref="sudokuTable"/>
            <sudokuControllers
                @onPlayPauseClicked="onActionButtonClick"
                @onRestartClicked="onActionButtonClick"
                @onNumberSelected="onNumberSelected"/>
        </div>
    </div>
</template>

<script>

import sudokuTable from '@/components/SudokuTable'
import sudokuControllers from '@/components/SudokuControllers'
import navbar from '@/components/Navbar'

export default {
    name: 'Main',
    components: {
        sudokuTable,
        navbar,
        sudokuControllers,
    },
    methods:{
        onNumberSelected(number){
            this.$refs.sudokuTable.setValueInCell(number)
        },
        onActionButtonClick(gameState){
            this.$refs.sudokuTable.setGameState(gameState)
        },
    }
}
</script>

<style lang="scss" scoped>
.main{
    .content{
        @include padding(24px);
        @include flex-container(row, wrap, flex-start);
    }
}
</style>
