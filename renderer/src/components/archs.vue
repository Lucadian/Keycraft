<template>
    <div id="archs" class="box">
        <h2 class="subtitle">建筑</h2>
        <ul>
            <li v-for="(val,key) in human_arch">
                <div @mouseup="setProps" :name="key">{{ key }}</div>
            </li>
        </ul>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: "archs",
        computed:{
            ...mapState(['human_arch','props'])
        },
        methods:{
            setProps(){
                this.$store.state.props = this.human_arch[event.currentTarget.getAttribute('name')].btn
            }
        }
    }
</script>

<style scoped>

</style>