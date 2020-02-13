import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


import { arch_human } from '../config/arch_human'
import { unit_human } from '../config/unit_human'




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
      ],
      units:[
          unit_human,
          [],
          [],
          [],
          []
      ],
      archs:[
          arch_human,
          [],
          [],
          [],
          []
      ]
    },
    pond:{
      activated :'' ,//当前选择的单位或建筑
      currentKey:'',//快捷键名字
      currentVal:'',//快捷键的值
      currentTag:'',
      currentTip:'',//快捷键描述
      proptype  :'',
      propIndex :0,
      props     :[],
      editing   :false,
    },
    sound:{
      heavyClick:null,
      lightClick:null,
      select:null,
      check:null,
      cancel:null,
      metalClick:null
    },
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
    },
    metalClickSound(state){
      state.sound.metalClick.currentTime = 0
      state.sound.metalClick.play()
    }
  },
  actions: {

  },
  modules: {

  }
})
