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
            <div class="box">
                <div class="item first">
                    <a :href="contact.link" class="title">{{ contact.title }}</a>
                    <span v-for="(item, i) in contact.desc" :key="i" :class="`desc desc-${i + 1}`">
                        <img class="icon" v-if="i == 1" :src="require(`../static/images/index/phone.svg`)" />
                        {{ item }}
                    </span>
                </div>
                <div class="item two">
                    <a :href="ai.link" class="title">{{ ai.title }}</a>
                    <a :href="core.link" class="title">{{ core.title }}</a>
                    <a :href="item.link" class="desc" v-for="(item, i) in core.list" :key="i">{{ item.title }}</a>
                </div>
                <div class="item">
                    <a :href="programs.link" class="title">{{ programs.title }}</a>
                    <a :href="item.link" class="desc" v-for="(item, i) in programs.list" :key="i">{{ item.title }}</a>
                </div>
                <div class="item">
                    <a :href="about.link" class="title">{{ about.title }}</a>
                    <a :href="item.link" class="desc" v-for="(item, i) in about.list" :key="i">{{ item.title }}</a>
                </div>
                <div class="item">
                    <a :href="santi.link" class="title">{{ santi.title }}</a>
                    <span class="label">{{ santi.label }}</span>
                    <img class="code" src="../static/images/index/code.jpg" />
                </div>
            </div>
        </div>
        <div class="copyright">© 2022 南京三体数字科技有限公司 丨 苏ICP备15031332号</div>
    </div>
</template>

<script>
import { icon, footer } from "@/assets/data/index.json";
export default {
    data() {
        return {
            icon,
            footer,
        };
    },
    computed: {
        contact() {
            return this.footer.contact;
        },
        ai() {
            return this.footer.ai;
        },
        core() {
            return this.footer.core;
        },
        programs() {
            return this.footer.programs;
        },
        about() {
            return this.footer.about;
        },
        santi() {
            return this.footer.santi;
        },
    },
};
</script>

<style lang="less">
@import "~@/assets/css/components/footer.less";
</style>
