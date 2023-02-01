<template>
    <div class="m-item-scenes wp" @mouseover="mouseover" @mouseout="mouseout">
        <div class="img wow animate__fadeInLeft">
            <img
                :src="require(`../../static/images/${data.bg}`)"
                class="p-animation-0"
                :class="{ scale, scale_move }"
            />
        </div>

        <div class="scenes-box wow animate__fadeInRight">
            <span class="label">{{ data.label }}</span>
            <span class="desc" v-for="(item, i) in data.list" :key="i">
                {{ item }}
            </span>
        </div>
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
        mouseover() {
            this.scale = true;
            this.scale_move = false;
        },
        mouseout() {
            this.scale = false;
            this.scale_move = true;
        },
    },
    watch: {
        data: {
            deep: true,
            handler: function (obj) {
                if (obj)
                    this.$nextTick(() => {
                        if (process.browser) new WOW({ animateClass: "animate__animated" }).init();
                    });
            },
        },
    },
};
</script>

<style lang="less">
@import "~@/assets/css/components/scenes.less";
</style>
