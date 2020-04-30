; (function () {
    var bp = document.createElement('script')
    var curProtocol = window.location.protocol.split(':')[0]
    if (curProtocol === 'https') {
        bp.src = 'https://zz.bdstatic.com/linksubmit/push.js'
    } else {
        bp.src = 'http://push.zhanzhang.baidu.com/push.js'
    }
    var s = document.getElementsByTagName('script')[0]
    s.parentNode.insertBefore(bp, s)
})() // Baidu Push

var $buoop = {
    required: { e: -4, f: -10, o: -6, s: -2, c: -10 },
    insecure: true,
    unsupported: true,
    api: 2020.02,
}
function $buo_f() {
    var e = document.createElement('script')
    e.src = '//browser-update.org/update.min.js'
    document.body.appendChild(e)
}
try {
    document.addEventListener('DOMContentLoaded', $buo_f, false)
} catch (e) {
    window.attachEvent('onload', $buo_f)
} // Notification for updating browser

var _hmt = _hmt || [];
(function () {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?eb37307740f68c2e868c9aad387d40ae";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})(); // Baidu Tongji