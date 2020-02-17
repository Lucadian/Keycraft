<template>
    <div id="unit" class="box">
        <h2 class="subtitle">单位</h2>
        <ul>
            <li v-for="(val,name) in camp.units[camp.index]">
                <div @mouseup="showProps"
                     :style="setIcon(val)"
                     :class="{
                        activated:name === pond.activated,
                        icon_human:camp.index === 0,
                        icon_elf:camp.index === 1,
                        icon_orc:camp.index === 2,
                        icon_undead:camp.index === 3,
                        icon_neutral:camp.index === 4,
                      }"
                     :name="name"
                ></div>
            </li>
        </ul>
    </div>
</template>

<script>
    import { mapState,mapMutations } from 'vuex'
    export default {
        name: "units",
        data(){
            return {
            }
        },
        computed:{
            ...mapState(['camp','pond']),
        },
        methods:{
            ...mapMutations(['selectSound']),
            showProps(){
                let name = event.currentTarget.getAttribute('name')
                if(this.pond.activated !== name){
                    this.pond.activated = name
                    this.pond.props = this.camp.units[this.camp.index][name].btn
                    this.pond.currentKey = ''
                    this.pond.currentVal = ''
                    this.pond.editing = false
                    this.pond.proptype = 'unit'
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