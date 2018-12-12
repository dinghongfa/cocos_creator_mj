var GameDefs = require("GameDefs");
var TurnoverItem = cc.Class({
    extends: cc.Component,

    properties: {
        label1:{
            default: null,
            type: cc.Label,
        },
        label2:{
            default: null,
            type: cc.Label,
        },
        label3:{
            default: null,
            type: cc.Label,
        },
        label4:{
            default: null,
            type: cc.Label,
        },
        label5:{
            default: null,
            type: cc.Label,
        },
    },

    
    getDirectionName(a,b)
    {
        var pos = a - b;
        var showWinDir = "对家"
        if ((pos == -2)||(pos == 2))
        {
            showWinDir = "对家";
        }else if ((pos == -1)||(pos == 3))
        {
            showWinDir = "下家";
        }else if ((pos == -3)||(pos == 1))
        {
            showWinDir = "上家";
        }
        return showWinDir
    },

    initData:function(stSinleScore,myChair){
        
        //倍数
        this.label2.string = Math.pow(2,stSinleScore.cbFan) +"倍";

        //查花猪和查大叫不显示倍数
        if (stSinleScore.cbScoreType == 6 || stSinleScore.cbScoreType == 5)
            this.label2.string = ""

        //分数
        if (stSinleScore.nScore > 0){
            this.label4.string = "+"+stSinleScore.nScore;
            this.label4.node.active = true;
        }else{
            this.label5.string = stSinleScore.nScore;
            this.label5.node.active = true;
        }

        var strType =  GameDefs.SCORE_TYPE_STRING[stSinleScore.cbScoreType];
        if (myChair == stSinleScore.cbFangpaoChair && stSinleScore.nScore < 0)
            strType = GameDefs.OTHER_SCORE_TYPE_STRING[stSinleScore.cbScoreType];
        
        //记录赢家是哪一家，或者放炮给我的是哪一家，自己自摸和暗杠续杠就不记录(因为赢的是三家的)
        var showWinDir = "";
        if (myChair == stSinleScore.cbWinChair){
            if (stSinleScore.cbScoreType == 1||stSinleScore.cbScoreType == 2||stSinleScore.cbScoreType == 4){
                showWinDir = "三家"
            }else{
                showWinDir = this.getDirectionName(stSinleScore.cbFangpaoChair,stSinleScore.cbWinChair);
            }
        }
        if (myChair == stSinleScore.cbFangpaoChair && myChair != stSinleScore.cbWinChair)
        {
            showWinDir = this.getDirectionName(stSinleScore.cbFangpaoChair,stSinleScore.cbWinChair);
        }

        //------------------------------------------------------------------------------
        //暗杠看不到cbFangpaoChair，查大叫和查花猪看不到cbWinChair，这三个单独处理
        if(stSinleScore.cbScoreType == 2)
        {
            if (stSinleScore.nScore > 0)
            {
                showWinDir = "三家";
            }else{
                showWinDir = this.getDirectionName(myChair,stSinleScore.cbWinChair);
                strType = GameDefs.OTHER_SCORE_TYPE_STRING[stSinleScore.cbScoreType];
            }
        }
        else if(stSinleScore.cbScoreType == 5 || stSinleScore.cbScoreType == 6)
        {
            if (stSinleScore.nScore < 0)
            {
                showWinDir = "三家";
            }else{
                showWinDir = this.getDirectionName(stSinleScore.cbFangpaoChair,myChair);
            }
        }   

        //下雨的时候，分数小于0，说明是被下雨
        if(stSinleScore.cbScoreType == 3 ||stSinleScore.cbScoreType == 4){
            if (stSinleScore.nScore < 0){
                strType = GameDefs.OTHER_SCORE_TYPE_STRING[stSinleScore.cbScoreType];
                showWinDir = this.getDirectionName(myChair,stSinleScore.cbWinChair);
            }
        }

        //方向
        this.label3.string = showWinDir;
        var  huMsg = "";
        if(stSinleScore.cbHuTypeCount > 0)
        {
            huMsg = "(";
            for (var i = 0; i < stSinleScore.cbHuTypeCount;i++)
            {
                if (stSinleScore.cbHuType[i] != 23 && stSinleScore.cbHuType[i]!=24) {
                    if (i > 0)
                        huMsg = huMsg + ",";
                    huMsg = huMsg + GameDefs.HUTYPE_STRING[stSinleScore.cbHuType[i] - 1];
                }
            }
            if (stSinleScore.cbGen > 0)
                huMsg = huMsg + "," + stSinleScore.cbGen + "根";
            huMsg = huMsg + ")";
        }

        //胡牌类型
        this.label1.string = strType + huMsg;
    },
});

module.exports = TurnoverItem;