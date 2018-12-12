var AladinSDK = require("../aladinSDK");
import {TSCommon} from "TSCommon";
var HallResources = require("../hall/HallResources");
cc.Class({
    extends: cc.Component,

    properties: {
    },

    onLoad () {
        var windowSize = cc.view.getVisibleSize();

        this.node.width = windowSize.width;
        this.node.height = windowSize.height;
    },

    // 点击SDK GameBox
    onClickGameBoxBtn:function(){
        console.log("点击GameBox按钮")
        // AladinSDK.ShowGameBoxNode()
        TSCommon.dispatchEvent(HallResources.openSDKGameBox,true);
    },
});
