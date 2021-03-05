//封面信息（key、方法名不可更改， "source":"JS"不可缺少）
function coverInfo() {
    var name = "国产";
    var imageURL = "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1843942387,3971910967&fm=26&gp=0.jpg";
    var online = "40";
    return { "name": name, "logo": imageURL, "source": "JS", "quantity": online };
}

function pageInfo() {
    return { "usePage": "0", "beginPage": "1", "pageKey": "p" }
}

//房间列表（key、方法名不可更改）
function videoListInfo() {
    var url = "http://jk.5apk.cn/api/video_class";
    var method = "POST";
    var param = {
        "page": 1,
        "limit": 10,
        "class_id": [
            40,
            41,
            58
        ]
    };
    var header = {};
    return { "url": url, "method": method, "param": param, "header": header };
}

//处理网络数据，统一格式（key、方法名不可更改）
function handleData(dic) {
    var dataArr = dic["data"];
    var formatArr = new Array();
    for (let i = 0; i < dataArr.length; i++) {
        let subDic = dataArr[i];

        var formatDic = {
            "name": subDic["name"],
            "Popularity": "9",
            "video": subDic["shiping"],
            "cover": subDic["img"],
            "id": "0"
        };
        formatArr.push(formatDic);

    }

    return { "data": formatArr };
}
