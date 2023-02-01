<template>
    <div class="p-ai">
        <!-- 公共头部 -->
        <common-header></common-header>
        <!-- 内容 -->
        <client-only>
            <!-- 轮播 -->
            <index-carousel :data="ai.carousel"></index-carousel>
            <page-tabs :data="tabs" :active="active" @update="update"></page-tabs>
            <div
                class="m-content" 
                v-for="(item, key) in aiList"
                :key="key"
                :id="key"
            >
                <page-title class="wow animate__zoomIn" :data="{ title: item.title }"></page-title>
                <div class="wp wow animate__slideInUp">
                    <page-example v-for="(example, i) in item.list" :key="i" :data="example"></page-example>
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
        aiList() {
            return Object.values(this.ai).filter((item) => item.title);
        },
        tabs() {
            return Object.values(this.aiList).map((item) => item.title);
        },
    },
    methods: {
        update(name) {
            this.active = name;
            let _name = "";
            for (const key in this.aiList) {
                if (this.aiList[key].title == name) _name = key;
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
.p-ai .m-content {
    .pb(75px);
    .wp {
        .flex;
        flex-wrap: wrap;
        gap: 20px;
    }
}

@media screen and (max-width: @phone) {
    .p-ai .m-content {
        .pb(30px);
        .wp {
            justify-content: center;
        }
    }
}
</style>
