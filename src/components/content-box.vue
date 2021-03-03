<template>
    <div class="content">
        <el-row type="flex" justify="space-between" class="cheader">
            <el-col :span="6" class="title">{{goods.title}}</el-col>
            <el-col :span="16" class="tab"><div v-for="(item,index) in goods.list" :key="index" :class="{'active':nowKey === index}" @mouseenter="changeKey(index)">{{item.title}}</div></el-col>
        </el-row>
        <el-row>
            <el-col :span="24" class="content-flex">
                <div class="content-box" v-for="item in tabGoods" :key="item.id">
                   <div class="bg">
                       <div class="imgb">
                           <el-image  :src="item.img" fit="cover" lazy></el-image>
                       </div>
                       <div class="title-box">
                           <div class="title">{{item.title}}</div>
                           <div class="price">{{item.price}}</div>
                       </div>
                   </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import {mapMutations} from 'vuex'

    export default {
        props: {
            goods:{
                type: Object,
                default: function () {
                    return {
                        title:"测试",
                        list:[
                            {
                                title:"测试1",
                                id:"aa",
                                good:[
                                    {
                                        id:"a1",
                                        title:"Reno5 Pro+ 星河入梦",
                                        price:3999,
                                        img:"https://dsfs.oppo.com/archives/202012/202012090512105fd093fab628f.png?x-oss-process=image/format,webp"
                                    },
                                    {
                                        id:"a2",
                                        title:"Reno5 Pro+ 星河入梦",
                                        price:3999,
                                        img:"https://dsfs.oppo.com/archives/202012/202012090512105fd093fab628f.png?x-oss-process=image/format,webp"
                                    },
                                    {
                                        id:"a3",
                                        title:"Reno5 Pro+ 星河入梦",
                                        price:3999,
                                        img:"https://dsfs.oppo.com/archives/202012/202012090512105fd093fab628f.png?x-oss-process=image/format,webp"
                                    },
                                    {
                                        id:"a4",
                                        title:"Reno5 Pro+ 星河入梦",
                                        price:3999,
                                        img:"https://dsfs.oppo.com/archives/202012/202012090512105fd093fab628f.png?x-oss-process=image/format,webp"
                                    },
                                    {
                                        id:"a5",
                                        title:"Reno5 Pro+ 星河入梦",
                                        price:3999,
                                        img:"https://dsfs.oppo.com/archives/202012/202012090512105fd093fab628f.png?x-oss-process=image/format,webp"
                                    },
                                    {
                                        id:"a6",
                                        title:"Reno5 Pro+ 星河入梦",
                                        price:3999,
                                        img:"https://dsfs.oppo.com/archives/202012/202012090512105fd093fab628f.png?x-oss-process=image/format,webp"
                                    },
                                    {
                                        id:"a7",
                                        title:"Reno5 Pro+ 星河入梦",
                                        price:3999,
                                        img:"https://dsfs.oppo.com/archives/202012/202012090512105fd093fab628f.png?x-oss-process=image/format,webp"
                                    },
                                ]
                            },
                            {
                                title:"测试2",
                                id:"bb",
                                good:[
                                    {
                                        id:"b1",
                                        title:"Reno5 Pro+ 星河入梦",
                                        price:3999,
                                        img:"https://dsfs.oppo.com/archives/202012/202012090512105fd093fab628f.png?x-oss-process=image/format,webp"
                                    },
                                    {
                                        id:"b2",
                                        title:"Reno5 Pro+ 星河入梦",
                                        price:3999,
                                        img:"https://dsfs.oppo.com/archives/202012/202012090512105fd093fab628f.png?x-oss-process=image/format,webp"
                                    },
                                    {
                                        id:"b3",
                                        title:"Reno5 Pro+ 星河入梦",
                                        price:3999,
                                        img:"https://dsfs.oppo.com/archives/202012/202012090512105fd093fab628f.png?x-oss-process=image/format,webp"
                                    },
                                    {
                                        id:"b4",
                                        title:"Reno5 Pro+ 星河入梦",
                                        price:3999,
                                        img:"https://dsfs.oppo.com/archives/202012/202012090512105fd093fab628f.png?x-oss-process=image/format,webp"
                                    },
                                    {
                                        id:"b5",
                                        title:"Reno5 Pro+ 星河入梦",
                                        price:3999,
                                        img:"https://dsfs.oppo.com/archives/202012/202012090512105fd093fab628f.png?x-oss-process=image/format,webp"
                                    },
                                ]
                            }
                        ],
                    }
                }
            }
        },
        data: function () {
            return {
                nowKey:0
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
            },
            changeKey(ind){
                this.nowKey = ind;
                console.log(this.nowKey)
            }
        },
        computed:{
            tabGoods(){
                return this.goods.list[this.nowKey].good
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
    @import '../style/mixin';
    .content{
        .wh(900px,auto);
        margin: 0 auto;
    }
    .cheader{
        height: 89px;
        padding-top:32px;
        padding-bottom:23px;
        .title{
            .ft(22px,33px,#333)
        }
        .tab{
            .fj(flex-end);
            .ft(15px,34px,#666);
            div{
                text-align: center;
                padding:0 16px;
                margin: 0 4px;
                cursor: pointer;
            }
            .active{
                color: #f34141;
                background: #fff;
                border-radius: 100px;
            }
        }
    }
    .content-flex{
        .fj(flex-start,flex-start);
        flex-wrap: wrap;
    }

    .content-box{
        width: 25%;
        height: 380px;
        padding: 10px;
        box-sizing: border-box;
        .bg{
            background: #fff;
            width: 100%;
            height: 100%;
            .fj(space-around,center,column);
            .title-box{
                .title{
                    margin-bottom:8.4px;
                    .ft(16px,16px,#333);
                    text-align: center;
                }
                .price{
                    .ft(16px,16px,#333);
                    text-align: center;
                }
            }
            .imgb{
                width: 100%;
                height: 183px;
                .fj(center,center)
            }
        }
    }
</style>
