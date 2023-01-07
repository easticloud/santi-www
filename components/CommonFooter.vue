<template>
    <div class="c-footer">
        <div class="icons">
            <div class="wp">
                <div class="item" v-for="(item, i) in icon" :key="i"> 
                    <img :src="require(`../static/images/index/icon-0${i + 1}.svg`)" class="icon" />
                    <span class="name">{{ item }}</span>
                </div>
            </div>
        </div>
        <div class="content wp">

        </div>
    </div>
</template>

<script>
import { icon } from "@/assets/data/index.json";
export default {
    data() {
        return {
            icon,
        };
    },
};
</script>

<style lang="less">
@import "~@/assets/css/components/footer.less";
</style>
