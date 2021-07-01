'use strict';

const Controller = require('egg').Controller;
const crypto = require('crypto');

class HomeController extends Controller {


    async index() {
        const ctx = this.ctx;
        await ctx.render('/index.html');
    }

}

module.exports = HomeController;
