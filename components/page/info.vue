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
        gap: 3px;
        align-items: center;
        .icon {
            .size(25px);
            .pb(4px);
        }
    }
    .desc {
        .fz(16px,21px);
        color: #666;
    }
}
@media screen and (max-width: @phone) {
    .m-item-info {
        .size(100%,auto);
        padding: 20px !important;
        gap: 15px;
        .label {
            .flex;
            .fz(18px,24px); 
            .icon {
                .size(22px);
            }
        }
        .desc {
            .fz(14px,20px);
            color: #666;
        }
    }
}
</style>
