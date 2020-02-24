<template>
    <div id="modal-reset" v-if="valid.modalReset">
        <div class="dialog">
            <div class="msg">
                <div>重置可以修复误删导致的快捷键失效问题</div>
                <div>是否重置所有快捷键？重置后会自动关闭</div>
            </div>
            <div class="btnBox">
                <div @click="confirm">确定</div>
                <div @click="cancel">取消</div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex'
    export default {
        name: "modal-reset",
        props:['valid'],
        methods:{
            ...mapMutations(['restoreArchive','updateArchive']),
            confirm(){
                deleteStorage()
            },
            cancel(){
                this.valid.modalReset = false
            }
        }
    }
</script>

<style scoped lang="scss">
    #modal-reset{
        z-index: 100;
        position: absolute;
        width: 100%;height: 100%;
        background-color: rgba(0,0,0,.6);
        div.dialog{
        box-sizing: border-box;
        margin: 200px auto 0 auto;
        padding: 70px 0;
        width: 569px;height: 342px;
        background-image: url("../../image/modal.png");

        .msg{
        line-height: 48px;
        font-size: 22px;
        text-align: center;
        color: #ffdb9a;
        text-shadow: 0 0 4px black;
        letter-spacing: 1px;
        }

    .btnBox{
        width: 340px;
        margin: 60px auto;
        display: flex;
        justify-content: space-between;
        font-size: 18px;
        letter-spacing: 3px;
    div{
        width: 100px;
        height: 50px;
        text-align: center;
        line-height: 50px;
        background-color: rgba(0,0,0,.38);
    &:first-child{
         color: orangered;
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
    }
</style>