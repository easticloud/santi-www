<template>
    <div class="m-item-cooperation">
        <img class="icon" :src="require(`../../static/images/${data.icon}`)" />
        <span class="title">{{ data.title }}</span>
        <span class="desc">{{ data.desc }}</span>
    </div>
</template>
<script>
export default {
    props: ["data"],
};
</script>

<style lang="less">
.m-item-cooperation {
    .size(385px,270px);
    .r(5px);
    .flex;
    padding: 33px;
    box-sizing: border-box;
    align-items: center;
    flex-direction: column;
    background: #ffffff;
    gap: 15px;
    .icon {
        .size(65px);
    }
    .title {
        .fz(21px,27px);
    }
    .desc {
        .fz(16px,22px);
        color: #888;
    }
}
</style>
