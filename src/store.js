import Vue from 'vue'
import Vuex from 'vuex'
import gameDificulty from '@/config/GameDificulty'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        config: {
            navigateOnlyInEnabledCells: false,
            dificulty: gameDificulty.MEDIUM 
        }
    },
    mutations: {
        setConfig(state, config){
            state.config = config
        },
    },
})
