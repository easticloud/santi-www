<template>
    <div class="m-item-scenes wp">
        <img :src="require(`../../static/images/${data.bg}`)" class="img" />
        <div class="scenes-box">
            <span class="label">{{ data.label }}</span>
            <span class="desc" v-for="(item, i) in data.list" :key="i">
                {{ item }}
            </span>
        </div>
    </div>
</template>
<script>
export default {
    props: ["data"]
};
</script>

<style lang="less">
@import "~@/assets/css/components/scenes.less";
</style>
