<template>
    <div 
        class="win-msg" 
        @click.self="emitClose">
        <div class="win-msg-dialog">
            <div class="win-msg-header">Congratulations! You Won The Game</div>

            <div class="win-msg-body">
                <div class="win-msg-body-data">
                    <span class="data-label">Time:</span>
                    <span class="data-value">{{ lastWinTime }}</span>
                </div>

                <div class="win-msg-body-data">
                    <span class="data-label">Difficulty:</span>
                    <span class="data-value">{{ lastWinDifficulty }}</span>
                </div>
            </div>

            <div class="win-msg-footer">
                <button 
                    type="button" 
                    class="close-button"
                    @click="emitClose">
                    Close
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { getDifficultyByValue } from "@/config/GameDifficulties"
import { gameMixin } from "@/mixins/StoreMixin"

export default {
    name: 'SudokuWinMessage',
    mixins: [ gameMixin ],
    methods: {
        emitClose(e){ this.$emit('onClose', e) }
    },
    computed: {
        lastWin(){
            return this.playerWins[this.playerWins.length - 1]
        },
        lastWinTime(){
            return this.lastWin.time
        },
        lastWinDifficulty(){
            return getDifficultyByValue(this.lastWin.difficulty).name
        }
    }
}
</script>

<style lang="scss" scoped>
.win-msg{
    @include position(fixed, 0, 0, 0, 0);
    @include size(100%);
    @include bg(black_rgba(0.5));
    @include flex-container(column, wrap, center, center);
    .win-msg-dialog{
        @include m-size(410px, null, min);
        @include m-size(410px, null, max);
        @include bg(white);
        @include radius(5px);
        @include b-shadow(-2px 2px 6px 1px black_rgba(.2));
        .win-msg-header{
            @include padding(16px 24px);
            @include font($main_color, 20px, bold, center);
        }
        .win-msg-body{
            @include padding(12px 24px);
            .win-msg-body-data{
                @include padding(6px 0);
                .data-label{
                    @include weight(bold);
                    @include padding(4px, right);
                }
                .data-value{
                    @include text-trans(capitalize);
                }
            }
        }
        .win-msg-footer{
            @include padding(16px);
            @include t-align(center);
            .close-button{
                @include outline(none);
                @include border(1px solid $main_color);
                @include font($main_color, 18px, bold, center);
                @include bg(white);
                @include radius(5px);
                @include cursor;
                @include padding(8px 16px);
                @include m-transition(color background, .2s ease-in-out);
                &:hover{
                    @include color-bg(white, $main_color);
                }
            }
        }
    }
}
</style>