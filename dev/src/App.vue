<template>
  <div id="app">
    <aside>
      <h2 id="title">自定义按键</h2>
      <camps/>
      <div id="option" class="sideBtn" @mouseup="showOption">选项</div>
      <div id="save"   class="sideBtn" @mouseup="showSaveInfo">保存</div>
    </aside>
    <main @contextmenu="clearCurrentKey">
      <units/>
      <archs/>
      <props/>
      <remap/>
      <infos/>
    </main>
    <sound/>
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

  import { mapState,mapMutations } from 'vuex'

  export default {
    data(){
      return {

      }
    },
    computed:{
      ...mapState(['pond']),
    },
    methods:{
      ...mapMutations(['lightClickSound','cancelSound']),
      showOption(){
        this.lightClickSound()
      },
      showSaveInfo(){
        this.lightClickSound()
      },
      clearCurrentKey(){
        // event.preventDefault()
        if(this.pond.currentKey){
          this.cancelSound()
          this.pond.currentKey = ''
          this.pond.currentVal = ''
          this.pond.editing = false
        }
      },

    },
    components:{
        sound,camps,units,archs,props,remap,infos
    },

  }
</script>
<style lang="scss">

</style>
