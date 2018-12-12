var HallResources = require("HallResources")
var MoreGameListLayer = cc.Class({
    extends: cc.Component,
    properties: {
        gameList:{
            default: null,
            type: cc.ScrollView,
        },
        moreGameUpNode:{
            default: null,
            type: cc.Node,
        },
        moreGameUpBg:{
            default: null,
            type: cc.Node,
        },

    },

    onLoad:function() {
        
    },

    initData:function(data,hot,changwan)
    {
        this.gameList.getComponent("MoreGameList").initData(data,hot,changwan);
    },


});

module.exports = MoreGameListLayer;