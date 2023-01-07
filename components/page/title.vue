<template>
    <div class="m-item-title">
        <div class="wp">
            <span class="title">{{ data.title }}</span>
            <span class="desc" v-if="data.desc">{{ data.desc }}</span>
        </div>
    </div>
</template>
<script>
export default {
    props: ["data"],
};
</script>

<style lang="less">
@import "~@/assets/css/components/title.less";
</style>
