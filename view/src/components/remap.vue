<template>
    <div id="remap" class="box">
        <h2 :class="{activated:pond.editing}">
            {{
                !pond.proptype ? '请选择单位/建筑' :
                !pond.currentVal ? '请选择按钮' :
                !pond.editing ? '快捷键：' : '请按键'
            }}
        </h2>
        <div v-if="pond.currentVal" class="shortcut" >
            {{ pond.currentVal }}
        </div>
        <div class="editBtn"
             :class="{valid:pond.currentKey}"
             @click="editShortcut"
        >自定义</div>
        <div class="warning" :class="{green:green}">{{ pond.warning }}</div>
    </div>
</template>

<script>
    import { mapState,mapMutations } from 'vuex'


    export default {
        name: "remap",
        data(){
            return {
                tempVal:'',
                availableKeys:[
                    "À",'1','2','3','4','5','6','7','8','9','0',
                    'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'
                ],
                green:false
            }
        },
        computed:{
            ...mapState(['pond','camp'])
        },
        methods:{
            ...mapMutations(['metalClickSound']),
            editShortcut(){
                if(this.pond.currentKey){
                    this.metalClickSound()
                    this.tempVal = this.pond.currentVal
                    this.pond.currentVal = ' '
                    this.pond.editing = true
                }
            },
            setShortcut(){
                if(this.pond.editing){
                    let val = String.fromCharCode(event.keyCode).toUpperCase()

                    if(event.keyCode === 27 ){ //取消修改的情况
                        this.pond.currentVal = this.tempVal
                        this.pond.editing = false
                        this.pond.warning = ''
                    }
                    else if(!this.availableKeys.includes(val)){ //不允许设置的情况
                        this.green = false
                        this.pond.warning = '因游戏系统限制，只能使字母、数字 或 ~ 号作为快捷键'
                    }
                    else{ //可以修改按键时
                        remap(this.pond.currentKey,val)

                        this.metalClickSound()
                        if(val === 'À') val = "`"
                        this.warning = ''
                        switch(this.pond.proptype){

                            case 'unit':
                                this.camp.units[this.camp.index][this.pond.activated]['btn'][this.pond.propIndex]['val'] = val
                                break

                            case 'arch':
                                this.camp.archs[this.camp.index][this.pond.activated]['btn'][this.pond.propIndex]['val'] = val
                                break
                        }

                        this.green = true
                        setTimeout(()=>{
                            this.pond.warning = '"' + this.pond.currentTag + '" 已设置为 ' + val
                        },100)

                        this.pond.currentVal = val
                        this.pond.editing = false
                    }
                }
            }
        },
        mounted(){
            window.addEventListener('keyup',this.setShortcut)
        }
    }
</script>

<style scoped>

</style>