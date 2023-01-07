<template>
    <a target="_blank" :href="data.link" class="m-item-industry" :style="style(data.bg)">
        <span class="title">{{ data.title }}</span>
        <span class="desc">{{ data.desc }}</span> 
        <span class="arr"><i class="el-icon-arrow-right"></i></span>
    </a>
</template>
<script>
export default {
    props: ["data"],
    data() {
        return {
            img: "../../static/images/",
        };
    },
    computed: {},
    methods: {
        showImg(link) {
            return require(`../../static/images/${link}`);
        },
        style(link) {
            return {
                backgroundImage: `url(${this.showImg(link)})`,
            };
        },
    },
};
</script>

<style lang="less">
@import "~@/assets/css/components/industry.less";
</style>
