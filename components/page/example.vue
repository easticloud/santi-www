<template>
    <div class="m-item-example" :style="style(data.bg)">
        <img :src="showImg(data.icon)" class="img" />
        <span class="title">{{ data.title }}</span>
        <div class="buttons">
            <span class="u-btn" v-for="(item, i) in data.button" :key="i">{{ item }}</span>
        </div>
    </div>
</template>
<script>
export default {
    props: ["data"],
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
@import "~@/assets/css/components/example.less";
</style>
