var FakeBg = cc.Class({
    extends: cc.Component,

    properties: {
        loadingProgress:{
            default: null,
            type: cc.Label,
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function () {

        var self = this;
        this.scheduleOnce(function () {
            self.addHallSceneResources();
        }, 0.01);
    },

    addHallSceneResources:function(){
        var self = this;
        cc.loader.loadResDir("texture", function (completedCount, totalCount, item) {
            self.loadingProgress.string = "加载大厅资源:"+ (parseInt(completedCount/totalCount*100)) +"%" ;
        }, 
        function (err, assets) {
            console.log("加载完成大厅内的资源");
            cc.director.loadScene('HallPlatformScene', function(){
            });
        });
    },
});