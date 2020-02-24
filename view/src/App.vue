<template>
  <div id="app">
    <aside>
      <h2 id="title">自定义按键</h2>
      <camps/>
      <div id="option" class="sideBtn" @mouseup="port">目录</div>
      <div id="save"   class="sideBtn" @mouseup="save">保存</div>
    </aside>
    <main @contextmenu="clearCurrentKey">
      <units/>
      <archs/>
      <props/>
      <remap/>
      <infos :valid="valid"/>
    </main>
    <sound/>
    <modal-quit/>
    <modal-path :valid="valid"/>
    <modal-reset :valid="valid"/>
    <div id="closeButton" v-if="!valid.modalPath" @click="closeWindow"/>
  </div>
</template>
<script>
  import sound from "./components/sound.vue"
  import camps from "./components/camps.vue"
  import units from "./components/units.vue"
  import archs from "./components/archs.vue"
  import props from "./components/props.vue"
  import remap from "./components/remap.vue"
  import infos from "./components/infos.vue"
  import modalQuit from "./components/modal-quit.vue"
  import modalPath from "./components/modal-path.vue"
  import modalReset from "./components/modal-reset.vue"

  import { mapState,mapMutations } from 'vuex'

  export default {
    data(){
      return {
        valid:{
          modalPath:false,
          modalReset:false
        }
      }
    },
    computed:{
      ...mapState(['camp','pond']),
    },
    methods:{
      ...mapMutations(['lightClickSound','cancelSound','updateArchive','metalClickSound']),
      port(){
        this.lightClickSound()
        this.valid.modalPath = true
      },
      save(){
        this.lightClickSound()
        save(false)
      },
      clearCurrentKey(){
        if(this.pond.currentKey){
          this.cancelSound()
          this.pond.currentKey = ''
          this.pond.currentVal = ''
          this.pond.editing = false
        }
        return false
      },
      closeWindow(){
        this.cancelSound()
        closeWindow()
      }
    },
    components:{
        sound,camps,units,archs,props,remap,infos,modalQuit,modalPath,modalReset
    },
    created(){
      this.updateArchive()
    }
  }
</script>

