import Vue from 'vue';
import { Message, Notification, MessageBox } from "element-ui";
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;
Vue.prototype.$alert = MessageBox.alert;
const POP = new Vue();

function loadPop(msg, popType = "message") {
    switch (popType) {
        case "message":
            POP.$message.error(msg);
            break;
        case "alert":
            POP.$alert(msg, "错误", {
                confirmButtonText: "确定",
            });
            break;
        case "notify":
            POP.$notify.error({
                title: "错误",
                message: msg,
            });
            break;
        default:
            break;
    }
}

/**
 * 标准统一包装模式
 *
 * @param {*} target
 * @param {*} options
 */
function installStandardInterceptors(target, options) {
    let popType = (options && options.popType) || "message";
    target["interceptors"]["response"].use(
        function (response) {
            if (response.data.code) {
                if (!options || !options.mute) {
                    response.data.msg && loadPop(`[${response.data.code}]${response.data.msg}`, popType);
                }
                return Promise.reject(response);
            }
            return response;
        },
        function (err) {
            if (!options || !options.mute) {
                if (err.response && err.response.data && err.response.data.msg) {
                    loadPop(err.response.data.msg, popType);
                } else {
                    loadPop("请求异常，请稍后重试", popType);
                }
            }
            return Promise.reject(err);
        }
    );
}

export { installStandardInterceptors, loadPop };
