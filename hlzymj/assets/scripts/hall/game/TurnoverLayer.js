
var TurnoverLayer = cc.Class({
    extends: cc.Component,

    properties: {
        bg:{
            default: null,
            type: cc.Node,
        },
        now_score:{
            default: null,
            type: cc.Label,
        },
        now_lose_score:{
            default: null,
            type: cc.Label,
        },
        resultItem: cc.Prefab,
    },

    
    //界面载入
    onLoad: function () {
        this.init();

        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouch, this);
    },

    init:function(){

    },

    show:function(){
        this.node.active = true;
    },
    hide:function(){
        this.node.active = false;
    },
    onTouch: function (event) {
        cc.log("onTouch");
        var point = event.touch.getLocation();

        var convertPoint = this.bg.convertToNodeSpace(point);

        var size = this.bg.getContentSize();
        
        var rect = cc.rect(0, 0, size.width, size.height);

        if (!cc.rectContainsPoint(rect, convertPoint)) {          
            this.node.active = false;
        }
    },

    clearScore: function () {
        this.now_score.string = "0";
        this.now_lose_score.string ="0";
        this.content.removeAllChildren();
    },

    initData:function(cbWriteScoreTimes,stSingleScoreItem,myChair){

        var allScore = 0;
        var self = this;
        var scroll = this.bg.getChildByName("ScrollView")
        this.content = scroll.getComponent(cc.ScrollView).content;
        // self.maxHeight = this.content.height;
        this.content.removeAllChildren();
        for(var i=0; i<cbWriteScoreTimes; i++){
            var item = cc.instantiate(this.resultItem);
            item.parent = this.content;
            item.getComponent("TurnoverItem").initData(stSingleScoreItem[i],myChair);  
            var y = -25-i*(item.height + 5); 
            item.setPosition(0,y);
            allScore = allScore + stSingleScoreItem[i].nScore;
        }
        var newHeight =15+ (this.resultItem.data.height+5) * cbWriteScoreTimes;
        this.content.height = newHeight//(newHeight>self.maxHeight)?self.maxHeight:newHeight;
        if (allScore > 0){
            this.now_score.string = "+"+allScore;
            this.now_score.node.active = true;
            this.now_lose_score.node.active = false;
        }else{
            this.now_lose_score.string = allScore;
            this.now_lose_score.node.active = true;
            this.now_score.node.active = false;
        }
    }
});

module.exports = TurnoverLayer;