<template>
    <div class="m-item-appliance" :class="data.direction" @mouseover="mouseover" @mouseout="mouseout">
        <div class="img wow animate__zoomIn">
            <img
                class="p-animation-0"
                :src="require(`../../static/images/${data.bg}`)"
                :class="{ scale, scale_move }"
            />
        </div>
        <div class="box wow animate__zoomIn">
            <span class="title">{{ data.label }}</span>
            <span class="desc">{{ data.desc }}</span>
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
    mounted() {
        this.$nextTick(() => {
            if (process.browser) new WOW({ animateClass: "animate__animated" }).init();
        });
    },
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
        .clip;
        flex-shrink: 0;
        img {
            .full;
        }
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
