<template>
    <div class="p-index">

        <!-- 公共头部 -->
        <common-header></common-header>

        <!-- test -->
        <client-only>
            <index-test></index-test>
        </client-only>

        <!-- 公共底部 -->
        <common-footer></common-footer>
    </div>
</template>

<script>
export default {
    name: "IndexPage",
};
</script>

<style lang="less">
@import "~@/assets/css/index.less";
</style>
