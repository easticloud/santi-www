<template>
    <div class="c-header">
        <div class="wp" :class="{ show }">
            <a href="/" target="_blank" class="logo">
                <img src="../static/images/index/logo.svg" />
            </a>
            <div class="links">
                <span v-for="(item, i) in header" :key="i">
                    <template v-if="item.link">
                        <a class="u-link" :href="item.link" target="_blank">
                            {{ item.name }}
                        </a>
                    </template>
                    <div v-else class="u-item">
                        <span class="u-link">{{ item.name }}</span>
                        <div class="box">
                            <a class="u-link" v-for="(a, k) in item.list" :href="a.link" target="_blank">
                                {{ a.name }}
                            </a>
                        </div>
                    </div>
                </span>
            </div>
            <img class="icon" src="../static/images/menu.svg" @click="change" />
        </div>
        <div class="c-mobile" v-show="show">
            <div class="m-menu">
                <nuxt-link class="u-link" v-for="(item, i) in mobileHeader" :key="i" :to="item.link">
                    <span class="u-txt" @click="show = false">
                        {{ item.name }}
                    </span>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
import { header } from "@/assets/data/index.json";
export default {
    data() {
        return {
            header,
            show: false,
        };
    },
    computed: {
        mobileHeader() {
            let list = [];
            this.header.forEach((item) => {
                item.link ? list.push(item) : list.push(...item.list);
            });
            return list;
        },
    },
    methods: {
        change() {
            this.show = !this.show;
        },
    },
};
</script>

<style lang="less">
@import "~@/assets/css/components/header.less";
</style>
