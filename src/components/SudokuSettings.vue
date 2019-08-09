<template>
    <div class="sudoku-config-wrapper">
        <div class="sudoku-config-title">Settings</div>
        <div class="sudoku-config-body">
            <base-checkbox 
                :checked="$store.state.config.navigateOnlyInEnabledCells"
                @onCheck="changeNavigationStyle">
                Navigate only in enabled cells
            </base-checkbox>

        </div>
    </div>
</template>

<script>
import baseCheckbox from '@/components/BaseCheckbox'

export default {
    name: 'SudokuConfig',
    components: { baseCheckbox },
    methods: {
        changeNavigationStyle(isChecked){
            this.setNewConfigObject('navigateOnlyInEnabledCells', isChecked)
        },
        setNewConfigObject(propNameToEdit, propValue){
            const config = { ...this.$store.state.config }
            config[propNameToEdit] = propValue
            this.$store.commit('setConfig', config)
        }
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
