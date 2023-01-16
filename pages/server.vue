<template>
    <div class="p-server">
        <!-- 公共头部 -->
        <common-header></common-header>
        <!-- 内容 -->
        <client-only>
            <!-- 轮播 -->
            <index-carousel :data="server.carousel"></index-carousel>
            <!-- tabs -->
            <page-tabs :data="tabs" :active="active" @update="update"></page-tabs>
            <!-- 产品介绍 -->
            <div v-for="(item, key) in server" :key="key" :id="key">
                <page-title :data="{ title: item.title }"></page-title>

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
            </div>
        </client-only>

        <!-- 公共底部 -->
        <common-footer></common-footer>
    </div>
</template>

<script>
import server from "@/assets/data/server.json";
export default {
    name: "IndexServer",
    data() {
        return {
            server,
            active: "",
            scenes: "",
        };
    },
    computed: {
        tabs() {
            return Object.values(this.server).map((item) => item.title).filter(Boolean);
        },
    },
    methods: {
        update(name) {
            this.active = name;
            let _name = "";
            for (const key in this.server) {
                if (this.server[key].title == name) _name = key;
            }
            document.getElementById(_name).scrollIntoView();
        },
        showModal(key) {
            const data = {
                info: "page-info",
                figure: "page-figure",
                core: "page-core",
                scenes: "page-appliance",
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
.p-server {
    .m-content {
        .flex;
        flex-wrap: wrap;
        gap: 20px;
    }
    #scenes{
        .pb(75px);
    }
}
</style>
