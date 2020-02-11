<template>
    <div id="infos" class="box">
        <div class="info_1" v-if="units.currentVal">
            「 {{ units.currentTip }} 」
        </div>
        <div class="info_2" v-if="units.currentVal">{{ units.currentTip }}</div>
        <div class="version">
            version 1.0
        </div>
    </div>
</template>

<script>
    import { mapState,mapMutations } from 'vuex'
    export default {
        name: "infos",
        computed:{
            ...mapState(['units'])
        }
    }
</script>

<style scoped>

</style>