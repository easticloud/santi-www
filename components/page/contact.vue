<template>
    <div class="m-item-contact wp">
        <div class="m-form">
            <div class="m-item m-row" @click="onFocus('name')">
                <span class="u-label">联系人</span>
                <div class="u-input" :class="[active == 'name' ? 'active' : '', rules.name.isErr ? 'err' : '']">
                    <img class="u-icon" src="../../static/images/about/name.svg" />
                    <input type="text" v-model="form.name" placeholder="请填写您的名称（称呼）" />
                </div>
                <span class="u-err" v-if="rules.name.isErr">{{ rules.name.value }}</span>
            </div>
            <div class="m-item m-row" @click="onFocus('phone')">
                <span class="u-label">联系电话</span>
                <div class="u-input" :class="[active == 'phone' ? 'active' : '', rules.phone.isErr ? 'err' : '']">
                    <img class="u-icon" src="../../static/images/about/phone.svg" />
                    <span class="u-desc">+86</span>
                    <input type="text" v-model="form.phone" placeholder="请填写您的联系电话" />
                </div>
                <span class="u-err" v-if="rules.phone.isErr">{{ rules.phone.value }}</span>
            </div>
            <div class="m-item m-row" @click="onFocus('email')">
                <span class="u-label">联系邮箱</span>
                <div class="u-input" :class="[active == 'email' ? 'active' : '', rules.email.isErr ? 'err' : '']">
                    <img class="u-icon" src="../../static/images/about/email.svg" />
                    <input type="text" v-model="form.email" placeholder="请填写您的邮箱地址" />
                </div>
                <span class="u-err" v-if="rules.email.isErr">{{ rules.email.value }}</span>
            </div>
            <div class="m-item m-row" @click="onFocus('addr')">
                <span class="u-label">联系地址</span>
                <div class="u-input" :class="[active == 'addr' ? 'active' : '', rules.addr.isErr ? 'err' : '']">
                    <img class="u-icon" src="../../static/images/about/addr.svg" />
                    <input type="text" v-model="form.addr" placeholder="请填写您的联系地址" />
                </div>
                <span class="u-err" v-if="rules.addr.isErr">{{ rules.addr.value }}</span>
            </div>
            <div class="m-item m-row" @click="onFocus('content')">
                <span class="u-label">留言内容</span>
                <div
                    class="u-textarea"
                    :class="[active == 'content' ? 'active' : '', rules.content.isErr ? 'err' : '']"
                >
                    <img class="u-icon" src="../../static/images/about/content.svg" />
                    <textarea v-model="form.content" placeholder="请填写您的具体需求"></textarea>
                </div>
                <span class="u-err" v-if="rules.content.isErr">{{ rules.content.value }}</span>
            </div>
        </div>
        <div class="m-btns">
            <span class="u-btn u-reset" @click="onReset">重新输入</span>
            <span class="u-btn u-submit" @click="onSubmit">提交内容</span>
        </div>
    </div>
</template>
<script>
import { createMessage } from "@/utils/api.js";
export default {
    data() {
        return {
            form: {
                name: "",
                phone: "",
                email: "",
                addr: "",
                content: "",
            },
            rules: {
                name: {
                    isErr: false,
                    value: "请填写您的名称（称呼）",
                },
                phone: {
                    isErr: false,
                    value: "请填写您的联系电话",
                },
                email: {
                    isErr: false,
                    value: "请填写您的邮箱地址",
                },
                addr: {
                    isErr: false,
                    value: "请填写您的联系地址",
                },
                content: {
                    isErr: false,
                    value: "请填写您的具体需求",
                },
            },
            active: "",
        };
    },
    methods: {
        onFocus(key) {
            this.active = key;
        },
        checkForm(form) {
            Object.keys(form).forEach((key) => {
                if (form[key]) {
                    this.rules[key].isErr = false;

                    // 判断手机号
                    const phoneReg = /^1[34578]\d{9}$/g;
                    if (key == "phone" && !phoneReg.test(form[key])) {
                        this.rules["phone"].isErr = true;
                        this.rules["phone"].value = "请填写正确的手机号码";
                    }

                    // 判断邮箱
                    const emailReg = /^([A-Za-z0-9_\-\.]+)@([A-Za-z0-9_\-\.]+)\.([A-Za-z]{2,6})$/g;
                    if (key == "email" && !emailReg.test(form[key])) {
                        this.rules["email"].isErr = true;
                        this.rules["email"].value = "请填写正确的邮箱地址";
                    }

                    // 判断地址
                    if (key == "addr" && form[key].length < 8) {
                        this.rules["addr"].isErr = true;
                        this.rules["addr"].value = "请填写具体的联系地址";
                    }

                    // 判断地址
                    if (key == "content" && form[key].length < 20) {
                        this.rules["content"].isErr = true;
                        this.rules["content"].value = "请填写详细的需求，不少于20个字";
                    }
                } else {
                    this.rules[key].isErr = true;
                }
            });
        },

        onReset() {
            this.form = {
                name: "",
                phone: "",
                email: "",
                addr: "",
                content: "",
            };
            this.active = "";
            this.isCheck = false;
            Object.keys(this.form).forEach((key) => {
                this.rules[key].isErr = false;
            });
        },

        onSubmit() {
            this.checkForm(this.form);
            const isSubmit = Object.values(this.rules)
                .map((item) => item.isErr)
                .filter(Boolean);
            !isSubmit.length &&
                createMessage({ ...this.form, type: "santi" }).then(() => {
                    this.$notify({
                        title: "成功",
                        message: "留言成功",
                        type: "success",
                    });
                    this.onReset();
                });
        },
    },
};
</script>

<style lang="less">
@import "~@/assets/css/components/contact.less";
</style>
