<template>
    <div class="p-index">
        <!-- 公共头部 -->
        <common-header></common-header>
        <!-- 内容 -->
        <client-only>
            <!-- 轮播 -->
            <index-carousel></index-carousel>
            <!-- ai -->
            <index-ai></index-ai>
            <!-- 行业 -->
            <div class="m-industry">
                <page-title :data="industryTitle"></page-title>
                <div class="wp">
                    <index-industry v-for="(item, i) in industry.list" :key="i" :data="item"></index-industry>
                </div>
            </div>
            <!-- 合作伙伴 -->
            <div class="m-partners">
                <page-title :data="partnersTitle"></page-title>
                <a href="http://" target="_blank" class="button">立即入驻</a>
                <div class="icons wp">
                    <img
                        :src="require(`/static/images/index/partners/0${item}.png`)"
                        class="u-icon"
                        v-for="item in 8"
                        :key="item"
                    />
                </div>
            </div>
        </client-only>

        <!-- 公共底部 -->
        <common-footer></common-footer>
    </div>
</template>

<script>
import { industry, partners } from "@/assets/data/index.json";
export default {
    name: "IndexPage",
    data() {
        return {
            industry,
            partners,
        };
    },
    computed: {
        industryTitle() {
            return {
                title: this.industry.title,
                desc: this.industry.desc,
            };
        },
        partnersTitle() {
            return {
                title: this.partners.title,
                desc: this.partners.desc,
            };
        },
    },
    methods: {},
};
</script>

<style lang="less">
@import "~@/assets/css/index.less";
</style>
