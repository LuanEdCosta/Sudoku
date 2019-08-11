<template>
    <div class="sudoku-config-wrapper">
        
        <div class="sudoku-config-title">Settings</div>

        <div class="sudoku-config-body">

            <div v-if="isNotStarted">
                <div>Choose a dificulty</div>
                <sudoku-dificulty-picker />
            </div>

            <base-checkbox 
                :checked="navigateOnlyInEnabledCells"
                @onCheck="changeNavigationStyle">
                Navigate only in enabled cells
            </base-checkbox>
        </div>

    </div>
</template>

<script>
import baseCheckbox from '@/components/BaseCheckbox'
import sudokuDificultyPicker from '@/components/SudokuDificultyPicker'
import { gameMixin, configMixin, modifyStoreMixin } from '@/mixins/StoreMixin'

export default {
    name: 'SudokuConfig',
    mixins: [ gameMixin, configMixin, modifyStoreMixin ],
    components: { baseCheckbox, sudokuDificultyPicker },
    methods: {
        changeNavigationStyle(isChecked){
            this.modifyConfigObject('navigateOnlyInEnabledCells', isChecked)
        },
    },
}
</script>

<style lang="scss" scoped>
.sudoku-config-wrapper{
    @include flex-item(null, 1);
    @include m-size(250px, null);
    @include border(1px solid $cell_border_color);

    .sudoku-config-title{
        @include font(white, 18px, bold, center);
        @include bg($main_color);
        @include padding(8px 0);
        @include outline(1px solid $main_color);
    }

    .sudoku-config-body{
        @include padding(12px);
    }
}
</style>
