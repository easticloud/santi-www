<template>
    <div class="p-box">
        <!-- 公共头部 -->
        <common-header></common-header>
        <!-- 内容 -->
        <client-only>
            <!-- 轮播 -->
            <index-carousel></index-carousel>
            <!-- tabs -->
            <page-tabs :data="tabs" :active="active" @update="update"></page-tabs>
            <!-- 产品介绍 -->
            <div v-for="(item, key) in box" :key="key" :id="key">
                <page-title :data="{ title: item.title }"></page-title>
                <template v-if="key == 'scenes'">
                    <page-tabs :data="scenesTabs" :active="scenes" @update="showItem" :background="true"></page-tabs>
                    <page-scenes :data="scenesItem"></page-scenes>
                </template>
                <template v-else>
                    <template v-if="item.list">
                        <div class="m-content wp">
                            <component
                                :is="showModal(key)"
                                v-for="(_item, i) in item.list"
                                :key="i"
                                :data="_item"
                            ></component>
                        </div>
                    </template>
                    <component v-else :is="showModal(key)" :data="item"></component>
                </template>
            </div>
        </client-only>

        <!-- 公共底部 -->
        <common-footer></common-footer>
    </div>
</template>

<script>
import box from "@/assets/data/box.json";
export default {
    name: "IndexBox",
    data() {
        return {
            box,
            active: "",
            scenes: "",
        };
    },
    computed: {
        tabs() {
            return Object.values(this.box).map((item) => item.title);
        },
        scenesTabs() {
            return this.box.scenes.list.map((item) => item.title);
        },
        scenesItem() {
            return this.box.scenes.list.filter((item) => item.title == this.scenes)[0];
        },
    },
    methods: {
        update(name) {
            this.active = name;
            let _name = "";
            for (const key in this.box) {
                if (this.box[key].title == name) _name = key;
            }
            document.getElementById(_name).scrollIntoView();
        },
        showItem(name) {
            this.scenes = name;
        },

        showModal(key) {
            const data = {
                info: "page-info",
                figure: "page-figure",
                core: "page-core",
                products: "page-core",
            };
            return data[key];
        },
    },
    mounted() {
        this.active = this.tabs[0];
        this.scenes = this.scenesTabs[0];
    },
};
</script>

<style lang="less">
.p-box {
    .m-content {
        .flex;
        flex-wrap: wrap;
        gap: 20px; 
    }
}
</style>
