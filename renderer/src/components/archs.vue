<template>
    <div id="archs" class="box">
        <h2 class="subtitle">建筑</h2>
        <ul>
            <li v-for="(val,key) in units.human_arch">
                <div @mouseup="showProps"
                     :style="setIcon(val)"
                     :class="{activated:key === units.activated}"
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
            ...mapState(['units'])
        },
        watch:{

        },
        methods:{
            ...mapMutations(['selectSound']),
            showProps(){
                let name = event.currentTarget.getAttribute('name')
                if(this.units.activated !== name){
                    this.units.activated = name
                    this.units.props = this.units.human_arch[name].btn
                    this.units.currentKey = ''
                    this.units.currentVal = ''
                    this.units.proptype = 'arch'
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