<template>
    <div class="p-ai">
        <!-- 公共头部 -->
        <common-header></common-header>
        <!-- 内容 -->
        <client-only>
            <!-- 轮播 -->
            <index-carousel></index-carousel>
            <page-tabs :data="tabs" :active="active" @update="update"></page-tabs>
            <div class="m-content">
                <page-title :data="{ title: active }"></page-title>
                <div class="wp" v-if="changeTab">
                    <page-example v-for="(item, i) in changeTab.list" :key="i" :data="item"></page-example>
                </div>
            </div>
        </client-only>

        <!-- 公共底部 -->
        <common-footer></common-footer>
    </div>
</template>

<script>
import ai from "@/assets/data/ai.json";
export default {
    name: "IndexAI",
    data() {
        return {
            ai,
            active: "",
        };
    },
    computed: {
        tabs() {
            return Object.values(this.ai).map((item) => item.name);
        },
        changeTab() {
            return Object.values(this.ai).filter((item) => item.name == this.active)[0];
        },
    },
    methods: {
        update(key) {
            this.active = key;
        },
    },
    mounted() {
        this.active = this.tabs[0];
    },
};
</script>

<style lang="less">
.p-ai {
    .m-content {
        .pb(75px);
        .wp {
            .flex;
            flex-wrap: wrap;
            gap: 20px;
        }
    }
}
</style>
