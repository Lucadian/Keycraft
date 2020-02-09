<template>
  <div id="app">
    <aside>
      <h2 id="title">快捷键设置</h2>
      <ul id="camp">
        <li v-for="item in camps"
            :class="{actived:item === actived.camp}"
            :camp="item"
            v-text="item"
            @mouseup="changeCamp"
        />
      </ul>
      <div id="option" class="sideBtn" @mouseup="showOption">选项</div>
      <div id="save"   class="sideBtn" @mouseup="showSaveInfo">保存</div>
    </aside>
    <main>
      <div id="units" class="box">
        <h2 class="subtitle">单位</h2>
        <ul>
          <li v-for="n in 16">
            <div @mouseup="selectItem">{{ n }}</div>
          </li>
        </ul>
      </div>
      <div id="archs" class="box">
        <h2 class="subtitle">建筑</h2>
        <ul>
          <li v-for="n in 12">
            <div @mouseup="selectItem">{{ n }}</div>
          </li>
        </ul>
      </div>
      <div id="buttons" class="box">
        <h2 class="subtitle">按钮</h2>
        <ul>
          <li v-for="n in 12">
            <div @mouseup="selectItem">{{ n }}</div>
          </li>
        </ul>
      </div>
      <div id="input" class="box">
        <div>
          快捷键：
        </div>
        <div contenteditable="true">
          E
        </div>
      </div>
      <div id="infos" class="box">
        <div class="info_1">「 烈焰风暴 」技能被设置为 E</div>
        <div class="info_2">快捷键设置已保存！</div>
        <div class="version">
          version 1.0
        </div>
      </div>
    </main>
    <audios/>
  </div>
</template>
<script>
  import audios from "./components/audios.vue"
  import { mapState } from 'vuex'

  export default {
    data(){
      return {
        valid:{

        },
        actived:{
          camp:'人类联盟'
        },
        camps:[
          '人类联盟',
          '暗夜精灵',
          '兽人部落',
          '不死亡灵',
          '中立'
        ]
      }
    },
    computed:{
      ...mapState(['audio']),
    },
    methods:{
      changeCamp(){
        let camp = event.currentTarget.getAttribute('camp')
        if(this.actived.camp !== camp){
          this.actived.camp = camp
          this.playHeavyClickSound()
        }
      },
      showOption(){
        this.playLightClickSound()
      },
      showSaveInfo(){
        this.playLightClickSound()
      },
      selectItem(){
        this.playSelectSound()
      },
      playLightClickSound(){
        this.audio.lightClick.play()
        this.audio.lightClick.currentTime = 0.5
      },
      playHeavyClickSound(){
        this.audio.heavyClick.play()
        this.audio.heavyClick.currentTime = 0.9
      },
      playSelectSound(){
        this.audio.select.play()
        this.audio.select.currentTime = 0.3
      }
    },
    components:{
        audios
    },

  }
</script>
<style lang="scss">

</style>
