import Vue from 'vue'
import Vuex from 'vuex'

import { human_arch } from '../config/human_arch'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    camp:{
      index:0,
      names:[
        '人类联盟',
        '暗夜精灵',
        '兽人部落',
        '不死亡灵',
        '中立'
      ]
    },
    human_arch,
    props:[],
    sound:{
      heavyClick:null,
      lightClick:null,
      select:null
    }
  },
  getters:{

  },
  mutations: {
    heavyClickSound(state){
      state.sound.heavyClick.currentTime = 1
      state.sound.heavyClick.play()
    },
    lightClickSound(state){
      state.sound.lightClick.currentTime = 0.5
      state.sound.lightClick.play()
    },
    selectSound(state){
      state.sound.select.currentTime = 0.3
      state.sound.select.play()
    }
  },
  actions: {

  },
  modules: {

  }
})
