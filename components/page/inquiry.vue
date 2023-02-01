<template>
    <div class="m-item-inquiry" @mouseover="mouseover" @mouseout="mouseout">
        <div class="img">
            <img
                class="p-animation-0"
                :class="{ scale, scale_move }"
                :src="require(`../../static/images/${data.img}`)"
            />
        </div>
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
    data() {
        return {
            scale: false,
            scale_move: false,
        };
    },
    methods: {
        mouseover() {
            this.scale = true;
            this.scale_move = false;
        },
        mouseout() {
            this.scale = false;
            this.scale_move = true;
        },
    },
};
</script>

<style lang="less">
.m-item-inquiry {
    .flex;
    gap: 35px;
    .img {
        .size(120px);
        .clip;
        flex-shrink: 0;
        img {
            .full;
        }
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
