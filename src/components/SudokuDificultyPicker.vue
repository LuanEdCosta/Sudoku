<template>
    <div class="sudoku-dificulty-picker">
        <div 
            v-for="dificulty in dificulties"
            :key="dificulty.name"
            class="sudoku-dificulty"
            :class="getClasses(dificulty.value)"
            @click="dificultyClicked(dificulty.value)">
            {{ dificulty.name }}
        </div>
    </div>
</template>

<script>
import gameDificulties from '@/config/GameDificulties'
import { configMixin, modifyStoreMixin } from '@/mixins/StoreMixin'

export default {
    name: 'sudokuDificultyPicker',
    mixins: [ configMixin, modifyStoreMixin ],
    computed: {
        dificulties(){
            const dificultyArray = []

            Object.keys(gameDificulties).map((key) => {
                dificultyArray.push({
                    name: key.split('_').join(' ').toLowerCase(),
                    value: gameDificulties[key]
                })
            })

            return dificultyArray
        },
    },
    methods: {
        dificultyClicked(dificultyValue){
            this.modifyConfigObject('gameDificulty', dificultyValue)
        },
        getClasses(dificultyValue){
            return {
                'sudoku-dificulty-selected': this.gameDificulty === dificultyValue
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.sudoku-dificulty-picker{
    @include padding(8px 0);
    .sudoku-dificulty{
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
    .sudoku-dificulty-selected{
        @include color-bg(white, $main_color);
        @include border-color($main_color);
    }
}
</style>
