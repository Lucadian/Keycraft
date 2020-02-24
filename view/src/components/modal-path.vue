<template>
    <div id="modal-path" v-if="valid.modalPath">
        <div class="dialog">
            <div class="msg">
                <div>设置 CustomKeys.txt 所在目录：</div>
                <input id="inputPath" type="text" v-model="pathValue">
                <div style="color: white;font-weight: normal;letter-spacing: 1px">注：快捷键文件将会保存到你所指定的目录</div>
                <div style="color: white;font-weight: normal;letter-spacing: 1px;transform: translateX(36px)">
                    如果快捷键保存后不生效，再修改此目录
                </div>
            </div>
            <div class="btnBox">
                <div @click="setCustomPath">确定</div>
                <div @click="setDefaultPath">默认</div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState,mapMutations } from 'vuex'

    export default {
        name: "modal-path",
        data(){
            return {
                pathValue:''
            }
        },
        props:['valid'],
        computed:{
            ...mapState(['path'])
        },
        methods:{
            ...mapMutations(['lightClickSound']),
            setCustomPath(){
                this.lightClickSound()
                setCustomPath(this.pathValue)
                this.valid.modalPath = false
            },
            setDefaultPath(){
                this.lightClickSound()
                this.pathValue = this.path.default
            }
        },
        created(){
            this.path.default = fs.readFileSync(storage + '/path.default.txt')
            this.pathValue = fs.readFileSync(storage + '/path.custom.txt')
        }
    }
</script>

<style scoped lang="scss">
#modal-path{
    z-index: 100;
    position: absolute;
    width: 100%;height: 100%;
    background-color: rgba(0,0,0,.6);
    div.dialog{
        box-sizing: border-box;
        margin: 200px auto 0 auto;
        padding: 50px;
        width: 569px;height: 342px;
        background-image: url("../../image/modal.png");
        div.msg{
            font-size: 17px;
            margin: 20px;
        }
        input{
            font-size: 16px;
            display: block;
            margin: 20px 0;
            width: 420px;
            height: 20px;
        }
    }
    .btnBox{
        width: 380px;
        margin: 40px auto;
        display: flex;
        justify-content: space-between;
        font-size: 16px;
        letter-spacing: 3px;
        div{
            width: 70px;
            height: 40px;
            text-align: center;
            line-height: 40px;
            background-color: rgba(0,0,0,.38);
            &:first-child{
            }
            &:last-child{
                color: #ffd181;
            }
            &:hover{
                transform: scale(1.1);
            }
        }
    }
}
</style>