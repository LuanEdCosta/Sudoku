<template>
    <div class="sudoku-controllers">
        <div class="controllers-title">Controllers</div>

        <div class="controllers-body">

            <div class="timer">
                <timer ref="timer" />
            </div>

            <div class="controller-btn-wrapper">
                <button 
                    class="controller-btn"
                    @click="playPauseClicked">
                    {{ playButtonText }}
                </button>
                <button 
                    class="controller-btn"
                    :class="restartButtonClasses"
                    @click="restartClicked">
                    Restart
                </button>
            </div>

            <table class="numpad-table">
                <tbody>
                    <tr v-for="(x, i) in 3"
                        :key="'tr-cont-'+i">
                        <td class="numpad-number"
                            v-for="(y, j) in 3"
                            :key="'td-cont-'+j"
                            @click="numberPadNumberClick(numberPad[i][j])">
                            {{ numberPad[i][j] }}
                        </td>
                    </tr>
                </tbody>
            </table>
            <div 
                class="controller-delete"
                @click="numberPadNumberClick(0)">
                Apagar
            </div>

        </div>
    </div>
</template>

<script>
import timer from '@/components/Timer'
import gameStates from '@/config/GameStates'

export default {
    name: 'SudokuControllers',
    components: {
        timer
    },
    data(){
        return {
            numberPadNumber: 0,
            gameState: 0
        }
    },
    computed: {
        numberPad(){
            return [
                [ 7, 8, 9 ],
                [ 4, 5, 6 ],
                [ 1, 2, 3 ],
            ]
        },
        playButtonText(){
            switch(this.gameState){
            case gameStates.NOT_STARTED: return 'Play'
            case gameStates.STARTED: return 'Pause'
            case gameStates.PAUSED: return 'Continue'
            }
            return null
        },
        restartButtonClasses(){
            return { 
                'controller-btn-disabled': this.gameState !== gameStates.PAUSED 
            }
        }
    },
    methods: {
        numberPadNumberClick(number){
            this.$emit('onNumberSelected', number)
        },
        playPauseClicked(){
            if(this.gameState === gameStates.NOT_STARTED || this.gameState === gameStates.PAUSED){
                this.$refs.timer.start()
                this.gameState = gameStates.STARTED
            }else{
                this.$refs.timer.pause()
                this.gameState = gameStates.PAUSED
            }
            this.$emit('onPlayPauseClicked', this.gameState)
        },
        restartClicked(){
            if(this.gameState === gameStates.PAUSED){
                this.$refs.timer.stop()
                this.gameState = gameStates.NOT_STARTED
                this.$emit('onRestartClicked', this.gameState)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
$controller_width: 250px;

.sudoku-controllers{
    @include display(inline-block);
    @include border(1px solid $cell_border_color);
    @include margin(8px, left);

    .controllers-title{
        @include font(white, 18px, bold, center);
        @include bg($main_color);
        @include padding(8px 0);
        @include outline(1px solid $main_color);
    }

    .controllers-body{
        @include padding(12px 16px);

        .controller-btn-wrapper{
            .controller-btn{
                @include outline(none);
                @include size(100%, null);
                @include m-size($controller_width, null, max);
                @include display(block);
                @include padd-marg(8px 24px, 8px 0);
                @include font($main_color, 18px, bold);
                @include text-trans(uppercase);
                @include border(2px solid $main_color);
                @include color-bg(null, white);
                @include radius(100px);
                @include cursor;
                @include m-transition(color background, .2s ease-in-out);
                &:hover{
                    @include color-bg(white, $main_color);
                }
            }

            .controller-btn-disabled{
                @include color-bg($disabled !important);
                @include border-color($disabled); 
                &:hover{
                    @include color-bg($disabled, white);
                }
            }
        }

        .numpad-table{
            @include size($controller_width, null);
            @include border-collapse(collapse);
        }

        .numpad-number{
                @include padding(12px 16px);
                @include border(1px solid $cell_border_color);
                @include font($main_text_color, 24px, normal, center);
                @include cursor;
                @include m-transition(color background border-color transform, .2s ease-in-out);
                &:hover{
                    @include color-bg(white, $main_color);
                    @include border-color($main_color);
                }
            }

        .controller-delete{
            @extend .numpad-number;
            @include size($controller_width, null);
            @include text-trans(uppercase);
            @include font(null, 18px);
        }

        .timer{
            @include font($main_text_color, 16px, normal, center);
            @include padding(8px 0);
        }
    }
}
</style>
