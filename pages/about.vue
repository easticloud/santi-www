<template>
    <div class="p-about">
        <!-- 公共头部 -->
        <common-header></common-header>
        <!-- 内容 -->
        <client-only>
            <!-- 轮播 -->
            <index-carousel :data="about.carousel"></index-carousel>
            <!-- tabs -->
            <page-tabs :data="tabs" :active="active" @update="update"></page-tabs>
            <!-- 公司简介 -->
            <div v-for="(item, key) in about" :key="key" :id="key">
                <page-title :data="{ title: item.title }"></page-title>
                <template v-if="item.list">
                    <div class="m-content wp" :class="key">
                        <component
                            :is="showModal(key)"
                            v-for="(_item, i) in item.list"
                            :key="i"
                            :data="_item"
                        ></component>
                    </div>
                </template>
                <template v-else>
                    <component :is="showModal(key)" :data="item.info"></component>
                </template>
            </div>

            <!-- 渠道合作 -->
        </client-only>

        <!-- 公共底部 -->
        <common-footer></common-footer>
    </div>
</template>

<script>
import about from "@/assets/data/about.json";
export default {
    name: "IndexAbout",
    data() {
        return {
            about,
            active: "",
        };
    },
    computed: {
        tabs() {
            return Object.values(this.about).map((item) => item.title).filter(Boolean);
        },
    },
    methods: {
        update(name) {
            this.active = name;
            let _name = "";
            for (const key in this.about) {
                if (this.about[key].title == name) _name = key;
            }
            document.getElementById(_name).scrollIntoView();
        },
        showModal(key) {
            const data = {
                cooperation: "page-cooperation",
                info: "page-programs",
                inquiry: "page-inquiry",
                contact: "page-contact",
            };
            return data[key];
        },
    },
    mounted() {
        this.active = this.tabs[0];
    },
};
</script>

<style lang="less">
    @import "~@/assets/css/about.less";
</style>
