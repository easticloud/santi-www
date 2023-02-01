<template>
    <div class="m-item-figure" @mouseover="mouseover" @mouseout="mouseout">
        <div class="img p-animation-0" :class="{ scale, scale_move }" :style="style(data)"></div>
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
        style(data) {
            return {
                backgroundImage: `url(${require(`../../static/images/${data}`)})`,
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
.m-item-figure {
    .size(590px,250px);
    .r(5px);
    .clip;
    .img {
        .full;
        background-size: 590px 250px;
        background-repeat: no-repeat;
        background-position: top center;
        background-color: #fff;
    }
}
@media screen and (max-width: @phone) {
    .m-item-figure {
        .w(100%);
        .img {
            background-size: contain;
            background-position: center center;
        }
    }
}
</style>
