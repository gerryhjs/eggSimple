const Service = require('egg').Service;
const disableFirewall = false;


module.exports = options => {
    return async function auth(ctx, next) {
        let operate = (ctx.request.url + '?').substr(1, (ctx.request.url + '?').indexOf('?') - 1);
        if (1) {
            await next();
        } else {
            ctx.status = 403;
            ctx.logger.warn('[auth] no authority :' + operate + "--" + JSON.stringify(ctx.request));
        }
    };
};
