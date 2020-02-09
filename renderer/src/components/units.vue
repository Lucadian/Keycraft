<template>
    <div id="unit" class="box">
        <h2 class="subtitle">单位</h2>
        <ul>
            <li v-for="n in 16">
                <div >{{ n }}</div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "units"
    }
</script>

<style scoped>

</style>