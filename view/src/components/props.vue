<template>
    <div id="buttons" class="box">
        <h2 class="subtitle">按钮</h2>
        <div class="button" v-for="(btn,idx) in pond.props"
             :style="setPosition(btn) + setIcon(btn)"
             :idx="idx"
             :keyname="btn.key"
             :val="btn.val"
             :tag="btn.tag"
             :tip="btn.tip"
             :class="{
                activated: String(btn.key) === String(pond.currentKey),
                icon_human:camp.index === 0,
                icon_elf:camp.index === 1,
                icon_orc:camp.index === 2,
                icon_ud:camp.index === 3,
                icon_neutral:camp.index === 4,
                }"
             @click="checkKey"
        >
            <div v-show="String(btn.key) !== String(pond.currentKey)" class="shortcut" v-text="btn.val" />
        </div>
    </div>
</template>

<script>
    import { mapState,mapMutations } from 'vuex'
    export default {
        name: "props",
        computed:{
            ...mapState(['camp','pond']),
        },
        methods:{
            ...mapMutations(['checkSound']),
            setPosition(btn){
                return 'left:' + (btn.pos[0]-1)*78 + 'px;top:' + (btn.pos[1]-1)*78 + 'px;'
            },
            setIcon(btn){
                return 'background-position:-' + (btn.ico[0]-1)*70 + 'px -' + (btn.ico[1]-1)*70 + 'px;'
            },
            checkKey(){
                let keyname = event.currentTarget.getAttribute('keyname')
                if(this.pond.currentKey !== keyname){
                    this.pond.currentKey =  keyname
                    this.pond.currentVal =  event.currentTarget.getAttribute('val')
                    this.pond.currentTag =  event.currentTarget.getAttribute('tag')
                    this.pond.currentTip =  event.currentTarget.getAttribute('tip')
                    this.pond.propIndex  =  event.currentTarget.getAttribute('idx')
                    this.pond.editing = false
                    setTimeout(()=>{
                        this.pond.warning = ''
                    },1000)
                    this.checkSound()
                }
            }
        }
    }
</script>

<style scoped lang="scss">

</style>