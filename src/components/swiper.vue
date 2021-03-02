<template>
    <div class="block">
        <el-carousel height="600px" @change="changePage">
            <el-carousel-item v-for="(item,index) in tupian" :key="index">
                <el-image :src="item.url" style="height: 100%" fit="cover"></el-image>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
    import {mapMutations} from 'vuex'

    export default {
        props: {
            tupian:{
                type: Array,
                default: function () {
                    return [
                        {
                            url:"https://dsfs.oppo.com/archives/202103/20210301090311603c47dbd1a99.jpg?_w_=2880&_h_=1200&x-oss-process=image/format,webp",
                            shen:true
                        },
                        {
                            url:"https://dsfs.oppo.com/archives/202103/20210301120330603bc86e899f3.png?_w_=2880&_h_=1200&x-oss-process=image/format,webp",
                            shen:false
                        },
                        {
                            url:"https://dsfs.oppo.com/archives/202102/202102220702506033900e1a58f.jpg?_w_=2880&_h_=1200&x-oss-process=image/format,webp",
                            shen:false
                        }
                    ]
                }
            }
        },
        data: function () {
            return {
            }
        },
        beforeCreate(){
        },
        mounted(){
        },
        methods:{
            ...mapMutations(['saveShen']),
            changePage(nind){
                this.saveShen(this.tupian[nind].shen);
            }
        },
        computed:{
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
    @import '../style/mixin';
</style>
