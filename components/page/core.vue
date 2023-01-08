<template>
    <div class="m-item-core">
        <div class="title">
            <img class="icon" :src="require(`../../static/images/${data.icon}`)" />
            <span>{{ data.title }}</span>
        </div>
        <div class="desc">{{ data.desc }}</div>
    </div>
</template>
<script>
export default {
    props: ["data"],
};
</script>

<style lang="less">
.m-item-core {
    .flex;
    .size(590px,180px);
    .r(5px);
    gap: 20px;
    flex-direction: column;
    box-sizing: border-box;
    padding: 47px 60px;
    background-color: #fff;
    .title {
        .flex;
        .fz(21px 27px);
        align-items: center;
        gap: 20px;
        .icon {
            .size(45px);
        }
    }
    .desc {
        .fz(16px,21px);
        color: #666;
    }
}
</style>
