<template>
    <div>
        <audio id="audio_heavyClick" src="../../sound/war3heavyClick.ogg"/>
        <audio id="audio_lightClick" src="../../sound/war3click_2.ogg"/>
        <audio id="audio_select" src="../../sound/war3selectClick.ogg"/>
    </div>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        name: "sound",
        computed:{
            ...mapState(['sound']),
        },
        mounted() {
            this.sound.heavyClick = document.getElementById('audio_heavyClick')
            this.sound.heavyClick.currentTime = 1

            this.sound.lightClick = document.getElementById('audio_lightClick')
            this.sound.lightClick.currentTime = 0.5

            this.sound.select = document.getElementById('audio_select')
            this.sound.select.currentTime = 0.3
        }
    }
</script>

<style scoped>

</style>