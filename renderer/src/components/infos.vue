<template>
    <div id="infos" class="box">
        <div class="info_1" v-if="pond.currentVal">
            「 {{ pond.currentTag }} 」
        </div>
        <div class="info_2" v-if="pond.currentVal">{{ pond.currentTip }}</div>
        <div class="version">
            version 1.1
        </div>
    </div>
</template>

<script>
    import { mapState,mapMutations } from 'vuex'
    export default {
        name: "infos",
        computed:{
            ...mapState(['pond'])
        }
    }
</script>

<style scoped>

</style>