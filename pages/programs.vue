<template>
    <div class="p-programs">
        <!-- 公共头部 -->
        <common-header></common-header>
        <!-- 内容 -->
        <client-only>
            <!-- 轮播 -->
            <index-carousel :data="programs.carousel"></index-carousel>
            <!-- tabs -->
            <page-tabs :data="tabs" :active="active" @update="update"></page-tabs>
            <div v-for="(item, key) in programs" :key="key" :id="key">
                <template v-if="key !== 'carousel'">
                    <page-title
                        class="wow animate__zoomIn"
                        v-if="item.title"
                        :data="{ title: item.title }"
                    ></page-title>
                    <page-programs class="wow animate__slideInUp" :data="item.info"></page-programs>
                </template>
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
            return Object.values(this.programs)
                .map((item) => item.title)
                .filter(Boolean);
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
        this.$nextTick(() => {
            if (process.browser) new WOW({ animateClass: "animate__animated" }).init();
        });
    },
};
</script>

<style lang="less">
#government {
    .pb(75px);
}
</style>
