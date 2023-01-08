<template>
    <div class="m-item-tabs" :class="{ background }">
        <div class="tabs wp">
            <span
                class="item"
                :class="{ active: active == item }"
                v-for="item in data"
                :key="item"
                @click="change(item)"
            >
                {{ item }}
            </span>
        </div>
    </div>
</template>
<script>
export default {
    props: ["data", "active", "background"],
    emits: ["update"],
    methods: {
        change(item) {
            this.$emit("update", item);
        },
    },
};
</script>

<style lang="less">
@import "~@/assets/css/components/tabs.less";
</style>
