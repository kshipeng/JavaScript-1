[小妲己++5.32（原小奶猫++）](https://ishared.lanzoui.com/iurBIjduv7a)(没签名) 

1月24号更新：**移除：** 西施、豆豆、享色
            **新增：** 醉月娱乐、大香蕉、樱花

12月31号更新：**移除：** 77直播、夏娃、蝶恋花、花蝴蝶
            **新增：** 萤火、菲姬、苦瓜、豆豆、享色

12月28号更新：修复小奶猫收费2无数据的问题。

12月15号更新：**移除：** pp直播、樱桃、咪咪直播、亚米。
            **新增：** 77直播、西施、蜜豆、花蝴蝶。

11月22号更新：移除：七月收费、恋人、SM。新增：大秀、彩虹、五月。

11月24日更新，解决数据不能加载的问题。

需要更新的，重新添加即可。

# 适用于小奶猫++的JavaScript
声明：本仓库仅是学习js的一点实践，请勿传播，下载后请于24小时内删除，不得用于商业或任何违法途径，否则后果由使用者自负，与本人无关！请知悉！

脚本使用：

方式一：点击打开xx.js文件，找到"Raw"按钮并点击，然后复制打开的网页地址，小奶猫++选择“网络获取”粘贴至文本框确定即可。

5.10及更高版本，[点击此处打开](https://raw.githubusercontent.com/reapple/JavaScript/master/批量添加/适用于5.10及更高的版本.txt)，复制网页内容，小奶猫++选择“网络获取”粘贴至文本框确定即可批量添加。

方式二：复制xx.js文件内容，小奶猫++选择“本地生成”粘贴进去即可。

制作脚本说明：

```javascript

//以下方法必须存在且名称不可更改，其中涉及到的字典中的key的名字也是固定的，否则无法解析

//封面信息（key、方法名不可更改， "source":"JS"不可缺少）
function coverInfo() {
    //平台名称
    var name = "花姬2";
    //平台封面图的url
    var imageURL = "http://xxx.63a0.com/Uploads/cover.jpg";
    //平台房间数
    var online = "100";
    return { "name": name, "logo": imageURL, "source":"JS", "quantity":online };
}

//5.10及更高版本支持分页
//usePage：1代表使用分也、0不使用
//beginPage：开始的页码
//pageKey：videoListInfo()函数中页数对应的字段名
function pageInfo() {
    return { "usePage": "1", "beginPage": "1", "pageKey": "p" }
}

//房间列表（key、方法名不可更改）
function videoListInfo() {
    //房间列表数据url
    var url = "https://xxx.xxx.com/index.php/Api/";
    //请求方法：GET或者POST
    var method = "POST";
    //请求参数
    var param = { "p": "1" };
    //请求头参数
    var header = {};
    return { "url": url, "method": method, "param": param, "header": header };
}

//处理网络数据，统一格式（key、方法名不可更改）
function handleData(dic) {
    //dic 为字典(房间列表url返回的数据)，需经过处理，最终如下,key的名称必须如下所示
    // {
    //     "data": [
    //         {
                    //房间名称
    //             "name": "TG@iCodess",
                    //封面图地址
    //             "cover": "https://downaoligie.oss-cn-qingdao.aliyuncs.com/65.jpg",
                    //拉流地址（直播源）
    //             "video": "rtmp://tpull.amghkwy.cn/live/9185723_1598444341?txSecret=cf2a19ff267b69c798f7f8bb0e95d574&txTime=5F45AA75",
                    //在线人数
    //             "Popularity": "666666",
                    //房间id
    //             "id": "999999"
    //         },
    //         ...
    // }

    var dataArr = dic["data"];
    var formatArr = new Array();
    for (let i = 0; i < dataArr.length; i++) {
        let subDic = dataArr[i];
        var formatDic = {
            "name": subDic["title"],
            "Popularity": subDic["watch_number"],
            "video": subDic["address"],
            "cover": subDic["header"],
            "id": subDic["room_id"]
        };
        formatArr.push(formatDic);
    }

    return { "data": formatArr };
}
```
