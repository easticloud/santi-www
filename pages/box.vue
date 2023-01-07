<template>
    <div class="p-box">
        <!-- 公共头部 -->
        <common-header></common-header>
        <!-- 内容 -->
        <client-only>
            <!-- 轮播 -->
            <index-carousel></index-carousel>
            <!-- tabs -->
            <!-- 产品介绍 -->
            <!-- 产品图例 -->
            <!-- 核心功能 -->
            <!-- 产品优势 -->
            <!-- 应用场景 -->
        </client-only>

        <!-- 公共底部 -->
        <common-footer></common-footer>
    </div>
</template>

<script>
import { figure, core, products, scenes } from "@/assets/data/box.json";
export default {
    name: "IndexBox",
    data() {
        return {};
    },
    computed: {},
    methods: {},
};
</script>

<style lang="less">
@import "~@/assets/css/box.less";
</style>
