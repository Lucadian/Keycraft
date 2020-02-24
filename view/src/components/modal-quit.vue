<template>
    <div id="modal-quit" style="visibility: hidden">
        <div class="dialog">
            <div class="msg">
                <div>快捷键未保存，保存后才能使用</div>
                <div>是否保存快捷键设置？</div>
            </div>
            <div class="btnBox">
                <div @click="quit">退出</div>
                <div @click="save">保存</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "modalQuit",
        methods:{
            quit(){
                quit()
            },
            save(){
                save(true)
            }
        }
    }
</script>

<style scoped lang="scss">
#modal-quit{
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

        .msg{
            line-height: 48px;
            font-size: 22px;
            text-align: center;
            color: #ffdb9a;
            text-shadow: 0 0 4px black;
            .small{
                font-size: 14px;
                letter-spacing: 2px;
            }
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
                    color: red;
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