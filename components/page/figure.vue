<template>
    <div class="m-item-figure" :style="style(data)"></div>
</template>
<script>
export default {
    props: ["data"],
    methods: {
        style(data) {
            return {
                backgroundImage: `url(${require(`../../static/images/${data}`)})`,
            };
        },
    },
};
</script>

<style lang="less">
.m-item-figure {
    .size(590px,250px);
    .r(5px);
    background-size: 590px 250px;
    background-repeat: no-repeat;
    background-position: top center;
    background-color: #fff;
}
</style>
