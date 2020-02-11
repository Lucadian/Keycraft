import Vue from 'vue'
import Vuex from 'vuex'

import { human_arch } from '../config/human_arch'
import { human_unit } from '../config/human_unit'
import { general_order } from '../config/general_order'

Object.keys(human_unit).forEach(function(key){
  if(!human_unit[key].btn){
    human_unit[key].btn = []
  }
  human_unit[key].btn.push(...general_order)

})

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
    units:{
      human_arch,
      human_unit,
      activated:'',//单位和建筑
      currentKey:'',//快捷键名字
      currentVal:'',//快捷键的值
      currentTip:'',//快捷键描述
      proptype:'',
      props:[],
      editing:false,
    },
    sound:{
      heavyClick:null,
      lightClick:null,
      select:null,
      check:null,
      cancel:null
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
    },
    checkSound(state){
      state.sound.check.currentTime = 0.6
      state.sound.check.play()
    },
    cancelSound(state){
      state.sound.cancel.play()
    }
  },
  actions: {

  },
  modules: {

  }
})
