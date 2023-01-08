<template>
    <div class="m-item-info wp" v-if="data">
        <span class="label">{{ data.label }} <img class="icon" src="../../static/images/box/fire.svg" /> </span>
        <span class="desc">{{ data.desc }}</span>
    </div>
</template>
<script>
export default {
    props: ["data"],
};
</script>

<style lang="less">
.m-item-info {
    .flex;
    .size(100%,186px);
    .r(5px);
    padding: 50px 60px;
    box-sizing: border-box;
    background-color: #fff;
    flex-direction: column;
    gap: 17px;
    .label {
        .flex;
        .fz(21px,27px);
        align-items: center;
        .icon {
            .size(25px);
        }
    }
    .desc {
        .fz(16px,21px);
        color: #666;
    }
}
</style>
