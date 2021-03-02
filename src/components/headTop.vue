<template>
    <header class="herder-box">
        <div :class="['bassTab',{'showTab':nowTab>= 0}]"></div>
        <ul class="menu-box">
            <li v-for="(item,index) in menu" :key="item.key" :class="['text-base',{'t-white':nowshen && nowTab<0}]" @mouseenter="changeTab(index)">{{item.name}}</li>
        </ul>
        <ul  class="menu-content" v-show="nowTab>= 0">
            <li @mouseleave="overTab()" >
                <transition-group v-bind:css="false" v-on:before-enter="beforeEnter" v-on:enter="tenter" class="content-base">
                    <div v-for = "(ite,ind) in computedList"  :key="ite.id" :data-index="ind" :v-bind:key="ite.id" :data-id="ite.id" :data-url="ite.url || ''" class="child" @click="jumpPage(ite.type,$event)">
                        <div class="img-box">
                            <img :src="ite.img" alt="">
                        </div>
                        <h1>{{ite.name}}</h1>
                    </div>
                </transition-group>
            </li>
        </ul>
    </header>

</template>

<script>
    import Velocity from 'velocity-animate'
    import {mapState} from 'vuex'

    export default {
        props: {
            msg: String,
        },
        data: function () {
            return {
                menu:[
                    {
                        name:"OPPO专区",
                        key:"1",
                        child:[
                            {
                                name:"Reno5 Pro+",
                                img:"https://dsfs.oppo.com/archives/202012/202012240512255fe4628180537.png?x-oss-process=image/format,webp",
                                type:"pro",
                                id:"11",
                            },
                            {
                                name:"Reno5 Pro",
                                img:"https://dsfs.oppo.com/archives/202012/202012290212185fead16e95b8f.png?x-oss-process=image/format,webp",
                                type:"pro",
                                id:"12",
                            },
                            {
                                name:"Reno5",
                                img:"https://dsfs.oppo.com/archives/202012/202012140512475fd7353bcd5cf.png?x-oss-process=image/format,webp",
                                type:"pro",
                                id:"13",
                            },
                            {
                                name:"A93",
                                img:"https://dsfs.oppo.com/archives/202101/2021011504013060014f9a54733.png?x-oss-process=image/format,webp",
                                type:"pro",
                                id:"14",
                            },
                            {
                                name:"更多",
                                img:"https://dsfs.oppo.com/archives/202101/2021011504013060014f9a54733.png?x-oss-process=image/format,webp",
                                type:"list",
                                id:"1",
                            }
                        ]
                    },
                    {
                        name:"一加专区",
                        key:"2",
                        child:[
                            {
                                name:"OnePlus 8T",
                                img:"https://dsfs.oppo.com/archives/202011/202011041111455fa21ce1cc046.png?x-oss-process=image/format,webp",
                                type:"pro",
                                id:"21",
                            },
                            {
                                name:"OnePlus 8",
                                img:"https://dsfs.oppo.com/archives/202011/202011041111225fa21d06ed376.png?x-oss-process=image/format,webp",
                                type:"pro",
                                id:"22",
                            },
                            {
                                name:"OnePlus 8 Pro",
                                img:"https://dsfs.oppo.com/archives/202011/202011041111365fa21d14ae52d.png?x-oss-process=image/format,webp",
                                type:"pro",
                                id:"23",
                            },
                            {
                                name:"更多",
                                img:"https://dsfs.oppo.com/archives/202010/202010301010105f9c2642acacc.png?x-oss-process=image/format,webp",
                                type:"list",
                                id:"2",
                            }
                        ]
                    },
                    {
                        name:"realme专区",
                        key:"3",
                        child:[
                            {
                                name:"V系列",
                                img:"https://dsfs.oppo.com/archives/202101/20210118040126600543da5718c.png?x-oss-process=image/format,webp",
                                type:"pro",
                                id:"31",
                            },
                            {
                                name:"X7系列",
                                img:"https://dsfs.oppo.com/archives/202010/202010290310575f9a72bd0ac96.png?x-oss-process=image/format,webp",
                                type:"pro",
                                id:"32",
                            },
                            {
                                name:"Q2系列",
                                img:"https://dsfs.oppo.com/archives/202010/202010290310585f9a72fa494b4.png?x-oss-process=image/format,webp",
                                type:"pro",
                                id:"33",
                            },
                            {
                                name:"X50系列",
                                img:"https://dsfs.oppo.com/archives/202010/202010290310255f9a72d99a067.png?x-oss-process=image/format,webp",
                                type:"pro",
                                id:"34",
                            },
                            {
                                name:"真我Buds Q",
                                img:"https://dsfs.oppo.com/archives/202010/202010290310015f9a7339a4382.png?x-oss-process=image/format,webp",
                                type:"pro",
                                id:"35",
                            },
                            {
                                name:"更多",
                                img:"https://dsfs.oppo.com/archives/202010/202010290710345f9aa942632ac.png?x-oss-process=image/format,webp",
                                type:"list",
                                id:"3",
                            }
                        ]
                    },
                    {
                        name:"智能硬件",
                        key:"4",
                        child:[
                            {
                                name:"OPPO智能电视R1",
                                img:"https://dsfs.oppo.com/archives/202101/20210118040126600543da5718c.png?x-oss-process=image/format,webp",
                                type:"pro",
                                id:"41",
                            },
                            {
                                name:"OPPO Enco X",
                                img:"https://dsfs.oppo.com/archives/202010/202010290310575f9a72bd0ac96.png?x-oss-process=image/format,webp",
                                type:"pro",
                                id:"42",
                            },
                            {
                                name:"真我Buds Air Pro",
                                img:"https://dsfs.oppo.com/archives/202010/202010290310585f9a72fa494b4.png?x-oss-process=image/format,webp",
                                type:"pro",
                                id:"43",
                            },
                            {
                                name:"OnePlus Buds Z",
                                img:"https://dsfs.oppo.com/archives/202010/202010290310015f9a7339a4382.png?x-oss-process=image/format,webp",
                                type:"pro",
                                id:"44",
                            }
                        ]
                    },
                    {
                        name:"智美心品",
                        key:"5",
                        child:[
                            {
                                name:"美的空气净化器",
                                img:"https://dsfs.oppo.com/archives/202011/202011030711355fa1422be6e1e.png?x-oss-process=image/format,webp",
                                type:"pro",
                                id:"51",
                            },
                            {
                                name:"美的除菌加湿器",
                                img:"https://dsfs.oppo.com/archives/202011/202011030711075fa1420f7c28a.png?x-oss-process=image/format,webp",
                                type:"pro",
                                id:"52",
                            },
                            {
                                name:"乐心只能体脂称S30",
                                img:"https://dsfs.oppo.com/archives/202011/202011030711085fa14288deed9.png?x-oss-process=image/format,webp",
                                type:"pro",
                                id:"53",
                            },
                            {
                                name:"Blicca 智能摄像头",
                                img:"https://dsfs.oppo.com/archives/202011/202011030711435fa14107aa5cf.png?x-oss-process=image/format,webp",
                                type:"pro",
                                id:"54",
                            },
                            {
                                name:"欧瑞博智能遥控器",
                                img:"https://dsfs.oppo.com/archives/202011/202011051011285fa407206b1ca.png?x-oss-process=image/format,webp",
                                type:"pro",
                                id:"55",
                            },
                        ]
                    },
                    {
                        name:"品牌",
                        key:"6",
                        child:[
                            {
                                name:"OPPO",
                                id:"61",
                                img:"https://dsfs.oppo.com/archives/202010/202010310810555f9d5adf8973c.png?x-oss-process=image/format,webp",
                                type:"url",
                                url:"https://www.oppo.com/cn/",
                            },
                            {
                                name:"一加官网",
                                id:"62",
                                img:"https://dsfs.oppo.com/archives/202010/202010310810465f9d5b4ebb15f.png?x-oss-process=image/format,webp",
                                type:"url",
                                url:"https://www.oneplus.com/cn",
                            },
                            {
                                name:"realme",
                                id:"63",
                                img:"https://dsfs.oppo.com/archives/202010/202010310810425f9d5b861fde8.png?x-oss-process=image/format,webp",
                                type:"url",
                                url:"https://www.realme.com/",
                            },
                        ]
                    },
                ],
                nowTab:-1
            }
        },
        beforeCreate(){
        },
        mounted(){
        },
        methods:{
            routePage(cmd){
                this.$router.push(cmd)
            },
            changeTab(key){
                this.nowTab = key;
            },
            overTab(){
                this.nowTab = -1
            },
            jumpPage(type,evn){
                let dom = evn.currentTarget.dataset;
                switch (type){
                    case 'pro':
                        console.log(dom.id);
                        break;
                    case 'list':
                        console.log(dom.id);
                        break;
                    case 'url':
                        console.log(dom.url);
                        window.open(dom.url)
                }
            },
            beforeEnter(el){
                el.style.transformOrigin = 'left';
                el.style.opacity = 0;
            },
            tenter(el,done){
                let delay = (el.dataset.index * 100) + 200;
                console.log(delay);
                setTimeout(function () {
                    Velocity(el, {opacity:1,translateY:-10},{ duration: 300 },{ complete: done })
                }, delay)
            }
        },
        computed:{
            ...mapState(['shen']),
            name () {
                return this.$store.state.adminInfo.Vipusnm
            },
            nowshen(){
                return this.$store.state.shen
            },
            computedList: function () {
//                let vm = this;
                if(this.menu[this.nowTab]){
                    return this.menu[this.nowTab].child.filter((item)=>{
                        return this.nowTab === parseInt(item.id.slice(0,1)) - 1
                    })
                }else {
                    return []
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
    @import '../style/mixin';
    body{
        background: #aaa;
    }
    .herder-box{
        position: absolute;
        right: 0;
        top: 0;
        width: 100%;
        height: 300px;
        z-index: 999;
        &:after{
            content:"";
            clear: both;
        }
    }
    .menu-box{
        .fj(space-around);
        .allcover;
        width:100%;
    }
   .text-base{
       .ft(20px,88px,#000);
       cursor: pointer;
       &:hover{
           color:@bc;
       }
   }
    .t-white{
        color: #fff;
    }
       .child{
           display: block;
           h1{
               font-size: 18px;
               text-align: center;
               font-weight:normal;
               color: #333333;
           }
           &:hover{
               h1{
                   color: @bc;
               }
           }
       }
       .menu-content{
           .wh(100%,233px);
           position: absolute;
           top: 90px;
           left: 0;
       }
    .content-base{
        .fj(space-around);
        padding:34px 0;

    }
    .img-box{
        width: 100%;
        height: 92px;
        position: relative;
        cursor: pointer;

        img{
            height: 100%;
            width: auto;
            .ctt;
        }
    }
    .tlist-enter-active{
        transition: all 10s;
    }
    .tlist-leave-active {
        transition: all 0s;
    }
    .tlist-enter
    {
        height: 10px;
    }

    .bassTab{
        .wh(100%,0);
        background: @fc;
    }

    @keyframes openBox {
        from { height: 0;}
        to { height: 100%;}
    }

    @-webkit-keyframes openBox
    {
        from { height: 0;}
        to { height: 100%;}
    }

    .showTab{
        animation: openBox .2s linear;
        height: 100%;
    }

</style>
