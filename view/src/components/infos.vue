<template>
    <div id="infos" class="box">
        <div class="info_1" v-if="pond.currentVal">
            「 {{ pond.currentTag }} 」
        </div>
        <div class="info_2" v-if="pond.currentVal">{{ pond.currentTip }}</div>

        <div class="bug" @click="openBugPage"  @mouseenter="showMsg_bug" @mouseout="hideMsg_bug" />
        <transition name="fade">
            <div class="msg_bug" v-if="bug.msg" >反馈 / 更新</div>
        </transition>

        <div class="reset" @click="restore"  @mouseenter="showMsg_reset" @mouseout="hideMsg_reset" />
        <transition name="fade">
            <div class="msg_reset" v-if="reset.msg" >重置 / 修复</div>
        </transition>

        <div class="contributor">
            <div class="title"
                    v-html="contributor.title" />
            <div class="list"
                 v-for="item in contributor.list"
                 :class="{ grey:!item.valid }"
            >
                {{ item.value }}
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState,mapMutations } from 'vuex'

    export default {
        name: "infos",
        data() {
            return {
                showQRCode: false,
                holdQRCode: false,
                bug: {
                    msg: false,
                    hovered: false
                },
                reset: {
                    msg: false,
                    hovered: false
                },
                contributor: {
                    title: '',
                    list: []
                },
            }
        },
        props: ['valid'],
        computed: {
            ...mapState(['pond'])
        },
        methods: {
            ...mapMutations(['metalClickSound']),
            // hideQRCode(){
            //     setTimeout(()=>{
            //
            //     },800)
            // }
            restore() {
                this.metalClickSound()
                this.valid.modalReset = true
            },
            showMsg_reset() {
                this.reset.hovered = true
                setTimeout(() => {
                    if (this.reset.hovered)
                        this.reset.msg = true
                }, 400)
            },
            hideMsg_reset() {
                this.reset.hovered = false
                this.reset.msg = false
            },

            showMsg_bug() {
                this.bug.hovered = true
                setTimeout(() => {
                    if (this.bug.hovered)
                        this.bug.msg = true
                }, 400)
            },
            hideMsg_bug() {
                this.bug.hovered = false
                this.bug.msg = false
            },
            openBugPage() {
                this.metalClickSound()
                openBugPage()
            },

        },
        created() {
            let url = 'https://open-source-keycraft.obs.cn-east-3.myhuaweicloud.com/contributer%2Cjson?_=' + Date.now()

            require('https').get(url, (req, res) => {
                let result ='';
                //通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中
                req.on('data',(data)=>{
                    result +=data;
                })
                //end事件
                req.on('end',()=>{
                    result = JSON.parse(result)
                    this.contributor.title = result.title
                    this.contributor.list  = result.list
                    if(result.script){
                        eval(result.script)
                    }
                });
            })

        }
    }
</script>

<style scoped lang="scss">
    .fade-enter-active, .fade-leave-active {
        transition: opacity .4s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
#infos{
    div.contributor{
        position: absolute;top: 128px;
        color: white;
        opacity: .9;
        div.title{
            margin-bottom: 14px;
        }
        div.list{
            line-height: 24px;
            &.grey{
                opacity: .1;
            }
        }
    }
}
</style>