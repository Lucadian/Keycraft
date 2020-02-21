<template>
  <div id="app">
    <aside>
      <h2 id="title">自定义按键</h2>
      <camps/>
      <div id="option" class="sideBtn" @mouseup="port">导出</div>
      <div id="save"   class="sideBtn" @mouseup="save">保存</div>
    </aside>
    <main @contextmenu="clearCurrentKey">
      <units/>
      <archs/>
      <props/>
      <remap/>
      <infos/>
    </main>
    <sound/>
    <modal/>
    <div id="closeButton" @click="closeWindow"/>
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
  import modal from "./components/modal.vue"

  import { mapState,mapMutations } from 'vuex'

  export default {
    data(){
      return {

      }
    },
    computed:{
      ...mapState(['camp','pond']),
    },
    methods:{
      ...mapMutations(['lightClickSound','cancelSound','updateArchive']),
      port(){
        this.lightClickSound()
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
      },
      closeWindow(){
        this.cancelSound()
        closeWindow()
      }
    },
    components:{
        sound,camps,units,archs,props,remap,infos,modal
    },
    created(){
      this.updateArchive()
    }
  }
</script>

