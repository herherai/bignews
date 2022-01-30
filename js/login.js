$(function() {
    // 点击去注册账号的连接
    $('#link-login').on('click', function() {
        $('.login-box').show()
        $('.reg-box').hide()
    })
    $('#link-reg').on('click', function() {
        $('.login-box').hide()
        $('.reg-box').show()
    })


})