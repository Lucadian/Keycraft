<template>
    <div id="infos" class="box">
        <div class="info_1" v-if="pond.currentVal">
            「 {{ pond.currentTag }} 」
        </div>
        <div class="info_2" v-if="pond.currentVal">{{ pond.currentTip }}</div>
        <div class="version">
            Version 1.1
        </div>
        <div class="weixin"/>
        <div class="QRCdoe" v-if="showQRCode" />
    </div>
</template>

<script>
    import { mapState,mapMutations } from 'vuex'
    export default {
        name: "infos",
        data(){
            return {
                showQRCode:false,
            }
        },
        computed:{
            ...mapState(['pond'])
        }
    }
</script>

<style scoped>

</style>