<template>
    <div id="app" class="fillcontain">
        <router-view style="height:100%" class="bg"></router-view>
    </div>
</template>

<script>
    export default {
        computed: {
            defaultActive: function(){
                return this.$route.path.replace('/', '');
            }
        },
    }
</script>

<style lang="less">
    @import '../style/mixin';
    .bg{
        background-color: @bg;
    }
</style>