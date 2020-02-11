<template>
    <div id="unit" class="box">
        <h2 class="subtitle">单位</h2>
        <ul>
            <li v-for="(val,key) in units.human_unit">
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
        name: "units",
        computed:{
            ...mapState(['units'])
        },
        methods:{
            ...mapMutations(['selectSound']),
            showProps(){
                let name = event.currentTarget.getAttribute('name')
                if(this.units.activated !== name){
                    this.units.activated = name
                    this.units.props = this.units.human_unit[name].btn
                    this.units.currentKey = ''
                    this.units.currentVal = ''
                    this.units.editing = false
                    this.units.proptype = 'unit'
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