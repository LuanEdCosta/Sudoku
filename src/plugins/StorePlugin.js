import Vue from 'vue'
import Vuex from 'vuex'

import gameDificulties from '@/config/GameDificulties'
import gameStates from '@/config/GameStates'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        game: {
            gameState: gameStates.NOT_STARTED,
            gameTime: ''
        },
        config: {
            navigateOnlyInEnabledCells: false,
            gameDificulty: gameDificulties.EASY 
        }
    },
    mutations: {
        setConfig(state, config){
            state.config = config
        },
        setGame(state, game){
            state.game = game
        },
        setGameTime(state, gameTime){
            state.game.gameTime = gameTime   
        }
    },
})
