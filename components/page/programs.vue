<template>
    <div class="m-item-programs wp">
        <img :src="require(`../../static/images/${data.img}`)" class="img" :style="{ width: data.width }" />
        <div class="box">
            <span class="title">{{ data.title }}</span>
            <div class="item" v-for="(item, i) in list" :key="i">
                <div class="label">
                    <img src="../../static/images/programs/icon.svg" class="icon" />
                    {{ item.title }}
                </div>
                <span class="desc" v-if="item.desc">{{ item.desc }}</span>
                <div class="list" v-if="item.list">
                    <span class="u-list" v-for="(list, key) in item.list" :key="key">
                        <img src="../../static/images/programs/dot.svg" class="dot" />
                        {{ list }}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ["data"],
    computed: {
        list() {
            return this.data.list || [];
        },
    },
};
</script>

<style lang="less">
.m-item-programs {
    .flex;
    .r(5px);
    .clip;
    background-color: #fff;
    .img {
        .h(auto);
        flex-shrink: 0;
    }
    .box {
        .flex;
        flex-direction: column;
        padding: 35px 30px;
        box-sizing: border-box;
        gap: 26px;
        .title {
            .fz(21px,27px);
        }
        .item {
            .flex;
            flex-direction: column;
            gap: 13px;
            .label {
                .flex;
                align-items: center;
                gap: 10px;
                .icon {
                    .size(30px);
                }
            }
            .desc,
            .list {
                .fz(16px,22px);
                color: #888;
            }
            .list {
                .flex;
                flex-direction: column;
                gap: 10px;
                .u-list {
                    .flex;
                    gap: 10px;
                    align-items: baseline;
                    .dot {
                        .size(8px);
                    }
                }
            }
        }
    }
}
@media screen and (max-width: @phone) {
    .m-item-programs {
        padding: 20px 20px 0 20px !important;
        flex-direction: column;
        .img {
            .h(auto);
            flex-shrink: 0;
        }
    }
}
</style>
