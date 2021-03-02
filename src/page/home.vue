<template>
<div>
    <head-top></head-top>
    <swiper></swiper>

</div>
</template>
<script>
    import headTop from "../components/headTop.vue"
    import swiper from "../components/swiper.vue"
    export default {
        data(){
            return {
                userCount: 10,
                orderCount: 20,
                adminCount: 10,
                allUserCount: 20,
                allOrderCount: 10,
                allAdminCount: 20,
                sevenDay: ["2020-12-01","2020-12-04","2020-12-07","2020-12-10","2020-12-13","2020-12-16","2020-12-19"],
                sevenDate: [[39,25,63,84,55,44,98],[45,65,78,96,25,34,79],[88,77,66,22,11,55,33]],
                items: [1,2,3,4,5,6,7,8,9],
                nextNum: 10
            }
        },
        components: {
            headTop,swiper
        },
        mounted(){
        },
        computed: {
        },
        methods: {
            randomIndex: function () {
                return Math.floor(Math.random() * this.items.length)
            },
            add: function () {
                this.items.splice(this.randomIndex(), 0, this.nextNum++)
            },
            remove: function () {
                this.items.splice(this.randomIndex(), 1)
            },
        }
    }
</script>
<style lang="less">
    @import '../style/mixin';
    .data_section{
        padding: 20px;
        margin-bottom: 40px;
        .section_title{
            text-align: center;
            font-size: 30px;
            margin-bottom: 10px;
        }
        .data_list{
            text-align: center;
            font-size: 14px;
            color: #666;
            border-radius: 6px;
            background: #E5E9F2;
            .data_num{
                color: #333;
                font-size: 26px;
            }
            .head{
                border-radius: 6px;
                font-size: 22px;
                padding: 4px 0;
                color: #fff;
                display: inline-block;
            }
        }
        .today_head{
            background: #FF9800;
        }
        .all_head{
            background: #20A0FF;
        }
    }
    .wan{
        .sc(16px, #333)
    }
    .list-item {
        display: inline-block;
        margin-right: 10px;
    }
    .list-enter-active, .list-leave-active {
        transition: all 1s;
    }
    .list-enter, .list-leave-to
        /* .list-leave-active for below version 2.1.8 */ {
        opacity: 0;
        transform: translateY(30px);
    }
</style>