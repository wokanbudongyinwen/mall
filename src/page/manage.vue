<template>
    <div id="app" class="fillcontain">
        <router-view style="height:100%"></router-view>
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
    body{
        background: @bg;
    }
</style>