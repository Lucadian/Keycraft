<template>
    <div id="remap" class="box">
        <h2>
            {{ units.currentVal ? '快捷键：' : units.proptype ? '请选择按钮' : '请选择单位/建筑'}}
        </h2>
        <div v-if="units.currentVal" class="shortcut" >
            {{ units.currentVal }}
        </div>
        <div class="editBtn" :class="{valid:units.currentKey}">改键</div>
    </div>
</template>

<script>
    import { mapState,mapMutations } from 'vuex'

    export default {
        name: "remap",
        computed:{
            ...mapState(['units'])
        }
    }
</script>

<style scoped>

</style>