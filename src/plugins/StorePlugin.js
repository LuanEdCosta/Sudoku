import Vue from 'vue'
import Vuex from 'vuex'

import gameDifficulties from '@/config/GameDifficulties'
import gameStates from '@/config/GameStates'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        game: {
            gameState: gameStates.NOT_STARTED,
            gameTime: '',
            wins: []
        },
        config: {
            navigateOnlyInEnabledCells: false,
            gameDifficulty: gameDifficulties.EASY 
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
        },
        addNewWin(state, win){
            state.game.wins.push(win)
        }
    },
})
