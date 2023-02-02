<template>
    <div class="m-index-ai">
        <!-- ai 技术 -->
        <div class="wp">
            <div class="box" v-for="(item, key) in ai" :key="key" :class="key">
                <div class="item wow animate__fadeInUp" v-for="a in item" :key="a.icon">
                    <span class="name">{{ a.name }}</span>
                    <img
                        class="icon"
                        :class="a.name == '全栈AI技术' ? 'p-animation-infinite pulse' : ''"
                        :src="require(`/static/images/${a.icon}`)"
                    />
                </div>
            </div>
        </div>
        <!-- ai -->
        <div class="devices">
            <div class="wp wow animate__fadeInUp">
                <div class="item" v-for="(item, i) in ai_devices" :key="i">
                    <img class="icon p-animation" :src="require(`/static/images/${item.icon}`)" />
                    <span class="name">{{ item.name }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { ai, ai_devices } from "@/assets/data/index.json";
export default {
    data() {
        return {
            ai,
            ai_devices,
        };
    },
    methods: {},
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
@import "~@/assets/css/components/ai.less";
</style>
