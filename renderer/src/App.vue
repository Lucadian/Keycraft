<template>
  <div id="app">
    <aside>
      <h2 id="title">快捷键设置</h2>
      <camps/>
      <div id="option" class="sideBtn" @mouseup="showOption">选项</div>
      <div id="save"   class="sideBtn" @mouseup="showSaveInfo">保存</div>
    </aside>
    <main>
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

    methods:{
      ...mapMutations(['lightClickSound']),
      showOption(){
        this.lightClickSound()
      },
      showSaveInfo(){
        this.lightClickSound()
      },

    },
    components:{
        sound,camps,units,archs,props,remap,infos
    },

  }
</script>
<style lang="scss">

</style>
