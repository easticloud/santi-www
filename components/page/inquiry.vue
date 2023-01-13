<template>
    <div class="m-item-inquiry">
        <img class="img" :src="require(`../../static/images/${data.img}`)" />
        <div class="box">
            <span class="title">{{ data.title }}</span>
            <span class="desc">{{ data.desc }}</span>
            <span class="phone">{{ data.phone }}</span>
        </div>
    </div>
</template>
<script>
export default {
    props: ["data"],
};
</script>

<style lang="less">
.m-item-inquiry {
    .flex;
    gap: 35px;
    .img {
        .size(120px);
    }
    .box {
        .flex;
        flex-direction: column;
    }
    .title {
        .fz(21px,27px);
    }
    .desc {
        .mt(29px);
        .fz(16px,21px);
        color: #888;
    }
    .phone {
        .mt(18px);
        .fz(18px,24px);
        .nobreak;
    }
}
@media screen and (max-width: @phone) {
    .m-item-inquiry {
        gap: 20px;
        .img {
            .size(80px);
        }
        .title {
            .fz(21px,27px);
        }
        .desc {
            .mt(0);
            .fz(12px,24px);
        }
        .phone {
            .mt(0);
            .fz(12px,24px);
        }
    }
}
</style>
