<template>
    <ul id="camps">
        <li v-for="(name,idx) in camp.names"
            :class="{actived:idx === camp.index}"
            :index="idx"
            v-text="name"
            @click="selectCamp"
        />
    </ul>
</template>

<script>
    import { mapState,mapMutations } from 'vuex'
    export default {
        name: "camps",
        computed:{
            ...mapState(['camp','pond'])
        },
        methods:{
            ...mapMutations(['heavyClickSound']),
            selectCamp(){
                let index = parseInt(event.currentTarget.getAttribute('index'))
                if(this.camp.index !== index){
                    this.clearPond()
                    this.camp.index = index
                    this.heavyClickSound()
                }
                AABB = 'CCCC'
                alert(AABB)
            },
            clearPond(){
                    this.pond.activated  = ''
                    this.pond.currentKey = ''
                    this.pond.currentVal = ''
                    this.pond.currentTag = ''
                    this.pond.currentTip = ''
                    this.pond.proptype   = ''
                    this.pond.props      = []
                    this.pond.editing    = false
            }


        },
    }
</script>

<style scoped>

</style>