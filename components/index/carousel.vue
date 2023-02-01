<template>
    <div class="m-index-carousel">
        <el-carousel :autoplay="true" @change="changeHandle">
            <el-carousel-item v-for="(item, i) in data" :key="i">
                <a :href="item.link" target="_blank" class="u-link" :style="style(item.img)">
                    <div class="box wp">
                        <span
                            class="title"
                            :class="active == i ? 'p-animation fadeInUp' : ''"
                            v-html="item.title"
                        ></span>
                        <span class="desc" :class="active == i ? 'p-animation-1 fadeInUp' : ''">{{ item.desc }}</span>
                        <span class="button">
                            <img class="arr" src="../../static/images/index/arr.svg" /> {{ item.button }}
                        </span>
                    </div>
                </a>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>
<script>
export default {
    props: ["data"],
    data() {
        return {
            active: "",
        };
    },
    methods: {
        changeHandle(e) {
            this.active = e;
        },
        style(link) {
            return {
                backgroundImage: `url(${require(`../../static/images/${link}`)})`,
            };
        },
    },
};
</script>

<style lang="less">
@import "~@/assets/css/components/carousel.less";
</style>
