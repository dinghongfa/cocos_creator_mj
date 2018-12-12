var AladinSDK = require("../aladinSDK");
import {TSCommon} from "TSCommon";
var HallResources = require("./HallResources");
cc.Class({
    extends: cc.Component,

    properties: {
    },

    onLoad () {
        var windowSize = cc.view.getVisibleSize();

            this.node.width = windowSize.width;
            this.node.height = windowSize.height;
    },


    // 点击SDK九宫格
    onClickJiuGongGeBtn:function(){
        console.log("点击九宫格按钮")
        AladinSDK.ShowDrawer()
    },

    // 点击SDK猜你爱玩
    onClickCaiNiAiWanBtn:function(){
        console.log("点击猜你爱玩按钮")
        TSCommon.dispatchEvent(HallResources.openSDKFav,true);

    },
});
