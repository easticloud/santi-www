<template>
    <div class="p-ai">
        <!-- 公共头部 -->
        <common-header></common-header>
        <!-- 内容 -->
        <client-only>
            <!-- 轮播 -->
            <index-carousel></index-carousel>
            <page-tabs :data="tabs" :active="active" @update="update"></page-tabs>
            <div class="m-content" v-for="(item, key) in ai" :key="key" :id="key">
                <page-title :data="{ title: item.title }"></page-title>
                <div class="wp">
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
        tabs() {
            return Object.values(this.ai).map((item) => item.title);
        },
    },
    methods: {
        update(name) {
            this.active = name;
            let _name = "";
            for (const key in this.ai) {
                if (this.ai[key].title == name) _name = key;
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
