'use strict';

const Controller = require('egg').Controller;

class MsgController extends Controller {

    async receiveMsgFromClient() {
        const ctx = this.ctx;
        const ip = ctx.request.ip;
        const msg = ctx.request.query.msg;
        ctx.logger.error("receive msg from [" + ip + "],msg:" + msg);
        ctx.body = "success";
        //TODO 处理后续接收到的信息
    }

}

module.exports = MsgController;
