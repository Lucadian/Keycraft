<template>
    <div id="buttons" class="box">
        <h2 class="subtitle">按钮</h2>
        <div class="button" v-for="item in props"
             :style="setPosition(item) + setIcon(item)"
        >
            {{ item.tip }}
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: "props",
        computed:{
            ...mapState(['props']),

        },
        methods:{
            setPosition(btn){
                return 'left:' + (btn.pos[0]-1)*78 + 'px;top:' + (btn.pos[1]-1)*78 + 'px;'
            },
            setIcon(btn){
                return 'background-position:-' + (btn.ico[0]-1)*70 + 'px -' + (btn.ico[1]-1)*70 + 'px;'
            }
        }
    }
</script>

<style scoped lang="scss">

</style>