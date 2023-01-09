<template>
    <div class="m-index-carousel">
        <el-carousel :autoplay="true" @change="changeHandle">
            <el-carousel-item v-for="(item, i) in carousel" :key="i">
                <a :href="item.link" target="_blank" class="u-link" :class="`u-link-${i + 1}`">
                    <div class="box wp">
                        <span class="title" v-html="item.title"></span>
                        <span class="desc">{{ item.desc }}</span>
                        <span class="button"><img class="arr" src="../../static/images/index/arr.svg"> 查看更多</span>
                    </div>
                </a>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>
<script>
import { carousel } from "@/assets/data/index.json";
export default {
    data() {
        return {
            carousel,
        };
    },
    methods: {
        changeHandle() {},
    },
};
</script>

<style lang="less">
    @import "~@/assets/css/components/carousel.less";
</style>
