<template>
    <div class="navbar">
        <div class="navbar-middle">
            <span class="navbar-title">Sudoku</span>
            <span class="navbar-description">Created with <span class="accent">♥</span> by Luan Eduardo da Costa</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SudokuNavbar'
}
</script>

<style lang="scss" scoped>
.navbar{
    @include size(100%, 64px);
    @include padding(0 24px);
    @include border(1px solid grey_scale(95), bottom);
    @include display(table);
    .navbar-title{
        @include font(null, 24px, bold);
        @include transition(color .2s ease-in-out);
        @include cursor;
        &:hover{
            @include color-bg(red);
        }
    }
    .navbar-description{
        @include padding(0 16px);
        .accent{
            @include font(red, 18px, bold);
        }
    }
    .navbar-middle{
        @include display(table-cell);
        @include v-align(middle);
    }
}
</style>
