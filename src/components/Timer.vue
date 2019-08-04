<template>
    <div>{{ timerText }}</div>
</template>

<script>
export default {
    name: 'Timer',
    data(){
        return {
            secondsCount: 0,
            secondsToShow: 0,
            minutesToShow: 0,
            hoursToShow: 0,
            intervalFunction: null
        }
    },
    computed: {
        timerText(){
            const seconds = this.formatNumberToShow(this.secondsToShow)
            const minutes = this.formatNumberToShow(this.minutesToShow)
            const hours = this.formatNumberToShow(this.hoursToShow)
            return `${hours}:${minutes}:${seconds}`
        }
    },
    methods: {
        start(){
            if(!this.intervalFunction){
                this.intervalFunction = setInterval(this.onEachInterval, 1000)
            }
        },
        pause(){
            if(this.intervalFunction){
                clearInterval(this.intervalFunction)
                this.intervalFunction = null
            }
        },
        stop(){
            this.pause()
            this.secondsCount = 0
            this.secondsToShow = 0
            this.minutesToShow = 0
            this.hoursToShow = 0
        },
        onEachInterval(){
            this.secondsCount++
            this.secondsToShow++

            if(this.secondsToShow === 60){
                this.minutesToShow++
                this.secondsToShow = 0 
            }

            if(this.minutesToShow === 60){
                this.hoursToShow++
                this.minutesToShow = 0
            }
        },
        formatNumberToShow(number){
            if(number < 10){
                return '0' + number
            }
            return number
        }
    }
}
</script>
