<template>
    <div id="archs" class="box">
        <h2 class="subtitle">建筑</h2>
        <ul>
            <li v-for="(val,key) in camp.archs[camp.index]">
                <div @mouseup="showProps"
                     :style="setIcon(val)"
                     :class="{
                        activated:key === pond.activated && key !== '空位',
                        icon_human:camp.index === 0,
                        icon_elf:camp.index === 1,
                        icon_orc:camp.index === 2,
                        icon_undead:camp.index === 3,
                        icon_neutral:camp.index === 4,
                        }"
                     :name="key"
                ></div>
            </li>
        </ul>
    </div>
</template>

<script>
    import { mapState,mapMutations } from 'vuex'
    export default {
        name: "archs",
        data(){
            return {
            }
        },
        computed:{
            ...mapState(['camp','pond'])
        },
        watch:{

        },
        methods:{
            ...mapMutations(['selectSound']),
            showProps(){
                let name = event.currentTarget.getAttribute('name')
                if(this.pond.activated !== name && name !== '空位'){
                    this.pond.activated = name
                    this.pond.props = this.camp.archs[this.camp.index][name].btn
                    this.pond.currentKey = ''
                    this.pond.currentVal = ''
                    this.pond.editing = false
                    this.pond.proptype = 'arch'
                    setTimeout(()=>{
                        this.pond.warning = ''
                    },1000)
                    this.selectSound()
                }
            },
            setIcon(btn){
                return 'background-position:-' + (btn.ico[0]-1)*70 + 'px -' + (btn.ico[1]-1)*70 + 'px;'
            }
        }
    }
</script>

<style scoped>

</style>