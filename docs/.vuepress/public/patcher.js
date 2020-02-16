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
})() //Baidu Push

var $buoop = {
    required: { e: -4, f: -6, o: -6, s: -2, c: -6 },
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
} //notification for updating browser