<template>
    <div class="p-programs">
        <!-- 公共头部 -->
        <common-header></common-header>
        <!-- 内容 -->
        <client-only>
            <!-- 轮播 -->
            <index-carousel></index-carousel>
            <!-- tabs -->
            <page-tabs :data="tabs" :active="active" @update="update"></page-tabs>
            <div v-for="(item, key) in programs" :key="key" :id="key">
                <page-title :data="{ title: item.title }"></page-title>
                <page-programs :data="item.info"></page-programs>
            </div>
        </client-only>

        <!-- 公共底部 -->
        <common-footer></common-footer>
    </div>
</template>

<script>
import programs from "@/assets/data/programs.json";
export default {
    name: "IndexPrograms",
    data() {
        return {
            programs,
            active: "",
        };
    },
    computed: {
        tabs() {
            return Object.values(this.programs).map((item) => item.title);
        },
    },
    methods: {
        update(name) {
            this.active = name;
            let _name = "";
            for (const key in this.programs) {
                if (this.programs[key].title == name) _name = key;
            }
            document.getElementById(_name).scrollIntoView();
        },
    },
    mounted() {
        this.active = this.tabs[0];
    },
};
</script>

<style lang="less">
#government{
    .pb(75px);
}
</style>
