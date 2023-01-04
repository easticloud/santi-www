<template>
    <h1 class="red">Hello {{ title }}!</h1>
</template>

<script>
export default {

    // 静态数据
    data() {
        return { title: "bar" };
    },

    // 最异步数据处理，第一个参数为当前页面组件的 上下文对象，在服务器端调用asyncData时，您可以访问用户请求的req和res对象。
    // 注意：由于asyncData方法是在组件 初始化 前被调用的，所以在方法内是没有办法通过 this 来引用组件的实例对象。
    async asyncData({ params }) {
        // const { data } = await axios.get(`https://my-api/posts/${params.id}`);
        // return { title: data.title };
    },

    // 与 asyncData 方法类似，用于在渲染页面之前获取数据填充应用的状态树（store）。不同的是 fetch 方法不会设置组件的数据。
    async fetch({ store, params }) {
        // let { data } = await axios.get("http://my-api/stars");
        // store.commit("setStars", data);
    },

    // 配置当前页面的 Meta 标签
    head() {
        return {
            title: this.title,
            meta: [
                {
                    hid: "description", //唯一标识
                    name: "description",
                    content: "My custom description",
                },
            ],
        };
    },

    // 指定当前页面使用的布局
    layout: "layoutname",

    // 指定页面切换的过渡动效, https://www.nuxtjs.cn/api/pages-transition
    transition: "fade",

    // 布尔值，默认: false。 用于判定渲染页面前是否需要将当前页面滚动至顶部。这个配置用于 嵌套路由的应用场景。
    scrollToTop: true,

    // 指定页面的中间件，中间件会在页面渲染之前被调用
    middleware : [],

    // 校验方法用于校验 动态路由的参数
    validate: function (params) {
        return true;
    },

    // 默认情况下，query 的改变不会调用asyncData方法
    // 监听参数字符串更改并在更改时执行组件方法 (asyncData, fetch, validate, layout, ...)
    watchQuery: ['page']

};
</script>

<style>
.red {
    color: red;
}
</style>
