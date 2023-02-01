import { WOW } from 'wowjs'
import '@/assets/css/animate.css'
window.WOW = WOW
new WOW({
    boxClass: 'wow',
    animateClass: 'animate__animated',
    offset: 0,
    mobile: true,
    live: true,
    callback: null,
    scrollContainer: null,
}).init()