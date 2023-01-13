<template>
    <div class="m-item-appliance" :class="data.direction">
        <img :src="require(`../../static/images/${data.bg}`)" class="img" />
        <div class="box">
            <span class="title">{{ data.label }}</span>
            <span class="desc">{{ data.desc }}</span>
        </div>
    </div>
</template>
<script>
export default {
    props: ["data"],

    methods: {},
};
</script>

<style lang="less">
.m-item-appliance {
    .flex;
    .size(100%,295px);
    .r(5px);
    gap: 35px;
    padding: 52px 60px;
    box-sizing: border-box;
    background-color: #fff;
    .img {
        .size(388px,190px);
    }
    .box {
        .flex;
        flex-direction: column;
        .title {
            .fz(21px,27px);
        }
        .desc {
            .mt(14px);
            .fz(16px,25px);
            color: #666;
        }
    }
    &.right {
        .img {
            order: 1;
        }
    }
}
@media screen and (max-width: @phone) {
    .m-item-appliance {
        flex-direction: column;
        .h(auto);
        gap: 20px;
        padding: 20px;
        .img {
            .size(100%,auto);
        }
        .box {
            .title {
                .fz(16px,24px);
            }
            .desc {
                .mt(10px);
                .fz(14px,20px);
            }
        }
        &.right {
            .img {
                order: 0;
            }
        }
    }
}
</style>
