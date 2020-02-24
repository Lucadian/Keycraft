<template>
    <div id="infos" class="box">
        <div class="info_1" v-if="pond.currentVal">
            「 {{ pond.currentTag }} 」
        </div>
        <div class="info_2" v-if="pond.currentVal">{{ pond.currentTip }}</div>

        <div class="bug" @click="openBugPage"  @mouseenter="showMsg_bug" @mouseout="hideMsg_bug" />
        <transition name="fade">
            <div class="msg_bug" v-if="bug.msg" >反馈 BUG</div>
        </transition>

        <div class="reset" @click="restore"  @mouseenter="showMsg_reset" @mouseout="hideMsg_reset" />
        <transition name="fade">
            <div class="msg_reset" v-if="reset.msg" >重置 / 修复</div>
        </transition>

    </div>
</template>

<script>
    import { mapState,mapMutations } from 'vuex'
    export default {
        name: "infos",
        data(){
            return {
                showQRCode:false,
                holdQRCode:false,
                bug:{
                    msg:false,
                    hovered:false
                },
                reset:{
                    msg:false,
                    hovered:false
                }
            }
        },
        props:['valid'],
        computed:{
            ...mapState(['pond'])
        },
        methods:{
            ...mapMutations(['metalClickSound']),
            // hideQRCode(){
            //     setTimeout(()=>{
            //
            //     },800)
            // }
            restore(){
                this.metalClickSound()
                this.valid.modalReset = true
            },
            showMsg_reset(){
                this.reset.hovered = true
                setTimeout(()=>{
                    if(this.reset.hovered)
                        this.reset.msg = true
                },800)
            },
            hideMsg_reset(){
                this.reset.hovered = false
                this.reset.msg = false
            },

            showMsg_bug(){
                this.bug.hovered = true
                setTimeout(()=>{
                    if(this.bug.hovered)
                        this.bug.msg = true
                },800)
            },
            hideMsg_bug(){
                this.bug.hovered = false
                this.bug.msg = false
            },
            openBugPage(){
                this.metalClickSound()
                openBugPage()
            },

        }
    }
</script>

<style scoped lang="scss">
    .fade-enter-active, .fade-leave-active {
        transition: opacity .4s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }

</style>