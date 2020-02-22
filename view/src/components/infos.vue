<template>
    <div id="infos" class="box">
        <div class="info_1" v-if="pond.currentVal">
            「 {{ pond.currentTag }} 」
        </div>
        <div class="info_2" v-if="pond.currentVal">{{ pond.currentTip }}</div>
<!--        <div class="version">-->
<!--            V 1.1-->
<!--        </div>-->
        <div class="bug" @click="openBugPage"  @mouseenter="showMsg" @mouseout="hideMsg" />
        <transition name="fade">
            <div class="msg" v-if="msg" >点击反馈BUG</div>
        </transition>
<!--        <div class="weixin" @mouseenter="showQRCode = true" @mouseout="showQRCode = false"/>-->
<!--        <transition name="fade">-->
<!--            <div class="QRCode" v-if="showQRCode"/>-->
<!--        </transition>-->
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
                msg:false,
                hovered:false
            }
        },
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
            showMsg(){
                this.hovered = true
                setTimeout(()=>{
                    if(this.hovered)
                        this.msg = true
                },800)
            },
            hideMsg(){
                this.hovered = false
                this.msg = false
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