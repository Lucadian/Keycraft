<template>
    <div id="remap" class="box">
        <h2>
            {{
                !units.proptype ? '请选择单位/建筑' :
                !units.currentVal ? '请选择按钮' :
                !units.editing ? '快捷键：' : '请输入按键'
            }}
        </h2>
        <div v-if="units.currentVal" class="shortcut" >
            {{ units.currentVal }}
        </div>
        <div class="editBtn"
             :class="{valid:units.currentKey}"
             @click="inputShortcut"
        >自定义</div>
    </div>
</template>

<script>
    import { mapState,mapMutations } from 'vuex'

    export default {
        name: "remap",
        data(){
            return {
                tempVal:''
            }
        },
        computed:{
            ...mapState(['units'])
        },
        methods:{
            inputShortcut(){
                if(this.units.currentKey){
                    this.units.editing = true
                    this.tempVal = this.units.currentVal
                    this.units.currentVal = ' '
                }
            }
        }
    }
</script>

<style scoped>

</style>