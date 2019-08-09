<template>
    <div class="check-container">
        <label 
            class="check-label" 
            :class="labelClasses">

            <slot v-if="hasText"></slot>

            <input 
                :checked="checked"
                type="checkbox"
                @input="emitInput">

            <span class="checkmark"></span>

        </label>
    </div>
</template>

<script>
export default {
    name: 'BaseCheckbox',
    props:{
        checked: { type: Boolean, default: false },
    },
    computed: {
        hasText(){ 
            return !!this.$slots.default 
        },
        labelClasses(){
            return { 
                'no-text': !this.hasText 
            }
        }
    },
    methods : {
        emitInput(e){ 
            this.$emit('onCheck', e.target.checked) 
        }
    }
}
</script>

<style lang="scss" scoped>
$checkbox_not_selected: #d3d3d3;

.check-container {
    .check-label{
        @include display(inline-block);
        @include position(relative);
        @extend %no-selection;
        @include padding(10px 10px 10px 35px);
        @include cursor;
        input{
            @include position(absolute);
            @include cursor;
            @include opacity(0);
            @include size(0);
            &:checked ~ .checkmark:after{
                @include display(block);
            }
            &:checked ~ .checkmark{
                @include color-bg(null, $main_color !important);
            }
        }
        .checkmark{
            @include position(absolute, 12.5%, null, null, 0);
            @include size(25px);
            @include radius(3px);
            @include color-bg(null, $checkbox_not_selected);
            @include transition(all .2s ease-in-out);
            @include pseudo(after){
                @include display(none);
                @include position(absolute, 6px, null, null, 10px);
                @include size(5px, 10px);
                @include border(solid white);
                @include border-width(0 3px 3px 0);
                @include transform(rotate, 45deg);
            }
        }
        &:hover input ~ .checkmark, &:focus input ~ .checkmark, &:active input ~ .checkmark{
            @include color-bg(null, $main_text_color);
        }
    }
    .check-label.no-text{
        @include padding(17px);
        .checkmark{
            @include position-prop(12.5%, null, null, 12.5%);
        }
    }
}
</style>
