<template>
    <a target="_blank" :href="data.link" class="m-item-industry" @mouseover="mouseover" @mouseout="mouseout">
        <div class="m-box m-content">
            <span class="title">{{ data.title }}</span>
            <span class="desc">{{ data.desc }}</span>
            <span class="arr"><i class="el-icon-arrow-right"></i></span>
        </div>
        <div class="m-box p-animation-0" :class="{ scale, scale_move }" :style="style(data.bg)"></div>
    </a>
</template>
<script>
export default {
    props: ["data"],
    data() {
        return {
            scale: false,
            scale_move: false,
        };
    },
    methods: {
        showImg(link) {
            return require(`../../static/images/${link}`);
        },
        style(link) {
            return {
                backgroundImage: `url(${this.showImg(link)})`,
            };
        },
        mouseover() {
            this.scale = true;
            this.scale_move = false;
        },
        mouseout() {
            this.scale = false;
            this.scale_move = true;
        },
    },
};
</script>

<style lang="less">
@import "~@/assets/css/components/industry.less";
</style>
