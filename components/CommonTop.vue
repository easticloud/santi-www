<template>
    <div class="m-common-top" ref="goTop" v-if="activeShow" @click="goTop">
        <img src="../static/images/top.svg" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeShow: false,
        };
    },

    methods: {
        goTop() {
            document.documentElement.scrollIntoView({ behavior: "smooth" });
        },
        handleScroll() {
            const height = document.documentElement.scrollTop || document.body.scrollTop;
            if (height > 500) {
                this.activeShow = true;
            } else {
                this.activeShow = false;
            }
        },
    },
    mounted() {
        //监听滚动条
        window.addEventListener("scroll", this.handleScroll, true);
    },
};
</script>

<style scope lang="less">
.m-common-top {
    .pf;
    .r(50%);
    .size(30px);
    .rb(10px,30px);
    background: #fff;
}
</style>
