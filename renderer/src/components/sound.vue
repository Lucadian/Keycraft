<template>
    <div>
        <audio id="audio_heavyClick" src="../../sound/war3heavyClick.ogg"/>
        <audio id="audio_lightClick" src="../../sound/war3lightClick.ogg"/>
        <audio id="audio_select" src="../../sound/war3selectClick.ogg"/>
        <audio id="audio_check" src="../../sound/war3checkClick.ogg"/>
        <audio id="audio_cancel" src="../../sound/cancel.ogg"/>
        <audio id="audio_metalClick" src="../../sound/metalClick.ogg"/>
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

            this.sound.check = document.getElementById('audio_check')
            this.sound.check.currentTime = 0.6

            this.sound.cancel = document.getElementById('audio_cancel')

            this.sound.metalClick = document.getElementById('audio_metalClick')
            this.sound.metalClick.volume = 0.5
            // this.sound.cancel.currentTime = 0.6
        }
    }
</script>

<style scoped>

</style>