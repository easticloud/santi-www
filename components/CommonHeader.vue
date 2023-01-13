<template>
    <div class="c-header">
        <div class="wp" :class="{ show }">
            <a href="/" target="_blank" class="logo">
                <img src="../static/images/index/logo.svg" />
            </a>
            <div class="links">
                <a class="u-link" :href="item.link" target="_blank" v-for="(item, i) in header" :key="i">
                    {{ item.name }}
                </a>
            </div>
            <img class="icon" src="../static/images/menu.svg" @click="change" />
        </div>
        <div class="c-mobile" v-show="show">
            <div class="m-menu">
                <nuxt-link class="u-link" v-for="(item, i) in header" :key="i" :to="item.link">
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
