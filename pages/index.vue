<template>
    <div class="p-index">
        <!-- 公共头部 -->
        <common-header></common-header>
        <!-- 内容 -->
        <client-only>
            <!-- 轮播 -->
            <index-carousel :data="carousel"></index-carousel>
            <!-- ai -->
            <index-ai></index-ai>
            <!-- 行业 -->
            <div class="m-industry">
                <page-title class="wow animate__fadeInUp" :data="industryTitle"></page-title>
                <div class="wp wow animate__fadeInUp">
                    <index-industry v-for="(item, i) in industry.list" :key="i" :data="item"></index-industry>
                </div>
            </div>
            <div class="m-wave"></div>
            <!-- 合作伙伴 -->
            <div class="m-partners">
                <page-title class="wow animate__fadeInUp" :data="partnersTitle"></page-title>
                <a href="/about#contact" target="_blank" class="button wow animate__fadeInUp">
                    <img class="arr" src="../static/images/index/arr.svg" /> 立即入驻
                </a>
                <div class="icons wp wow animate__fadeInUp">
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
import { carousel, industry, partners } from "@/assets/data/index.json";
export default {
    name: "IndexPage",
    data() {
        return {
            industry,
            partners,
            carousel,
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
    updated() {
        this.$nextTick(() => {
            if (process.browser) {
                new WOW({ animateClass: "animate__animated" }).init();
            }
        });
    },
};
</script>

<style lang="less">
@import "~@/assets/css/index.less";
</style>
