
var dailyTomorrowItem = cc.Class({
    extends: cc.Component,

    properties: {
        dayIcon: {
            default: null,
            type: cc.Sprite,
        },
        dayCount: {
            default: null,
            type: cc.Label,
        },
        coinIcon: {
            default: null,
            type: cc.Sprite,
        },
        loginAtlas: {
            default: null,
            type: cc.SpriteAtlas,
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function () {
    },


    start: function () {

    },
    initData:function(data){
        var self = this;
        this.dayCount.string = data.amount;

        this.dayIcon.spriteFrame = this.loginAtlas.getSpriteFrame("days"+data.days)

        this.coinIcon.spriteFrame = this.loginAtlas.getSpriteFrame(data.icon)
    },

    // update (dt) {},
});

module.exports = dailyTomorrowItem;