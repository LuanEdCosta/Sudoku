<template>
    <div class="sudoku-difficulty-picker">
        <div 
            v-for="difficulty in difficulties"
            :key="difficulty.name"
            class="sudoku-difficulty"
            :class="getClasses(difficulty.value)"
            @click="difficultyClicked(difficulty.value)">
            {{ difficulty.name }}
        </div>
    </div>
</template>

<script>
import { getDifficultyArray } from '@/config/GameDifficulties'
import { gameMixin, configMixin, modifyStoreMixin } from '@/mixins/StoreMixin'

export default {
    name: 'sudokuDifficultyPicker',
    mixins: [ gameMixin, configMixin, modifyStoreMixin ],
    computed: {
        difficulties(){
            return getDifficultyArray()
        },
    },
    methods: {
        difficultyClicked(difficultyValue){
            if(this.isNotStarted){
                this.modifyConfigObject('gameDifficulty', difficultyValue)
            }
        },
        getClasses(difficultyValue){
            const isSelected = this.gameDifficulty === difficultyValue
            return {
                'sudoku-difficulty-selected': isSelected,
                'sudoku-difficulty-disabled': !this.isNotStarted && !isSelected
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.sudoku-difficulty-picker{
    @include padding(8px 0);
    .sudoku-difficulty{
        @include display(inline-block);
        @include padd-marg(8px 16px, 4px 8px 8px 0);
        @include border(1px solid $cell_border_color);
        @include radius(5px);
        @include text-trans(capitalize);
        @include cursor;
        @include m-transition(color background border-color, .2s ease-in-out);
        &:hover{
            @include color-bg(white, $main_color);
            @include border-color($main_color);
        }
    }
    .sudoku-difficulty-disabled, .sudoku-difficulty-disabled:hover{
        @include color-bg(white, $disabled);
        @include border-color($disabled);
    }
    .sudoku-difficulty-selected{
        @include color-bg(white, $main_color);
        @include border-color($main_color);
    }
}
</style>
