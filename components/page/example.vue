<template>
    <div class="m-item-example" @mouseover="mouseover" @mouseout="mouseout">
        <div class="m-box m-content">
            <img :src="showImg(data.icon)" class="img" />
            <span class="title">{{ data.title }}</span>
            <div class="buttons">
                <span class="u-btn" v-for="(item, i) in data.button" :key="i">{{ item }}</span>
            </div>
        </div>
        <div class="m-box p-animation-0" :class="{ scale, scale_move }" :style="style(data.bg)"></div>
    </div>
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
@import "~@/assets/css/components/example.less";
</style>
