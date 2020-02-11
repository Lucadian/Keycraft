<template>
    <div id="buttons" class="box">
        <h2 class="subtitle">按钮</h2>
        <div class="button" v-for="btn in units.props"
             :style="setPosition(btn) + setIcon(btn)"
             :keyname="btn.key"
             :val="btn.val"
             :class="{activated: String(btn.key) === String(units.currentKey)}"
             @click="checkKey"
        >
            <div v-show="String(btn.key) !== String(units.currentKey)" class="shortcut" v-text="btn.val" />
        </div>
    </div>
</template>

<script>
    import { mapState,mapMutations } from 'vuex'
    export default {
        name: "props",
        computed:{
            ...mapState(['units']),

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
                if(this.units.currentKey !== keyname){
                    this.units.currentKey = keyname
                    this.units.currentVal =  event.currentTarget.getAttribute('val')
                    this.checkSound()
                }
            }
        }
    }
</script>

<style scoped lang="scss">

</style>