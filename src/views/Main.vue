<template>
    <div class="main">

        <sudoku-navbar></sudoku-navbar>

        <div class="content">
            <sudoku-table ref="sudokuTable"/>

            <sudokuControllers @onNumberSelected="onNumberSelected" />

            <sudoku-settings />
        </div>
        
    </div>
</template>

<script>
import sudokuNavbar from '@/components/SudokuNavbar'
import sudokuTable from '@/components/SudokuTable'
import sudokuControllers from '@/components/SudokuControllers'
import sudokuSettings from '@/components/SudokuSettings'

export default {
    name: 'Main',
    components: {
        sudokuNavbar,
        sudokuTable,
        sudokuControllers,
        sudokuSettings,
    },
    methods:{
        onNumberSelected(number){
            this.$refs.sudokuTable.setValueInCell(number)
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
