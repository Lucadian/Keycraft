<template>
    <ul id="camps">
        <li v-for="(name,idx) in camp.names"
            :class="{actived:idx === camp.index}"
            :index="idx"
            v-text="name"
            @mouseup="selectCamp"
        />
    </ul>
</template>

<script>
    import { mapState,mapMutations } from 'vuex'
    export default {
        name: "camps",
        computed:{
            ...mapState(['camp'])
        },
        methods:{
            ...mapMutations(['heavyClickSound']),
            selectCamp(){
                let index = parseInt(event.currentTarget.getAttribute('index'))
                if(this.camp.index !== index){
                    this.camp.index = index
                    this.heavyClickSound()
                }
            },


        },
    }
</script>

<style scoped>

</style>