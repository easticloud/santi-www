<template>
    <div class="c-header">
        <div class="wp">
            <a href="http://" target="_blank" class="logo">
                <img src="../static/images/index/logo.png" />
            </a>
            <div class="links">
                <a class="u-link" :href="item.link" target="_blank" v-for="(item, i) in header" :key="i">
                    {{ item.name }}
                </a>
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
        };
    },
};
</script>

<style lang="less">
@import "~@/assets/css/components/header.less";
</style>
