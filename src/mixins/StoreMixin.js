import gameStates from '@/config/GameStates'

export const gameMixin = {
    computed: {
        gameState(){
            return this.$store.state.game.gameState
        },
        gameTime(){
            return this.$store.state.game.gameTime
        },
        isPlaying(){
            return this.gameState === gameStates.STARTED
        },
        isNotStarted(){
            return this.gameState === gameStates.NOT_STARTED
        }
    },
    methods: {
        updateStoreGameTime(gameTime){
            this.$store.commit('setGameTime', gameTime)
        }
    },
}

export const configMixin = {
    computed: {
        navigateOnlyInEnabledCells(){
            return this.$store.state.config.navigateOnlyInEnabledCells
        },
        gameDificulty(){
            return this.$store.state.config.gameDificulty
        }
    }
}

export const modifyStoreMixin = {
    methods: {
        modifyStoreObject(
            storeObjectReference, 
            propName, 
            propValue, 
            mutationFunctionName
        ){
            const object = { ...storeObjectReference }
            object[propName] = propValue
            this.$store.commit(mutationFunctionName, object)
        },
        modifyGameObject(propName, propValue){
            this.modifyStoreObject(
                this.$store.state.game,
                propName,
                propValue,
                'setGame'
            )
        },
        modifyConfigObject(propName, propValue){
            this.modifyStoreObject(
                this.$store.state.config,
                propName,
                propValue,
                'setConfig'
            )
        },
    }
}