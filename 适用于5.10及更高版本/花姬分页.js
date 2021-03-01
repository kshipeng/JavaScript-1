
//过滤房间类型：2：收费房；0：显示所有房间
var roomType = "0";


//封面信息（key、方法名不可更改， "source":"JS"不可缺少）
function coverInfo() {
    var name = "花姬分页";
    var imageURL = "https://vx3w6yeuqr.oss-cn-shanghai.aliyuncs.com/logo/huaji.png";
    var online = "50";
    return { "name": name, "logo": imageURL, "source": "JS", "quantity": online };
}

function pageInfo() {
    return { "usePage": "1", "beginPage": "1", "pageKey": "p" }
}

//房间列表（key、方法名不可更改）
function videoListInfo() {
    var url = "http://s6000ws.babyea.com/api/public/?service=Home.getHot";
    var method = "POST";
    var param = { "p": "1" };
    var header = {};
    return { "url": url, "method": method, "param": param, "header": header };
}

//处理网络数据，统一格式（key、方法名不可更改）
function handleData(dic) {
    var dataArr = dic["data"]["info"][0]["list"];
    var formatArr = new Array();
    for (let i = 0; i < dataArr.length; i++) {
        let subDic = dataArr[i];
        var formatDic = {
                "name": subDic["title"],
                "Popularity": subDic["nums"],
                "video": subDic["pull"],
                "cover": subDic["thumb"],
                "id": subDic["uid"],
                "tagStr": "",
                "roomTitle": subDic["user_nicename"]
            };
        if (subDic["type"] == 2) {
            formatDic["tagStr"] = " 付费房💰"+subDic["type_val"]+"🎫 ";
        }else if (subDic["type"] == 3) {
            formatDic["tagStr"] = " 计时房🕛"+subDic["type_val"]+"/分 ";
        }
        if (subDic["type"] == roomType || roomType == "0") {
            formatArr.push(formatDic);
        }else if (roomType == "6" && subDic["type"] != "0") {
            formatArr.push(formatDic);     
        }

    }

    return { "data": formatArr };
}
