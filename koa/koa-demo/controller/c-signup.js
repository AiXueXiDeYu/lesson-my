exports.getSignup = async ctx => {
    //显示注册页 view
    // ctx.response.body = '注册'
    let data = {
        title: '注册'
    }
    await ctx.render('signup',data)//渲染一个模板
}
exports.postSignup = async ctx => { 
    // model
    console.log(ctx.request.body);
    ctx.body = 'post'
}