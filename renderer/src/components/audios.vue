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
        name: "audios",
        computed:{
            ...mapState(['audio']),
        },
        mounted() {
            this.audio.heavyClick = document.getElementById('audio_heavyClick')
            this.audio.heavyClick.currentTime = 1
            this.audio.lightClick = document.getElementById('audio_lightClick')
            this.audio.lightClick.currentTime = 0.5
            this.audio.select = document.getElementById('audio_select')
            this.audio.select.currentTime = 0.3
        }
    }
</script>

<style scoped>

</style>